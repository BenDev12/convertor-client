/* eslint-disable prettier/prettier */
import styled from 'styled-components'
import {device} from 'breakingPoints'

export const CusttomButt = styled.button`
  width: auto;
  height: 2.5rem;
  border: 1px solid white;
  outline: none;
  border-radius: 1px;
  background-color: #15194bfa;
  color: white;
  font-size: 14px;
  padding: 0.5rem 2rem;
  cursor: pointer;
  transition: 0.5s ease;
  &:hover {
    color: #2182f1;
  }
  @media ${device.phone} {
    width: auto;
    height: 2.5rem;
    border: 2px solid white;
    outline: none;
    border-radius: 1px;
    background-color: #15194bfa;
    color: white;
    font-size: 16px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    &:hover {
      color: #2182f1;
    }
  }
`