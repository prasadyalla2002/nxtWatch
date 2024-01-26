import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import {
  AppContainer,
  LoginFormContainer,
  FormLogo,
  InputLabel,
  UserInput,
  InputContainer,
  ShowPasswordSection,
  CheckBox,
  ShowPasswordLabel,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showError: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  renderUserNameField = () => {
    const {username} = this.state
    return (
      <>
        <InputLabel htmlFor="username">USERNAME</InputLabel>
        <UserInput
          id="username"
          type="text"
          placeholder="Username"
          onChange={this.onChangeUsername}
          value={username}
        />
      </>
    )
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeShowPassword = () => {
    this.setState(prev => ({
      showPassword: !prev.showPassword,
    }))
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })

    history.replace('/')
  }

  onSubmitFailure = errorMessage => {
    this.setState({errorMsg: errorMessage, showError: true})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userCredentials = {username, password}
    const Url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userCredentials),
    }

    const response = await fetch(Url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderPasswordField = () => {
    const {password, showPassword} = this.state

    return (
      <>
        <InputLabel htmlFor="password">Password</InputLabel>
        <UserInput
          id="password"
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          onChange={this.onChangePassword}
          value={password}
        />
        <ShowPasswordSection>
          <CheckBox
            type="checkbox"
            id="showPassword"
            onChange={this.onChangeShowPassword}
          />
          <ShowPasswordLabel htmlFor="showPassword">
            show Password
          </ShowPasswordLabel>
        </ShowPasswordSection>
      </>
    )
  }

  render() {
    const {errorMsg, showError} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <AppContainer>
        <LoginFormContainer onSubmit={this.onSubmitForm}>
          <FormLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <InputContainer>{this.renderUserNameField()}</InputContainer>
          <InputContainer>{this.renderPasswordField()}</InputContainer>
          <LoginButton type="submit">Login</LoginButton>
          {showError && <ErrorMsg>* {errorMsg}</ErrorMsg>}
        </LoginFormContainer>
      </AppContainer>
    )
  }
}

export default LoginForm
