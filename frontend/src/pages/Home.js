import styled from 'styled-components'

export default function Home() {
  return (
    <>
      <h1>OAuth Resources</h1>

      <ReadingList>
        <a
          href="https://tools.ietf.org/html/rfc6749"
          target="_blank"
          rel="noopener noreferrer"
        >
          The OAuth 2.0 Authorization Framework (RFC6749)
        </a>
        <a
          href="https://tools.ietf.org/html/rfc7519"
          target="_blank"
          rel="noopener noreferrer"
        >
          JSON Web Token (JWT) (RFC7519)
        </a>
        <a
          href="https://docs.github.com/en/free-pro-team@latest/developers/apps/creating-an-oauth-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Creating GitHub OAuth Apps
        </a>
        <a
          href="https://docs.github.com/en/free-pro-team@latest/developers/apps/authorizing-oauth-apps#web-application-flow"
          target="_blank"
          rel="noopener noreferrer"
        >
          Webflow for GitHub OAuth Apps
        </a>
        <a
          href="https://jwt.io/introduction/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Introduction to JSON Web Tokens
        </a>
        <a
          href="https://jwt.io/#debugger-io"
          target="_blank"
          rel="noopener noreferrer"
        >
          JWT Debugger
        </a>
      </ReadingList>
    </>
  )
}

const ReadingList = styled.section`
  display: grid;
  grid-gap: 24px;
`
