const User = require('../../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const login = async (req, res) => {
  try {
    const {mail, password} = req.body
    const user = await User.findOne({mail: mail.toLowerCase()})
    if(user && (await bcrypt.compare(password, user.password))) {
      // Creation du JWT token
      const token = jwt.sign({
        id: user._id,
        mail
      }, process.env.JWT_KEY,{
        expiresIn: '24h'
      })
      return res.status(200).json({
        userDetails: {
          _id: user._id,
          mail: user.mail,
          username: user.username,
          token
        }
      })
    }
    return res.status(400).send('invalid credentials...')
  } catch (e) {
    return res.status(401).send(e.message)
  }
}

module.exports = login