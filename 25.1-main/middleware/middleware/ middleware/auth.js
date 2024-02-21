const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Нет доступа' });
  }

  try {
    const decoded = jwt.verify(token, 'mysecretkey');
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Недействительный токен' });
  }
};

module.exports = auth;
