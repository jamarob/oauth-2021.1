import { Redirect, Route } from 'react-router'
import { useAuth } from './authContext'

export default function ProtectedRoute(props) {
  const { token } = useAuth()
  return token ? <Route {...props} /> : <Redirect to="/login" />
}
