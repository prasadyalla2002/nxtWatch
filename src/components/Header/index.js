import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {BsBrightnessHigh, BsMoon} from 'react-icons/bs'
import {IoLogOutOutline} from 'react-icons/io5'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome, AiFillBackward} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'

import {
  HeaderContainer,
  LogoAsLink,
  HeaderLogo,
  HeaderFeatures,
  ThemeChangeButton,
  ProfileImage,
  LogoutButton,
  PopupTextContainer,
  PopupText,
  ButtonsContainer,
  CloseButton,
  ConformButton,
  LogoutIconButton,
  MobileMenuButton,
  NavPopupContainer,
  CrossButton,
  MobileOptions,
  MobileOptionLink,
  MobileOptionLinkContainer,
  MobileOptionText,
} from './styledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

const Header = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme, activeTab, toggleTheme, changeTab} = value
      const color = isDarkTheme ? '#ffffff' : '#00306e'
      const bgColor = isDarkTheme ? '#231f20' : '#f1f5f9'
      const activeTabBackground = isDarkTheme ? '#475569' : '#cbd5e1'

      const onClickHomeTab = () => {
        changeTab('Home')
      }

      const onClickTrendingTab = () => {
        changeTab('Trending')
      }

      const onClickGamingTab = () => {
        changeTab('Gaming')
      }

      const onClickSavedTab = () => {
        changeTab('Saved')
      }

      const onChangeTheme = () => {
        toggleTheme()
      }

      const onClickConfirmLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      return (
        <HeaderContainer bgColor={bgColor}>
          <LogoAsLink to="/">
            <HeaderLogo
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              }
              alt="website logo"
            />
          </LogoAsLink>
          <HeaderFeatures>
            <ThemeChangeButton
              type="button"
              data-testid="theme"
              onClick={onChangeTheme}
            >
              {isDarkTheme ? (
                <BsBrightnessHigh color="#ffffff" size={28} />
              ) : (
                <BsMoon color="#000000" size={30} />
              )}
            </ThemeChangeButton>
            <ProfileImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png "
              alt="profile"
            />
            <Popup
              modal
              trigger={
                <MobileMenuButton type="button">
                  <GiHamburgerMenu color={color} size={30} />
                </MobileMenuButton>
              }
            >
              {close => (
                <NavPopupContainer bgColor={bgColor}>
                  <CrossButton type="button" onClick={() => close()}>
                    <AiFillBackward color={color} size={30} />
                  </CrossButton>
                  <MobileOptions>
                    <MobileOptionLink to="/">
                      <MobileOptionLinkContainer
                        key="home"
                        bgColor={
                          activeTab === 'Home' ? activeTabBackground : 'none'
                        }
                        onClick={onClickHomeTab}
                      >
                        <AiFillHome
                          size={25}
                          color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                        />
                        <MobileOptionText color={color}>Home</MobileOptionText>
                      </MobileOptionLinkContainer>
                    </MobileOptionLink>
                    <MobileOptionLink to="/trending">
                      <MobileOptionLinkContainer
                        key="trending"
                        bgColor={
                          activeTab === 'Trending'
                            ? activeTabBackground
                            : 'none'
                        }
                        onClick={onClickTrendingTab}
                      >
                        <HiFire
                          size={25}
                          color={
                            activeTab === 'Trending' ? '#ff0b37' : '#909090'
                          }
                        />
                        <MobileOptionText color={color}>
                          Trending
                        </MobileOptionText>
                      </MobileOptionLinkContainer>
                    </MobileOptionLink>
                    <MobileOptionLink to="/gaming">
                      <MobileOptionLinkContainer
                        key="gaming"
                        bgColor={
                          activeTab === 'Gaming' ? activeTabBackground : 'none'
                        }
                        onClick={onClickGamingTab}
                      >
                        <SiYoutubegaming
                          size={25}
                          color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                        />
                        <MobileOptionText color={color}>
                          gaming
                        </MobileOptionText>
                      </MobileOptionLinkContainer>
                    </MobileOptionLink>
                    <MobileOptionLink to="/saved-videos">
                      <MobileOptionLinkContainer
                        key="saved"
                        bgColor={
                          activeTab === 'Saved' ? activeTabBackground : 'none'
                        }
                        onClick={onClickSavedTab}
                      >
                        <BiListPlus
                          size={30}
                          color={activeTab === 'Saved' ? '#ff0b37' : '#909090'}
                        />
                        <MobileOptionText color={color}>
                          Saved Videos
                        </MobileOptionText>
                      </MobileOptionLinkContainer>
                    </MobileOptionLink>
                  </MobileOptions>
                </NavPopupContainer>
              )}
            </Popup>
            <Popup
              modal
              trigger={
                <LogoutButton type="button" bgColor={bgColor} color={color}>
                  Logout
                </LogoutButton>
              }
            >
              {close => (
                <PopupTextContainer bgColor={bgColor}>
                  <PopupText color={color}>
                    Are you sure, you want to logout?
                  </PopupText>
                  <ButtonsContainer>
                    <CloseButton
                      type="button"
                      data-testid="closeButton"
                      onClick={() => close()}
                    >
                      Cancel
                    </CloseButton>
                    <ConformButton
                      type="button"
                      data-testid="confirmButton"
                      onClick={onClickConfirmLogout}
                    >
                      Confirm
                    </ConformButton>
                  </ButtonsContainer>
                </PopupTextContainer>
              )}
            </Popup>
            <Popup
              modal
              trigger={
                <LogoutIconButton type="button" bgColor={bgColor} color={color}>
                  <IoLogOutOutline color={color} size={30} />
                </LogoutIconButton>
              }
            >
              {close => (
                <PopupTextContainer bgColor={bgColor}>
                  <PopupText color={color}>
                    Are you sure, you want to logout?
                  </PopupText>
                  <ButtonsContainer>
                    <CloseButton
                      type="button"
                      data-testid="closeButton"
                      onClick={() => close()}
                    >
                      Cancel
                    </CloseButton>
                    <ConformButton
                      type="button"
                      data-testid="confirmButton"
                      onClick={onClickConfirmLogout}
                    >
                      Confirm
                    </ConformButton>
                  </ButtonsContainer>
                </PopupTextContainer>
              )}
            </Popup>
          </HeaderFeatures>
        </HeaderContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(Header)
