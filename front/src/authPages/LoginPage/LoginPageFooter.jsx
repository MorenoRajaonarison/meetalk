import React from 'react';
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton"
import RedirectInfo from "../../shared/components/RedirectInfo"
import {useHistory} from 'react-router-dom'
import {Tooltip} from '@mui/material'


const LoginPageFooter = ({handleLogin, isValid}) => {
  const history = useHistory()

  const handlePushToRegisterPage = () => {
    history.push("/register")
  }

  return (
    <>
      <Tooltip title={!isValid? 'Enter correct email and password auth':'Press to log in'}>
        <div>
          <CustomPrimaryButton
            label="Log in"
            additionalStyles={{marginTop: '30px'}}
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