/* eslint-disable prettier/prettier */
import styled from 'styled-components'
import {device} from 'breakingPoints'


export const AuthContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
 
  @media ${device.phone} {
    width: 70%;
    font-size: 16px;
    font-weight: 300;
  }
`
export const Form = styled.form`
  width: 100%;

  align-items: center;
  @media ${device.phone} {
    padding: 5px 0px;
    width: 100%;
    font-size: 16px;
    font-weight: 300;
  }
`