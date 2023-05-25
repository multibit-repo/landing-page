import { Box, Typography, styled } from '@mui/material'
import React from 'react'

const Wrapper = styled(Box)`
  width: 100%;
  padding-left: 60px;
  padding-right: 60px;
  margin-top: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    padding: 0;
  }
`

const Text = styled(Typography)`
  max-width: 1243px;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 200%;
  text-align: center;
  color: rgba(255, 255, 255, 0.9);
  @media (max-width: 600px) {
    width: 327px;
    padding: 0;

    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 200%;
    text-align: center;
  }
`

const Session3 = () => {
  return (
    <Wrapper>
      <Text>
        MultiBit breaks down the barrier between the BTC and ETH chains, allowing you to easily transfer assets and
        conduct transactions between popular blockchains. Let&apos;s embrace the future of blockchain with our
        cutting-edge cross-chain bridge solution.
      </Text>
    </Wrapper>
  )
}

export default Session3
