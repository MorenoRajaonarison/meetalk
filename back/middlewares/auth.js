const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
  let token = req.body.token || req.query.token || req.headers['authorization']
  !token && res.status(403).send('Un jeton est requis pour l\'authentification')
  try {
    token = token.replace(/^Bearer\s+/, '')
    req.user = jwt.verify(token, process.env.JWT_KEY)
  }catch(e) {
    return res.status(401).send(e.message)
  }
  return next()
}

module.exports = verifyToken