import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const GameLink = styled(Link)`
  text-decoration: none;
`

export const GameItem = styled.li`
  width: 120px;
  background: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin: 5px;
  @media screen and (min-width: 768px) {
    width: 310px;
    margin: 10px;
    margin-bottom: 0;
  }
`

export const GameThumbnail = styled.img`
  width: 100%;
`

export const GameTitle = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 450;
  color: ${props => props.color};
  align-self: flex-start;
  margin: 0;
  margin-top: 10px;
  @media screen and (min-width: 768px) {
    font-size: 17px;
    font-weight: 500;
  }
`

export const GameViews = styled.p`
  font-family: 'Roboto';
  font-size: 10px;
  font-weight: 400;
  color: ${props => props.color};
  align-self: flex-start;
  margin-top: 10px;
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`
