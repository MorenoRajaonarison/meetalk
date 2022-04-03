const User = require('../../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const login = async (req, res) => {
  try {
    const {email, password} = req.body
    const user = await User.findOne({email: email.toLowerCase()})
    if(user && (await bcrypt.compare(password, user.password))) {
      const token = 'token'
      return res.status(200).json({
        userDetails: {
          email: user.email,
          username: user.username,
          token
        }
      })
    }
    return res.status(400).send('invalid credentials...')
  } catch (e) {
    console.log(e.message)
  }
}

module.exports = login