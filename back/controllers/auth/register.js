const User = require('../../models/user')
const bcrypt = require('bcryptjs')

const register = async (req, res) => {
  try{
    const {username, email, password} = req.body

    // Verification si l'user exist
    const userExist = await User.exists({email: email.toLowerCase() })
    userExist && res.status(409).send('Ce Email est deja prise')

    // Encryption du password
    const encryptPass = await bcrypt.hash(password, 10)

    // Creation et enregistrement de l'user document dans le db
    const user = await User.create({
      email: email.toLowerCase(),
      username,
      password: encryptPass
    })

    // Creation du JWT token
    const token = 'token'

    res.status(201).json({
      userDetails: {
        email: user.email,
        username: user.username,
        token
      }
    })
  }catch (e){
    console.log(e.message)
  }
}
module.exports = register