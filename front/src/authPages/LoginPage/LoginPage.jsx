import React, {useState, useEffect} from 'react'
import AuthBox from '../../shared/components/AuthBox'
import LoginPageHeader from './LoginPageHeader'
import LoginPageInput from './LoginPageInput'
import LoginPageFooter from "./LoginPageFooter"
import {validateFormLogin} from "../../shared/Utils/validators"
import {connect} from "react-redux"
import {useHistory} from "react-router-dom";
import {getActions} from "../../store/actions/authActions"

const LoginPage = ({login}) => {
  const history = useHistory()
  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')
  const [isValid, setIsValid] = useState(false)

  useEffect(() => {
    setIsValid(validateFormLogin({mail, password}))
  }, [mail, password, setIsValid])

  const handleLogin = () => {
    login({mail, password}, history)
  }

  return (
    <AuthBox>
      <LoginPageHeader/>
      <LoginPageInput
        mail={mail}
        setMail={setMail}
        password={password}
        setPassword={setPassword}
      />
      <LoginPageFooter
        isValid={isValid}
        handleLogin={handleLogin}
      />
    </AuthBox>
  )
}

const mapActionsToProps = dispatch => {
  return {
    ...getActions(dispatch)
  }
}

export default connect(null, mapActionsToProps)(LoginPage)
