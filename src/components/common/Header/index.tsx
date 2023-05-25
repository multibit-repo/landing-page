import React from 'react'
import { AppBar, styled, useMediaQuery, useTheme } from '@mui/material'
import NewFeature from './components/NewFeature'
import Toolbar from './components/Toolbar'
import HeaderMobile from './components/HeaderMobile'

const Wrapper = styled(AppBar)`
  background: transparent;
`

const Header: React.FC = () => {
  const theme = useTheme()
  const isMD = useMediaQuery(theme.breakpoints.up('md'))
  // return
  // {
  //   isMD ? (
  //     <Wrapper position="static">
  //       {/* <NewFeature /> */}
  //       <Toolbar />
  //     </Wrapper>
  //   ) : (
  //     <></>
  //   )
  // }
  return (
    <>
      {isMD ? (
        <Wrapper position="static">
          {/* <NewFeature /> */}
          <Toolbar />
        </Wrapper>
      ) : (
        <HeaderMobile />
      )}
    </>
  )
}

export default Header
