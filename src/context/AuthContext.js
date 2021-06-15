import React, { createContext, useState, useContext, useEffect } from 'react'

import Cookies from 'js-cookie'

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadUserFromCookies() {
      Cookies.get('token')
      if (token) {
        console.log("Got a token in the cookies, let's see if it is valid")
        setToken(token)
        setUser(user)
      }
      setLoading(false)
    }
    loadUserFromCookies()
  }, [])

  const login = async () => {}
  const logout = () => {
    Cookies.remove('token')
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: !user, user, login, token, loading, logout }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
export const useAuth = () => useContext(AuthContext)
