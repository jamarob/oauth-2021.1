import { Switch, Route } from 'react-router-dom'
import GithubRedirect from './auth/GithubRedirect'
import Navbar from './components/Navbar'
import PageLayout from './components/PageLayout'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import { AuthProvider } from './auth/authContext'

export default function App() {
  return (
    <AuthProvider>
      <PageLayout>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/login" component={Login} />
          <Route path="/oauth/github/redirect" component={GithubRedirect} />
        </Switch>
      </PageLayout>
    </AuthProvider>
  )
}
