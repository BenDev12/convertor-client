import { gql } from '@apollo/client'

export const GET_COUNTRY = gql`
  query ($name: String!) {
    country(name: $name) {
      name
      population
      currencies
      rates
    }
  }
`
export const SIGN_UP = gql`
  mutation ($name: String!, $email: String!, $password: String!) {
    signUp(name: $name, email: $email, password: $password) {
      name
      email
    }
  }
`
export const CREATE_LIST = gql`
  mutation (
    $name: String!
    $population: Int!
    $rates: Float!
  ) {
    createList(
      name: $name
      population: $population
      rates: $rates
    ) {
      country {
        name
      }
      message
    }
  }
`

export const SIGN_IN = gql`
  mutation ($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      status
      token
    }
  }
`

export const GET_LIST = gql`
  query  {
    getList{
      _id
      name
      population
      rates
    }
  }
`

export const CONVERT = gql`
  mutation ($from: Strinig!, $to: String!) {
    convert(from: $name, to: $to) {
      rates
    }
  }
`