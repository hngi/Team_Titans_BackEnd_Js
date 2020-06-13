const jwt = require('jsonwebtoken');
const config = require("../configs/index");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization_token;
    const decodedToken = jwt.verify(token, 'secret');
    const companyName = decodedToken.company_name;
    const accountId = decodedToken.account_id;
    if (!decodedToken) {
      res.status(401).json({
        error: 'Invalid request!'
      });
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: 'Invalid request!'
    });
  }
};