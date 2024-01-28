import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  margin-top: 50px;
  padding-bottom: 30px;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
  }
`

export const NotFoundContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`

export const NotFoundImage = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 350px;
  }
`

export const NotFoundHeading = styled.h1`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 20px;
  text-align: center;
  margin-top: 10px;
  @media screen and (min-width: 768px) {
    font-size: 30px;
    margin-top: 20px;
  }
`

export const NotFoundNote = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 12px;
  text-align: center;
  margin-top: 10px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    margin-top: 20px;
  }
`
