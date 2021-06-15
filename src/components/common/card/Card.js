/* eslint-disable react/destructuring-assignment */

import React from 'react'
import { CardBody } from './cardStyles'

function Card(props) {
  return (
    <CardBody>
      <h1>hey</h1>
      <div>{props.name}hello</div>
      <div>{props.currencies}</div>
      <div>{props.population}</div>
      <div>{props.rates}</div>
    </CardBody>
  )
}

export default Card
