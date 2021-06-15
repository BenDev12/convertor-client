/* eslint-disable react/no-array-index-key */
import React from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { GET_LIST, CONVERT } from 'operations/graphqlOperation'
import Layout from 'components/common/layout/Layout'
import { CardBody } from 'components/common/card/cardStyles'
import { Content, Search } from '../landing/styles'
import { Country, CurrencyInpt, InputField, Span } from './boardStyles'

function index() {

  const [convert] = useMutation(CONVERT)


  const handleConvert = async () => {
    const from='SEK'
    const to= 'eur'
    const data = await convert({ variables: { from, to } })
    console.log(data)
  }

  const { loading, error, data } = useQuery(GET_LIST)
  if(loading){
    return <p>Loading----</p>
  }
  if(error){
    console.log(error)
    return <p>Error</p>
  }
  if(data){
    console.log(data.getList)
  }
  return (
    <Layout>
      <Content>
        <Search>
          <CurrencyInpt>
            <InputField />
            <Span onClick={handleConvert}>Convert</Span>
          </CurrencyInpt>
        </Search>
        <Country>
          {
            data.getList.map((current, i) => (
              <CardBody key={i}>
                <div>{current.name}</div>
                <div>{current.population}</div>
                <div>{current.rates}</div>
              </CardBody>
            ))
          }
        </Country>
      </Content>
    </Layout>
  )
}

export default index
