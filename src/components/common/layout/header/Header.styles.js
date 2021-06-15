import styled from 'styled-components'
import {device} from 'breakingPoints'

export const AppBar = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  box-shadow: 0px 0.1rem #ccc;
  background-color: white;
`
export const Navbar = styled.div`
  width: 80rem;
  padding: 0px 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media ${device.TabletMd} {
    width: 80%;
  }
  @media ${device.phone} {
    padding: 0;
    width: 60%;
  }
`
export const Brand = styled.div`
  display: flex;
  width: 60%;
  height: 80%;
  font-size: 1.2rem;
  font-weight: 700;
  align-items: center;
  box-sizing: border-box;
  @media ${device.TabletMd} {
    width: 50%;
  }
  @media ${device.phone} {
    width: 50%;
    font-size: 2rem;
    font-weight: 500;
  }
`
export const BrandImage = styled.img`
  width: auto;
  height: 80%;
  color: white;
  cursor:pointer
`

;


