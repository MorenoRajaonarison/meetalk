import React, {useState, useEffect} from 'react';
import AuthBox from "../../shared/components/AuthBox"
import {Typography} from "@mui/material"
import RegisterPageInput from "./RegisterPageInput"
import RegisterPageFooter from "./RegisterPageFooter"
import {validateFormRegister} from "../../shared/Utils/validators"
import {getActions} from "../../store/actions/authActions"
import {connect} from "react-redux"
import {useHistory} from "react-router-dom";

const RegisterPage = ({register}) => {
  const history = useHistory()
  const [mail, setMail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isFormValid, setIsFormValid] = useState(false)

  useEffect(() => {
    setIsFormValid(validateFormRegister({mail, username,password}))
  }, [mail, username, password])

  const  handleRegister = () => {
    const userDetails = {mail, password, username}
    register(userDetails, history)
  }

  return (
    <AuthBox>
      <Typography variant='h5' sx={{color: 'white'}}>Create an account</Typography>
      <RegisterPageInput
        mail={mail}
        username={username}
        password={password}
        setMail={setMail}
        setUsername={setUsername}
        setPassword={setPassword}
      />
      <RegisterPageFooter
        handleRegister={handleRegister}
        isValid={isFormValid}
      />
    </AuthBox>
  )
}

const mapActionsToProps = dispatch => {
  return {
    ...getActions(dispatch)
  }
}

export default connect(null, mapActionsToProps)(RegisterPage)
