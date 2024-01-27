import styled from 'styled-components'

export const VideoDetailsContainer = styled.div`
  margin-top: 50px;
  padding: 10px;
  padding-top: 20px;
  @media screen and (min-width: 768px) {
    margin-left: 260px;
    padding: 20px;
  }
`

export const VideoTitle = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  font-size: 18px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const VideoStatusContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const VideoStatus = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 480;
  color: ${props => props.color};
`
export const VideoDetailsDot = styled.span`
  width: 25px;
  height: 25px;
  padding-left: 5px;
  padding-right: 5px;
`
export const VideoButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  @media screen and (min-width: 768px) {
    margin-right: 20px;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
export const Button = styled.button`
  color: ${props => props.color};
  background: none;
  border: none;
  cursor: pointer;
`

export const ButtonText = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 450;
`

export const HrLine = styled.hr`
  border: 1px solid #909090;
  margin-top: 20px;
  margin-bottom: 20px;
`
export const ChannelInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`
export const ChannelProfile = styled.img`
  width: 60px;
  width: 60px;
  margin-top: 15px;
`
export const ChannelNameAndSubscribers = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 10px;
`

export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color: ${props => props.color};
`

export const ChannelSubscribers = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  color: ${props => props.color};
  margin-top: 0;
`

export const ChannelDescription = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => props.color};
  margin-top: 0;
  margin-top: 20px;
`
