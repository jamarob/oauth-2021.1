import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export default function Navbar() {
  return (
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/login">Login</NavLink>
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`
