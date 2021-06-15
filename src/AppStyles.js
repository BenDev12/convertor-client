import styled from "styled-components"
import  {device } from "breakingPoints"


export const Wrapper = styled.div`
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  @media ${device.phone} {
  width: 100%;
  }
`
