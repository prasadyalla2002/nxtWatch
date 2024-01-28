import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const VideoLink = styled(Link)`
  text-decoration: none;
`

export const TrendingVideoItem = styled.li`
  width: 100%;
  background: none;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px;
  @media screen and (min-width: 768px) {
    margin-right: 20px;
  }
`

export const TrendingThumbnailImage = styled.img`
  width: 45%;
  height: 120px;
  @media screen and (min-width: 768px) {
    height: 280px;
  }
`

export const TrendingVideoDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-top: 0px;
  margin-left: 10px;
  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
`

export const TrendingPageProfile = styled.img`
  width: 20px;
  height: 20px;
  margin: 20px;
  margin-top: 10px;
  margin-right: 8px;
  margin-left: 0;
  border-radius: 50px;
  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`

export const TrendingVideoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const Title = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  font-size: 12px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

export const ChannelName = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 11px;
  margin-top: 0;
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`
export const TimeAndViews = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 11px;
  margin-top: 0;
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`

export const Dot = styled.span`
  width: 20px;
  height: 20px;
`
