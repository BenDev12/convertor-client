/* eslint-disable consistent-return */
import React from 'react'
import { Redirect } from 'react-router-dom'

function withToken() {

  const token = localStorage.getItem('token')
  if (!token || token === null) {
    return <Redirect to='/login' />
  }
}

export default withToken

