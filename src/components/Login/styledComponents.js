import styled from 'styled-components'

export const LoginContainer = styled.div`
  background-color: ${props =>
    props.theme === 'dark' ? '#212121' : '#f9f9f9'};
  height: 100vh;
  padding: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LoginCardContainer = styled.div`
  background-color: ${props => (props.theme === 'dark' ? 'black' : 'white')};
  box-shadow: 0px 0px 5px #00000050;
  border-radius: 8px;
  width: 80%;
  max-width: 380px;
  height: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  @media screen and (min-width: 768px) {
    width: 90%;
    max-width: 380px;
    height: 380px;
    border-radius: 8px;
  }
`

export const WebsiteLogo = styled.img`
  width: 150px;
  margin-top: 20px;
  @media screen and (min-width: 768px) {
    width: 150px;
    margin-top: 30px;
  }
`

export const Label = styled.label`
  text-align: left;
  align-self: flex-start;
  font-size: 12px;
  padding: 0px 20px 15px 0px;
  font-family: 'Roboto';
  color: ${props => (props.theme === 'dark' ? 'white' : '#475569')};
  font-weight: 600;
`

export const LoginInput = styled.input`
  width: 100%;
  height: 35px;
  padding-left: 10px;
  background-color: ${props => (props.theme === 'dark' ? 'black' : 'white')};
  border: 1px solid;
  border-color: #94a3b8;
  border-radius: 5px;
  margin-top: 5px;
  color: ${props => (props.theme === 'dark' ? 'white' : 'black')};
  margin-bottom: 10px;
  outline: none;
`
export const Form = styled.form`
  width: 90%;
  margin-top: 35px;
`
export const ShowPasswordLabel = styled.label`
  font-family: 'Roboto';
  font-size: 14px;
  margin-left: 5px;
  font-weight: 500;
  color: ${props => (props.theme === 'dark' ? 'white' : 'black')};
`

export const LoginButton = styled.button`
  width: 100%;
  margin-top: 28px;
  padding: 7px 0px 7px 0px;
  border-radius: 8px;
  border: none;
  background-color: #3b82f6;
  color: #ffffff;
  font-weight: 500;
  font-family: 'Roboto';
  font-size: 15px;
  cursor: pointer;
`
export const ErrorMsg = styled.p`
  color: #ff0000;
  margin: 0px;
  font-size: 14px;
  padding-top: 6px;
  font-weight: 400;
`
