import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HeaderContainer = styled.nav`
  position: fixed;
  top: 0;
  background-color: ${props => props.bgColor};
  width: 100%;
  height: 60px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`

export const LogoAsLink = styled(Link)`
  text-decoration: none;
`

export const HeaderLogo = styled.img`
  width: 80px;
  height: 30px;
  @media screen and (min-width: 768px) {
    width: 100px;
    height: 40px;
  }
`

export const HeaderFeatures = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-right: 5px;
  @media screen and (min-width: 768px) {
    margin-right: 20px;
  }
`
export const ThemeChangeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: 10px;
`

export const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  margin-left: 10px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const LogoutButton = styled.button`
 border:1px solid;
 font-family:'Roboto';
 padding:10px;
 padding-top:8px;
 padding-bottom:8px;
 border-radius:5px;
 background-color:${props => props.bgColor}
 color:${props => props.color}
 margin-left:5px;
 cursor:pointer;
 @media screen and (max-width:767px){
     display:none
 }
`
export const PopupTextContainer = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
  width: 250px;
  border-radius: 8px;
  padding: 20px;
  @media screen and (min-width: 768px) {
    width: 350px;
  }
`

export const PopupText = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => props.color};
  margin: 10px;
  text-align: center;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  align-self: center;
`

export const CloseButton = styled.button`
  color: grey;
  background-color: transparent;
  font-family: 'Roboto';
  font-size: 12px;
  padding: 10px;
  padding-left: 15px;
  padding-right: 15px;
  border: 1px solid grey;
  border-radius: 7px;
  font-weight: bold;
  margin: 12px;
`
export const ConformButton = styled.button`
  color: #ffffff;
  background-color: #3b82f6;
  border: none;
  font-family: 'Roboto';
  font-size: 12px;
  padding: 10px;
  padding-left: 15px;
  padding-right: 15px;
  border: 1px solid grey;
  border-radius: 7px;
  font-weight: bold;
  margin: 12px;
`
export const LogoutIconButton = styled.button`
  background: none;
  border: none;

  @media screen and (min-width: 767px) {
    display: none;
  }
`

export const MobileMenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const MobileIcon = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const NavPopupContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.bgColor};
`

export const CrossButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  justify-content: flex-start;
  align-self: flex;
  margin: 20px;
`

export const MobileOptions = styled.ul`
  width: 90%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 0;
  align-self: center;
  justify-self: center;
  margin-top: 50px;
`

export const MobileOptionLink = styled(Link)`
  text-decoration: none;
`

export const MobileOptionLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: ${props => props.bgColor};
  padding-left: 15px;
`

export const MobileOptionText = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-weight: 550;
  font-size: 12px;
  margin-left: 15px;
`
