import {Switch, Route} from 'react-router-dom'

import './App.css'

import LoginFrom from './components/LoginForm'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import VideoDetails from './components/VideoDetails'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginFrom} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/videos/:id" component={VideoDetails} />
  </Switch>
)

export default App
