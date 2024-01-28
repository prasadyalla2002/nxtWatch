import Header from '../Header'
import NavigationBar from '../NavigationBar'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  NotFoundContainer,
  NotFoundContent,
  NotFoundImage,
  NotFoundHeading,
  NotFoundNote,
} from './styledComponents'

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
      const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
      const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'

      const notFoundImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'

      return (
        <>
          <Header />
          <NavigationBar />
          <NotFoundContainer bgColor={bgColor}>
            <NotFoundContent>
              <NotFoundImage src={notFoundImageUrl} alt="not found" />
              <NotFoundHeading color={headingColor}>
                Page Not Found
              </NotFoundHeading>
              <NotFoundNote color={noteColor}>
                We are sorry, the page you requested could not be found.
              </NotFoundNote>
            </NotFoundContent>
          </NotFoundContainer>
        </>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NotFound
