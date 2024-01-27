import styled from 'styled-components'

export const VideosView = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0px;
  justify-content: flex-start;
  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
`

export const NoVideosView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const NoVideosImage = styled.img`
  width: 200px;
  margin-top: 30px;
  @media screen and (min-width: 768px) {
    width: 460px;
  }
`
export const NoVideosHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: 500;
  color: ${props => props.color};
`
export const NoVideosDescription = styled.p`
  font-family: 'Roboto';
  font-size: 17px;
  color: ${props => props.color};
  width: 300px;
  text-align: center;
  @media screen and (min-width: 768px) {
    width: 400px;
  }
`
export const RetryButton = styled.button`
  font-family: 'Roboto';
  font-size: 15px;
  color: #ffffff;
  background-color: #4746e5;
  border: none;
  border-radius: 5px;
  padding: 12px;
  padding-left: 20px;
  padding-right: 20px;
  cursor: pointer;
  margin-bottom: 30px;
  margin-top: 10px;
`
