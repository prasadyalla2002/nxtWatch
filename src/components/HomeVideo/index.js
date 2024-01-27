import {formatDistanceToNow} from 'date-fns'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  VideoLink,
  VideoItem,
  ThumbnailImage,
  VideoDetails,
  PageProfile,
  VideoContent,
  Title,
  ChannelName,
  TimeAndViews,
  Dot,
} from './styledComponents'

const HomeVideo = props => {
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
            <VideoItem>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoDetails>
                <PageProfile src={profileImageUrl} alt="channel logo" />
                <VideoContent>
                  <Title color={textColor}>{title}</Title>
                  <ChannelName color={textColor}>{name}</ChannelName>
                  <TimeAndViews color={textColor}>
                    {viewCount} views <Dot>&#8226;</Dot> {date}
                  </TimeAndViews>
                </VideoContent>
              </VideoDetails>
            </VideoItem>
          </VideoLink>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default HomeVideo
