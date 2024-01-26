import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #f9f9f9;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LoginFormContainer = styled.form`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 350px;
`

export const FormLogo = styled.img`
  width: 180px;
  align-self: center;
  margin-bottom: 15px;
`

export const InputLabel = styled.label`
  font-family: 'Roboto';
  font-size: 13px;
  color: #475569;
  font-weight: 500;
`

export const UserInput = styled.input`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 450;
  color: #475569;
  border: 0.9px solid #94a3b8;
  border-radius: 4px;
  margin-top: 5px;
  width: 100%;
  outline: none;
  padding: 8px;
`

export const InputContainer = styled.div`
  width: 100%;
  margin-top: 15px;
`
export const ShowPasswordSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 7px;
  margin-top: 10px;
`

export const CheckBox = styled.input`
  width: 15px;
  height: 15px;
  margin-right: 5px;
`

export const ShowPasswordLabel = styled.label`
  font-family: 'Roboto';
  font-size: 14px;
  color: #1e293b;
  font-weight: 500;
`
export const LoginButton = styled.button`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  background-color: #3b82f6;
  border: none;
  border-radius: 8px;
  padding: 10px;
  margin-top: 10px;
`

export const ErrorMsg = styled.p`
  margin-top: 5px;
  color: #ff0000;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 450;
`
