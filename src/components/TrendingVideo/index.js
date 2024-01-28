import {formatDistanceToNow} from 'date-fns'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  VideoLink,
  TrendingVideoItem,
  TrendingThumbnailImage,
  TrendingVideoDetails,
  TrendingPageProfile,
  TrendingVideoContent,
  Title,
  ChannelName,
  TimeAndViews,
  Dot,
} from './styledComponents'

const TrendingVideo = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    name,
    profileImageUrl,
  } = videoDetails

  const date = formatDistanceToNow(new Date(publishedAt))

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

        return (
          <VideoLink to={`/videos/${id}`}>
            <TrendingVideoItem>
              <TrendingThumbnailImage
                src={thumbnailUrl}
                alt="video thumbnail"
              />
              <TrendingVideoDetails>
                <TrendingPageProfile src={profileImageUrl} alt="channel logo" />
                <TrendingVideoContent>
                  <Title color={textColor}>{title}</Title>
                  <ChannelName color={textColor}>{name}</ChannelName>
                  <TimeAndViews color={textColor}>
                    {viewCount} views <Dot>&#8226;</Dot> {date}
                  </TimeAndViews>
                </TrendingVideoContent>
              </TrendingVideoDetails>
            </TrendingVideoItem>
          </VideoLink>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default TrendingVideo
