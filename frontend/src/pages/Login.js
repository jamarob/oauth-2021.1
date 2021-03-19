const clientId = process.env.REACT_APP_GITHUB_CLIENT_ID
const githubLoginUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}`

export default function Login() {
  return (
    <>
      <h1>Login</h1>
      <a href={githubLoginUrl}>Login with Github</a>
    </>
  )
}
