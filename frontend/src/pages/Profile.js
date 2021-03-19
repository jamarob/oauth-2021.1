import axios from 'axios'
import { useEffect, useState } from 'react'
import { useAuth } from '../auth/authContext'

export default function Profile() {
  const { token } = useAuth()
  const [user, setUser] = useState()

  useEffect(() => {
    if (token) {
      axios
        .get('/api/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => response.data)
        .then(setUser)
    }
  }, [token])

  if (!user) {
    return null
  }

  return (
    <>
      <h1>Profile</h1>
      <p>
        {user.username}s favorite animal is {user.favoriteAnimal}
      </p>
    </>
  )
}
