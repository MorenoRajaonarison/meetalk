const User = require('../../models/user')
const postInvite = async (req, res) => {
  const {targetMail} = req.body
  const {id, mail} = req.user

  if(mail.toLowerCase() === targetMail.toLowerCase()){
    return res.status(409).send('Sorry, You cannot send invitation')
  }
  const targetUser = await User.findOne({mail:targetMail.toLowerCase()})
  if(!targetUser) {
    return res.status(404).send('This email does not exist')
  }
  return res.send('controller work')
}

module.exports = postInvite