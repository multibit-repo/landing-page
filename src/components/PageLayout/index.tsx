import React from 'react'
import { Box } from '@mui/material'
import Header from '../common/Header'
import Footer from '../common/Footer'

export type IPageLayoutProps = {
  children: React.ReactNode
}

const PageLayout: React.FC<IPageLayoutProps> = ({ children }) => {
  return (
    <main>
      <Header />
      <Box>{children}</Box>
      <Footer />
    </main>
  )
}

export default PageLayout
