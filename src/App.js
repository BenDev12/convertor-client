import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from 'components/common/layout/header/Header'
import LandingPage from 'components/pages/landing'
import List from 'components/pages/list'
import Login from 'components/pages/login'
import AuthProvider from 'context/AuthContext'
import { Wrapper } from 'AppStyles'
import 'App.scss'

function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <AuthProvider>
          <Header />
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path='/login' component={Login} />
            <Route path='/list' component={List} />
          </Switch>
        </AuthProvider>
      </BrowserRouter>
    </Wrapper>
  )
}

export default App
