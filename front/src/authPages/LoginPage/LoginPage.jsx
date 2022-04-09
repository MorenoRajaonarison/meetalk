import React, {useState} from 'react'
import AuthBox from '../../shared/components/AuthBox'
import LoginPageHeader from './LoginPageHeader'
import LoginPageInput from './LoginPageInput'
import LoginPageFooter from "./LoginPageFooter";

const LoginPage = () => {
  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')
  const [isValid, setIsValid] = useState(false)

  const handleLogin = () => {
    console.log('log in')
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
