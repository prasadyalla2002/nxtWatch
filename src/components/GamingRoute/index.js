import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'

import Header from '../Header'
import NavigationBar from '../NavigationBar'
import FailureView from '../FailureView'
import GameCard from '../GameCard'

import NxtWatchContext from '../../context/NxtWatchContext'
import {
  GamingViewContainer,
  GamingIcon,
  GamingTitle,
  GamingText,
  GamingVideosList,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class GamingRoute extends Component {
  state = {
    gamingVideos: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
      }))
      this.setState({
        gamingVideos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccessView = () => {
    const {gamingVideos} = this.state

    return (
      <GamingVideosList>
        {gamingVideos.map(eachGame => (
          <GameCard key={eachGame.id} gameDetails={eachGame} />
        ))}
      </GamingVideosList>
    )
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const bgColor = isDarkTheme ? '#d7dfe9' : '#f9f9f9'
          const gamingIconBackground = isDarkTheme ? '#181818' : '#f9f9f9'
          const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

          return (
            <>
              <Header />
              <NavigationBar />
              <GamingViewContainer
                data-testid="gaming"
                bgColor={gamingIconBackground}
              >
                <GamingTitle bgColor={bgColor}>
                  <GamingIcon>
                    <SiYoutubegaming size={36} color="#ff0000" />
                  </GamingIcon>
                  <GamingText color={textColor}>Gaming</GamingText>
                </GamingTitle>
                {this.renderSuccessView()}
              </GamingViewContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default GamingRoute
