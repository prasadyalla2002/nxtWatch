import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  margin-top: 50px;
  padding-bottom: 30px;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
  }
`

export const PremiumContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png ');
  width: 100%;
  height: 190;
  background-size: cover;
  padding: 20px;
  display: ${props => props.display};
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    height: 220px;
    width: 100%;
  }
`

export const BannerContent = styled.div`
  width: 50%;
`
export const BannerLogo = styled.img`
  width: 80px;
  height: 30px;
  @media screen and (min-width: 768px) {
    width: 100px;
    height: 35px;
    margin-top: 20px;
  }
`

export const BannerText = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #000000;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    margin-top: 15px;
  }
`

export const GetItNowButton = styled.button`
  background: transparent;
  border: 1.5px solid #000000;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 550;
  color: #000000;
  padding: 10px;
`

export const BannerClose = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`

export const BannerCloseButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
`
export const SearchContainer = styled.div`
  display: flex;
  border: 1px solid #909090;
  border-radius: 3px;
  width: 60%;
  height: 40px;
  margin: 20px;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`
export const SearchInput = styled.input`
  border: none;
  background: none;
  color: ${props => props.color};
  outline: none;
  width: 100%;
  font-family: 'Roboto';
  padding-left: 10px;
`

export const SearchIconButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #909090;
  width: 70px;
  border: none;
  cursor: pointer;
`

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`
