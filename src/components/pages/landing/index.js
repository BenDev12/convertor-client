/* eslint-disable no-nested-ternary */
/* eslint-disable no-shadow */
import React, { useState } from 'react'
import { useQuery, useMutation, NetworkStatus } from '@apollo/client'
import Spiner from 'components/common/spinner/Loading'
import FormInput from 'components/common/form/formInput'
import { CardHeader, CardItem } from 'components/common/card/cardStyles'
import Button from 'components/common/button/Button'
import { GET_COUNTRY, CREATE_LIST } from 'operations/graphqlOperation'
import Layout from 'components/common/layout/Layout'
import ALERT_RESPONSES from 'utils/responses'
import { Content, ContentArea, Search } from './styles'

function index(props) {
  const [createList] = useMutation(CREATE_LIST)

  const [countryName, setName] = useState("")

  const [state, setState] = React.useState("Swedden")

  const { loading, error, data, networkStatus } = useQuery(GET_COUNTRY, {
    variables: { name: state },
    notifyOnNetworkStatusChange: true,
  })
console.log(`no ${error}`)
  const handleChange = (event) => {
    setName(event.target.value)
  }
  const handleSearch = async (e) => {
    e.preventDefault()
    
     const token = localStorage.getItem('token')
     console.log(token)
     if (!token || token === null) {
       return props.history.push('/login')
     }
    const newName = countryName
    console.log(newName)
    setState(newName)
  }

  const addToList = async () => {

     const token = localStorage.getItem('token')
     if (!token || token === null) {
       return props.history.push('/login')
     }
    const { name, population,  rates } = data.country
    console.log(data.country)
    try {
      const {loading, error, data} = await createList({
        variables: {
          name,
          population,
          rates,
        },
      })
      if(loading){
        console.log(loading)
      }
      if(error){
        console.log(error)
      }
     if(data){
      <div>{ALERT_RESPONSES.successResponses}</div> 
     }
    } catch (error) {
      console.log(error)
    }
  }

  if (networkStatus === NetworkStatus.refetch) return 'Refetching!'
  const RenderCountry = () => (
    <Layout>
      <Content>
        <Search onSubmit={handleSearch}>
          <FormInput
            placeholder='Search country'
            value={countryName}
            onChange={handleChange}
            name='search'
            required
          />
          <Button type='submit'>Search</Button>
        </Search>
        {loading ? (
          <Spiner />
        ) : error ? (
          <p>{error.message}</p>
        ) : state ? (
          <ContentArea>
            <CardHeader>{data.country.name}</CardHeader>
            <CardItem>
              <h2>Population </h2>
              {data.country.population}
              <h2>Official Currency</h2>
              {data.country.currencies}
              <h2>Exchange Rate</h2>
              {data.country.rates}
            </CardItem>
          </ContentArea>
        ) : (
          <p>No Information Available</p>
        )}
        {data ? (
          <button type='submit' onClick={addToList}>
            Add to list
          </button>
        ) : null}
      </Content>
    </Layout>
  )
  return RenderCountry()
}

export default index
