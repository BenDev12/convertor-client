/* eslint-disable prettier/prettier */
import styled from 'styled-components'
import { device } from "breakingPoints"
import { NavLink } from "react-router-dom"

const activeClassName = "nav-item-active"

export const SideBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: #15194bfa;
  @media ${device.phone} {
    margin-top: 4rem;
    flex: 0 auto;
    width:25%;
    flex-direction: row;
    background-color: #15194bfa;
    height: 70%;
    font-size: 1.2rem;
    color: white;
  }
`
export const SideNavbar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  height: 4rem;
  @media ${device.phone} {
    height: 20rem;
    width: 100%;
    flex-direction: column;
  }
`

export const Navbaritem = styled(NavLink).attrs({ activeClassName })`
  &.${activeClassName} {
    color: #272e71;
  }
  width: 100%;
  padding: 15px 10px;
  height: auto;
  text-decoration: none;
  list-style: none;
  font-size: 1.3rem;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`