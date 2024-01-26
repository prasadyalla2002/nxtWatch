import {Switch, Route} from 'react-router-dom'

import './App.css'

import LoginFrom from './components/LoginForm'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginFrom} />
    <ProtectedRoute exact path="/" component={Home} />
  </Switch>
)

export default App
