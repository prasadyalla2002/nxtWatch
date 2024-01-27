import {Component} from 'react'
import Cookies from 'js-cookie'

import PlayVideoView from '../PlayVideoView'
import Header from '../Header'
import NavigationBar from '../NavigationBar'

import NxtWatchContext from '../../context/NxtWatchContext'

import {VideoDetailsViewContainer} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoDetails: [],
    isLiked: false,
    isDisliked: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  modifiedData = data => ({
    id: data.video_details.id,
    title: data.video_details.title,
    videoUrl: data.video_details.video_url,
    thumbnailUrl: data.video_details.thumbnail_url,
    viewCount: data.video_details.view_count,
    publishedAt: data.video_details.published_at,
    description: data.video_details.description,
    name: data.video_details.channel.name,
    profileImageUrl: data.video_details.channel.profile_image_url,
    subscriberCount: data.video_details.channel.subscriber_count,
  })

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = this.modifiedData(data)
      this.setState({
        apiStatus: apiStatusConstants.success,
        videoDetails: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  liked = () => {
    this.setState(prev => ({
      isLiked: !prev.isLiked,
      isDisliked: false,
    }))
  }

  renderPlayVideoView = () => {
    const {videoDetails, isLiked, isDisliked} = this.state

    return (
      <PlayVideoView
        videoDetails={videoDetails}
        clickLike={this.liked}
        clickDisLike={this.disLiked}
        isLiked={isLiked}
        isDisliked={isDisliked}
      />
    )
  }

  disLiked = () => {
    this.setState(prev => ({isDisliked: !prev.isDisliked, isLiked: false}))
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'

          return (
            <>
              <Header />
              <NavigationBar />
              <VideoDetailsViewContainer
                data-testid="videoItemDetails"
                bgColor={bgColor}
              >
                {this.renderPlayVideoView()}
              </VideoDetailsViewContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default VideoDetails
