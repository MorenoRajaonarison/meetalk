import React, {useState, useEffect} from 'react'
import AuthBox from '../../shared/components/AuthBox'
import LoginPageHeader from './LoginPageHeader'
import LoginPageInput from './LoginPageInput'
import LoginPageFooter from "./LoginPageFooter";
import {validateFormLogin} from "../../shared/Utils/validators";

const LoginPage = () => {
  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')
  const [isValid, setIsValid] = useState(false)

  useEffect(() => {
    setIsValid(validateFormLogin({mail, password}))
  }, [mail, password, setIsValid])

  const handleLogin = () => {
    console.log({mail, password})
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
  );
}

export default LoginPage
