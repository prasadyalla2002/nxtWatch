import {CgPlayListAdd} from 'react-icons/cg'
import NxtWatchContext from '../../context/NxtWatchContext'
import Header from '../Header'
import NavigationBar from '../NavigationBar'
import TrendingVideo from '../TrendingVideo'

import {
  SavedVideosContainer,
  SavedTitle,
  SaveIcon,
  SavedVideosText,
  SavedVideosList,
  NoSavedVideosContainer,
  NoSavedVideosImage,
  NoSavedHeading,
  NoSavedDescription,
} from './styledComponents'

const SavedRoute = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme, savedVideos} = value
      const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
      const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
      const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
      const noteColor = isDarkTheme ? '#e2e8f0' : '#475568'

      return (
        <>
          <Header />
          <NavigationBar />
          <SavedVideosContainer data-testid="savedVideos" bgColor={bgColor}>
            <SavedTitle bgColor={bgColor}>
              <SaveIcon>
                <CgPlayListAdd size={36} color="#ff0000" />
              </SaveIcon>
              <SavedVideosText color={textColor}>Saved Videos</SavedVideosText>
            </SavedTitle>
            {savedVideos.length > 0 ? (
              <SavedVideosList>
                {savedVideos.map(eachVideo => (
                  <TrendingVideo key={eachVideo.id} videoDetails={eachVideo} />
                ))}
              </SavedVideosList>
            ) : (
              <NoSavedVideosContainer>
                <NoSavedVideosImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  alt="no saved videos"
                />
                <NoSavedHeading headingColor={headingColor}>
                  No Saved videos found
                </NoSavedHeading>
                <NoSavedDescription color={noteColor}>
                  You can save your videos while watching them
                </NoSavedDescription>
              </NoSavedVideosContainer>
            )}
          </SavedVideosContainer>
        </>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default SavedRoute
