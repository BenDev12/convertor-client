/* eslint-disable prettier/prettier */
import styled from "styled-components"
import {device} from 'breakingPoints'

export const Container = styled.div`
  margin: 0;
  display: flex;
  width: 100%;
  flex-direction: column;
  height:70vh;

  @media ${device.phone} {
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
    box-sizing: border-box;
    width: 60%;
    height: 91vh;
  }
`
export const Content = styled.div`
  padding: 10px 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 70%;
  background-color: white;
  @media ${device.phone} {
    justify-content: space-between;
    margin-top: 4rem;
    padding: 10px;
    width: 60%;
    height: auto;
  }
`

export const Search = styled.form`
  width: 90%;
  height: 4rem;
  padding: 0;
  box-sizing: border-box;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media ${device.phone} {
    height: 15%;
  }
`
export const ContentArea = styled.div`
  height: 70%;
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media ${device.phone} {
    height: 100%;
    width: 100%;
  }
`
