import styled from 'styled-components'

export const SavedVideosContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  margin-top: 50px;
  padding-bottom: 30px;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
  }
`

export const SavedTitle = styled.div`
background-color=${props => props.bgColor};
padding:20px;
padding-bottom:10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width:100%;
`

export const SaveIcon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const SavedVideosText = styled.h1`
  font-family: 'Roboto';
  font-size: 23px;
  color: ${props => props.color};
  @media screen and (min-width: 768px) {
    font-size: 34px;
  }
`

export const SavedVideosList = styled.ul`
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

export const NoSavedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
`

export const NoSavedVideosImage = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`
export const NoSavedHeading = styled.h1`
  color: ${props => props.headingColor};
  font-family: 'Roboto';
  font-size: 22px;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`

export const NoSavedDescription = styled.p`
  color: ${props => props.color};
  font-size: 14px;
  font-family: 'Roboto';
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
