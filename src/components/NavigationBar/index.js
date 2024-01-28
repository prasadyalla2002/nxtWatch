import {Component} from 'react'
import {BiListPlus} from 'react-icons/bi'

import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'

import {SiYoutubegaming} from 'react-icons/si'
import {FaFacebook, FaTwitter, FaLinkedin} from 'react-icons/fa'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  Navigation,
  NavigationLargeContainer,
  Options,
  OptionLink,
  OptionLinkContainer,
  OptionText,
  ContactsContainer,
  ContactUsHeading,
  SocialIcons,
  SocialDescription,
} from './styledComponents'

class NavigationBar extends Component {
  renderOptions = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme, activeTab, changeTab} = value
        const bgColor = isDarkTheme ? '#231f20' : '#f1f5f9'
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f28'
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

        return (
          <Navigation>
            <NavigationLargeContainer bgColor={bgColor}>
              <Options>
                <OptionLink to="/">
                  <OptionLinkContainer
                    key="home"
                    bgColor={
                      activeTab === 'Home' ? activeTabBackground : 'none'
                    }
                    onClick={onClickHomeTab}
                  >
                    <AiFillHome
                      size={30}
                      color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                    />
                    <OptionText color={textColor}>Home</OptionText>
                  </OptionLinkContainer>
                </OptionLink>
                <OptionLink to="/trending">
                  <OptionLinkContainer
                    key="trending"
                    bgColor={
                      activeTab === 'Trending' ? activeTabBackground : 'none'
                    }
                    onClick={onClickTrendingTab}
                  >
                    <HiFire
                      size={30}
                      color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
                    />
                    <OptionText color={textColor}>Trending</OptionText>
                  </OptionLinkContainer>
                </OptionLink>
                <OptionLink to="/gaming">
                  <OptionLinkContainer
                    key="gaming"
                    bgColor={
                      activeTab === 'Gaming' ? activeTabBackground : 'none'
                    }
                    onClick={onClickGamingTab}
                  >
                    <SiYoutubegaming
                      size={30}
                      color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                    />
                    <OptionText color={textColor}>gaming</OptionText>
                  </OptionLinkContainer>
                </OptionLink>
                <OptionLink to="/saved-videos">
                  <OptionLinkContainer
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
                    <OptionText color={textColor}>Saved Videos</OptionText>
                  </OptionLinkContainer>
                </OptionLink>
              </Options>
              <ContactsContainer>
                <ContactUsHeading color={textColor}>
                  CONTACT US
                </ContactUsHeading>
                <SocialIcons>
                  <FaFacebook size={28} />
                  <FaTwitter size={28} />
                  <FaLinkedin size={28} />
                </SocialIcons>
                <SocialDescription color={textColor}>
                  Enjoy! Now to see your channels and recommendations!
                </SocialDescription>
              </ContactsContainer>
            </NavigationLargeContainer>
          </Navigation>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  render() {
    return <>{this.renderOptions()}</>
  }
}

export default NavigationBar
