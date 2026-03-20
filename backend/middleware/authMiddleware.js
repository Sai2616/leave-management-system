const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.header("Authorization");

  // 1. Check token exists
  if (!token) {
    return res.status(401).json({ msg: "No token, access denied" });
  }

  try {
    // 2. Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 3. Attach user to request
    req.user = decoded;

    next(); // go to next function

  } catch (err) {
    res.status(401).json({ msg: "Invalid token" });
  }
};