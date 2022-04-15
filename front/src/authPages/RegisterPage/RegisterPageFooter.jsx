import React from 'react';
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton"
import RedirectInfo from "../../shared/components/RedirectInfo"
import {useHistory} from 'react-router-dom'
import {Tooltip} from '@mui/material'

const RegisterPageFooter = ({handleRegister, isValid}) => {
  const history = useHistory()

  const handlePushToLoginPage = () => {
    history.push("/login")
  }

  return (
    <>
      <Tooltip title={!isValid? 'Provide a valid credentials': 'Press to register'}>
        <div>
          <CustomPrimaryButton
            label="Register"
            additionalStyles={{marginTop: '30px'}}
            disabled={!isValid}
            onClick={handleRegister}
          />
        </div>
      </Tooltip>

      <RedirectInfo
        text='Already have an account? '
        redirectText='Log in'
        style={{marginTop: '5px'}}
        redirectHandler={handlePushToLoginPage}
      />
    </>

  );
};

export default RegisterPageFooter