import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import PageLayout from './components/PageLayout'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'

export default function App() {
  return (
    <PageLayout>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/login" component={Login} />
      </Switch>
    </PageLayout>
  )
}
