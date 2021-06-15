import React from 'react'
import Button from 'components/common/button/Button'
import {AppBar, Navbar, Brand} from './Header.styles'

function Header() {
    return (
      <AppBar>
        <Navbar>
          <Brand>
            Anyfin Assignment
          </Brand>
          <Button>Get started</Button>
        </Navbar>
      </AppBar>
    );
}

export default Header
