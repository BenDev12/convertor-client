import React from 'react'
import { Container} from 'components/pages/landing/styles'
import SideNaV from "components/common/layout/sidenav"

function Layout({children}) {
    return (
      <Container>
        <SideNaV />
        {children}
      </Container>
    )
}

export default Layout
