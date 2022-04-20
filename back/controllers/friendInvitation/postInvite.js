const postInvite = async (req, res) => {
  const {targetMail} = req.body
  return res.send('controller work')
}

module.exports = postInvite