import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Navigation = styled.div`
  display: flex;
`

export const NavigationLargeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  height: 92%;
  position: fixed;
  background-color: ${props => props.bgColor};
  top: 60px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const Options = styled.ul`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 0;
  margin-top: 30px;
`

export const OptionLink = styled(Link)`
  text-decoration: none;
`

export const OptionLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: ${props => props.bgColor};
  padding-left: 20px;
`

export const OptionText = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 14px;
  margin-left: 20px;
`

export const ContactsContainer = styled.div`
  padding: 20px;
  width: 100%;
  padding-bottom: 10px;
`

export const ContactUsHeading = styled.h1`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 18px;
`
export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
`
export const SocialDescription = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 15px;
  width: 90%;
  font-weight: 450;
`
