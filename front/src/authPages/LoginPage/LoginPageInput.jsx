import React from 'react';
import InputWithLabel from "../../shared/components/InputWithLabel";

const LoginPageInput = ({mail,setMail,password,setPassword}) => {
  return <>
    <InputWithLabel
      value={mail}
      setValue={setMail}
      label='E-mail'
      type='text'
      placeholder='Entrez votre email'
    />
    <InputWithLabel
      value={password}
      setValue={setPassword}
      label='Password'
      type='password'
      placeholder='Entrez votre clef de securité'
    />
  </>
}

export default LoginPageInput;
