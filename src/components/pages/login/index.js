import React from 'react'
import Layout from 'components/common/layout/Layout'
import { Content } from '../landing/styles'
import Login from './login'

function index() {
  return (
    <Layout>
      <Content>
        <Login />
      </Content>
    </Layout>
  )
}

export default index
