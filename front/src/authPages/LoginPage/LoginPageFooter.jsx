import React from 'react';
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton"
import RedirectInfo from "../../shared/components/RedirectInfo"
import {useHistory} from 'react-router-dom'

const LoginPageFooter = ({handleLogin, isValid}) => {
  const history = useHistory()

  const handlePushToRegisterPage = () => {
    history.push("/register")
  }

  return (
    <>
      <div>
        <CustomPrimaryButton
          label="Log in"
          style={{marginTop: '30px'}}
          disabled={!isValid}
          onClick={handleLogin}
        />
      </div>
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