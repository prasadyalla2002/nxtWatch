import NxtWatchContext from '../../context/NxtWatchContext'

import {
  GameLink,
  GameItem,
  GameThumbnail,
  GameTitle,
  GameViews,
} from './styledComponents'

const GameCard = props => {
  const {gameDetails} = props
  const {id, title, thumbnailUrl, viewCount} = gameDetails

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

        return (
          <GameLink to={`/videos/${id}`}>
            <GameItem>
              <GameThumbnail src={thumbnailUrl} alt="video thumbnail" />
              <GameTitle color={textColor}>{title}</GameTitle>
              <GameViews color={textColor}>
                {viewCount} Watching Worldwide
              </GameViews>
            </GameItem>
          </GameLink>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default GameCard
