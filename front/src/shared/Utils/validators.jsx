export const validateFormLogin = ({mail, password}) => {
  const isMailValid = validateMail(mail)
  const isPwdValid = validatePassword(password)
  return isMailValid && isPwdValid
}

const validateMail = mail => {
  const mailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
  return mailPattern.test(mail)
}

const validatePassword = pwd => pwd.length > 5 && pwd.length < 12