import styled from 'styled-components'

export const GamingViewContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  margin-top: 50px;
  padding-bottom: 30px;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
  }
`

export const GamingTitle = styled.div`
background-color=${props => props.bgColor};
padding:20px;
padding-bottom:10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width:100%;
`

export const GamingIcon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const GamingText = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => props.color};
  @media screen and (min-width: 768px) {
    font-size: 34px;
  }
`
export const GamingVideosList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  @media screen and (min-width: 768px) {
    margin-left: 10px;
  }
`
