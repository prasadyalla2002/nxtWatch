import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const VideoLink = styled(Link)`
  text-decoration: none;
`

export const VideoItem = styled.li`
  width: 100%;
  background: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  @media screen and (min-width: 768px) {
    width: 320px;
    margin-right: 20px;
  }
`

export const ThumbnailImage = styled.img`
  width: 100%;
`

export const VideoDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`

export const PageProfile = styled.img`
  width: 30px;
  height: 30px;
  margin: 20px;
  margin-right: 8px;
  margin-left: 0;
  border-radius: 50px;
`

export const VideoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 4px;
`
export const Title = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  font-size: 15px;
  font-weight: 500;
`

export const ChannelName = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 13px;
  margin-top: 0;
`
export const TimeAndViews = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 13px;
  margin-top: 0;
`

export const Dot = styled.span`
  width: 20px;
  height: 20px;
`
