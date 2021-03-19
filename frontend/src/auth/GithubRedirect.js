import { useEffect } from 'react'
import { Redirect, useLocation } from 'react-router'
import axios from 'axios'
import { useAuth } from './authContext'

export default function GithubRedirect() {
  const { token, setToken } = useAuth()
  const query = new URLSearchParams(useLocation().search)
  const code = query.get('code')

  useEffect(() => {
    axios
      .get(`/auth/login/github/${code}`)
      .then((response) => response.data)
      .then((token) => setToken(token))
  }, [code, setToken])

  if (token) {
    return <Redirect to="/profile" />
  }

  return null
}
