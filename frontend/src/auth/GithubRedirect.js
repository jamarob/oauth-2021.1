import { useEffect } from 'react'
import { useLocation } from 'react-router'
import axios from 'axios'

export default function GithubRedirect() {
  const query = new URLSearchParams(useLocation().search)
  const code = query.get('code')

  useEffect(() => {
    axios
      .get(`/auth/login/github/${code}`)
      .then((response) => console.log(response.data))
  }, [code])

  return <p>{code}</p>
}
