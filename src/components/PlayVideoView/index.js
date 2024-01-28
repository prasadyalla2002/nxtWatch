import ReactPlayer from 'react-player'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  VideoDetailsContainer,
  VideoTitle,
  VideoStatusContainer,
  VideoStatus,
  VideoDetailsDot,
  VideoButtonsContainer,
  ButtonContainer,
  Button,
  ButtonText,
  HrLine,
  ChannelInfo,
  ChannelProfile,
  ChannelNameAndSubscribers,
  ChannelName,
  ChannelSubscribers,
  ChannelDescription,
} from './styledComponents'

const PlayVideoView = props => {
  const {videoDetails, isLiked, isDisliked, clickLike, clickDisLike} = props

  const onClickLike = () => {
    clickLike()
  }

  const onClickDisLike = () => {
    clickDisLike()
  }

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme, addVideo, savedVideos} = value
        const textColor = isDarkTheme ? '#64748b' : '#231f20'
        let isSaved

        const index = savedVideos.findIndex(each => each.id === videoDetails.id)

        if (index === -1) {
          isSaved = false
        } else {
          isSaved = true
        }

        const onClickSave = () => {
          addVideo(videoDetails)
        }

        const saveIconColor = isSaved ? '#2563eb' : textColor

        return (
          <>
            <VideoDetailsContainer>
              <ReactPlayer url={videoDetails.videoUrl} controls width="100%" />
              <VideoTitle color={textColor}>{videoDetails.title}</VideoTitle>
              <VideoStatusContainer>
                <VideoStatus color={textColor}>
                  {videoDetails.viewCount} views
                  <VideoDetailsDot> &#8226;</VideoDetailsDot>
                  {videoDetails.publishedAt}
                </VideoStatus>
                <VideoButtonsContainer>
                  <ButtonContainer>
                    <Button
                      type="button"
                      color={isLiked ? '#2563eb' : '#64748b'}
                      onClick={onClickLike}
                    >
                      <AiOutlineLike size={25} />
                    </Button>
                    <ButtonText color={textColor}>Like</ButtonText>
                  </ButtonContainer>
                  <ButtonContainer>
                    <Button
                      type="button"
                      color={isDisliked ? '#2563eb' : '#64748b'}
                      onClick={onClickDisLike}
                    >
                      <AiOutlineDislike size={25} style={{marginTop: 5}} />
                    </Button>
                    <ButtonText color={textColor}>Dislike</ButtonText>
                  </ButtonContainer>
                  <ButtonContainer>
                    <Button
                      type="button"
                      color={saveIconColor}
                      onClick={onClickSave}
                    >
                      <BiListPlus size={25} />
                    </Button>
                    <ButtonText color={textColor}>
                      {isSaved ? 'Saved' : 'Save'}
                    </ButtonText>
                  </ButtonContainer>
                </VideoButtonsContainer>
              </VideoStatusContainer>
              <HrLine />
              <ChannelInfo>
                <ChannelProfile
                  src={videoDetails.profileImageUrl}
                  alt="channel logo"
                />
                <ChannelNameAndSubscribers>
                  <ChannelName color={textColor}>
                    {videoDetails.name}
                  </ChannelName>
                  <ChannelSubscribers color={textColor}>
                    {videoDetails.subscriberCount} subscribers
                  </ChannelSubscribers>
                  <ChannelDescription color={textColor}>
                    {videoDetails.description}
                  </ChannelDescription>
                </ChannelNameAndSubscribers>
              </ChannelInfo>
            </VideoDetailsContainer>
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default PlayVideoView
