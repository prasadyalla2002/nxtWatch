import styled from 'styled-components'

export const TrendingVideosContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  margin-top: 50px;
  padding-bottom: 30px;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
  }
`

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`

export const TrendingTitle = styled.div`
background-color=${props => props.bgColor};
padding:20px;
padding-bottom:10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const TrendingIcon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const TrendingText = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => props.color};
  @media screen and (min-width: 768px) {
    font-size: 34px;
  }
`

export const TrendingVideosList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
`
