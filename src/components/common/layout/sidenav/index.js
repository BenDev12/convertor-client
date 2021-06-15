/* eslint-disable prettier/prettier */

import React from 'react'
import { Navbaritem, SideBar, SideNavbar } from './sideStyles';


function index() {
    return (
      <SideBar>
       <SideNavbar>
          <Navbaritem to='/'>Home</Navbaritem>
          <Navbaritem to='/list'>List</Navbaritem>
       </SideNavbar>
      </SideBar>

    );
}

export default index
