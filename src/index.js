import React from 'react'
import ReactDOM from 'react-dom'
import App from 'App'
import { ApolloProvider } from '@apollo/client'
import client from 'api/graphql/Client'
import { GlobalStyles } from 'globalStyles'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

