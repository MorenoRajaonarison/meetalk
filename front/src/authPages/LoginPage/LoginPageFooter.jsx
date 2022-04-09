import React from 'react';
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";

const LoginPageFooter = ({handleLogin, isValid}) => {
  return (
    <div>
      <CustomPrimaryButton
        label="Log in"
        style={{marginTop: '30px'}}
        disabled={!isValid}
        onClick={handleLogin}
      />
    </div>
  );
};

export default LoginPageFooter;