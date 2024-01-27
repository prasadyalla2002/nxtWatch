import {
  NoVideosView,
  VideosView,
  NoVideosImage,
  NoVideosHeading,
  NoVideosDescription,
  RetryButton,
} from './styledComponents'

import HomeVideo from '../HomeVideo'

import NxtWatchContext from '../../context/NxtWatchContext'

const HomeVideos = props => {
  const {homeVideos, onRetry} = props
  const videosCount = homeVideos.length

  const onClickRetry = () => {
    onRetry()
  }

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
        const descriptionColor = isDarkTheme ? '#e2e8f0' : '#475569'

        return videosCount > 0 ? (
          <VideosView>
            {homeVideos.map(eachVideo => (
              <HomeVideo key={eachVideo.id} videoDetails={eachVideo} />
            ))}
          </VideosView>
        ) : (
          <NoVideosView>
            <NoVideosImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoVideosHeading color={headingColor}>
              No Search results found
            </NoVideosHeading>
            <NoVideosDescription color={descriptionColor}>
              Try different keywords or remove search filter
            </NoVideosDescription>
            <RetryButton type="button" onClick={onClickRetry}>
              Retry
            </RetryButton>
          </NoVideosView>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default HomeVideos
