const express = require("express");
const router = express.Router();

const Leave = require("../models/Leave");
const auth = require("../middleware/authMiddleware");

module.exports = router;

router.post("/apply", auth, async (req, res) => {
  try {
    const { leaveType, startDate, endDate, reason } = req.body;

    // Validation
    if (!leaveType || !startDate || !endDate || !reason) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    // Create leave
    const leave = new Leave({
      userId: req.user.id,
      leaveType,
      startDate,
      endDate,
      reason
    });

    await leave.save();

    res.status(201).json({
      msg: "Leave applied successfully",
      leave
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});


router.get("/my", auth, async (req, res) => {
  try {
    const leaves = await Leave.find({ userId: req.user.id });

    res.json(leaves);

  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});


router.get("/all", auth, async (req, res) => {
  try {
    // Role check
    if (req.user.role !== "employer") {
      return res.status(403).json({ msg: "Access denied" });
    }

    const leaves = await Leave.find()
      .populate("userId", "name email");

    res.json(leaves);

  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

router.put("/update/:id", auth, async (req, res) => {
  try {
    const { status } = req.body;

    // Only employer allowed
    if (req.user.role !== "employer") {
      return res.status(403).json({ msg: "Access denied" });
    }

    const leave = await Leave.findById(req.params.id);

    if (!leave) {
      return res.status(404).json({ msg: "Leave not found" });
    }

    leave.status = status;

    await leave.save();

    res.json({
      msg: "Leave updated successfully",
      leave
    });

  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});