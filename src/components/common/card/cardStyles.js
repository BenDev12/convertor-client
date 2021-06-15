/* eslint-disable prettier/prettier */
import styled from 'styled-components'
import {device} from 'breakingPoints'

export const CardBody = styled.div`
    width: 90%;
    height: 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border: 1px solid gray;
    margin: 0.25rem 0rem;
`
export const CardHeader = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  @media ${device.phone} {
    font-size: 2.5rem;
    font-weight: 500;
  }
`
export const CardItem = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
`