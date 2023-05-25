import { Box, styled } from '@mui/material'
import React from 'react'

const Wrapper = styled(Box)`
  width: 100%;
  height: 44px;
  background: #bfff0b;
  display: flex;
  justify-content: center;
  align-items: center;
`

const NewFeature = () => {
  return <Wrapper>New Feature</Wrapper>
}

export default NewFeature
