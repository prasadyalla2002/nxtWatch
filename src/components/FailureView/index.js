import {
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  RetryButton,
} from './styledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

const FailureView = props => {
  const {onRetry} = props

  const onClickRetry = () => {
    onRetry()
  }

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
        const textColor = isDarkTheme ? '#e2e8f0' : '#475569'

        const failureImage = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <FailureContainer>
            <FailureImage src={failureImage} alt="failure view" />
            <FailureHeading color={headingColor}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailureDescription color={textColor}>
              We are having some trouble to complete your request. <br /> Please
              try again later.
            </FailureDescription>
            <RetryButton type="button" onClick={onClickRetry}>
              Retry
            </RetryButton>
          </FailureContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default FailureView
