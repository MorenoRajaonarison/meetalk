import React from 'react';
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton"
import RedirectInfo from "../../shared/components/RedirectInfo"
import {useHistory} from 'react-router-dom'
import {Tooltip} from '@mui/material'

const getFormNotValidMsg = () => 'Enter correct email and password auth'

const getFormValidMsg = () => 'Press to log in'

const LoginPageFooter = ({handleLogin, isValid}) => {
  const history = useHistory()

  const handlePushToRegisterPage = () => {
    history.push("/register")
  }

  return (
    <>
      <Tooltip title={!isValid? getFormNotValidMsg(): getFormValidMsg()}>
        <div>
          <CustomPrimaryButton
            label="Log in"
            style={{marginTop: '30px'}}
            disabled={!isValid}
            onClick={handleLogin}
          />
        </div>
      </Tooltip>

      <RedirectInfo
        text='Need an account? '
        redirectText='Create an account'
        style={{marginTop: '5px'}}
        redirectHandler={handlePushToRegisterPage}
      />
    </>

  );
};

export default LoginPageFooter;