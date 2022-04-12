const User = require('../../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const register = async (req, res) => {
  try{
    const {username, mail, password} = req.body

    // Verification si l'user exist
    const userExist = await User.exists({mail: mail.toLowerCase() })
    if(userExist){
      return res.status(409).send('Ce mail est deja prise')
    }

    // Encryption du password
    const encryptPass = await bcrypt.hash(password, 10)

    // Creation et enregistrement de l'user document dans le db
    const user = await User.create({
      mail: mail.toLowerCase(),
      username,
      password: encryptPass
    })

    // Creation du JWT token
    const token = jwt.sign({
      id: user._id,
      mail
    }, process.env.JWT_KEY,{
      expiresIn: '24h'
    })

    res.status(201).json({
      userDetails: {
        mail: user.mail,
        username: user.username,
        token
      }
    })
  }catch (e){
    return res.status(500).send("Error occured. Please try again");
  }
}
module.exports = register