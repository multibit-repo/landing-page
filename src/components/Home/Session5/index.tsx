import { Box, Typography, styled, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import { Technomite } from '@/assets/fonts'
import flowChart from '@/assets/imgs/home/flowChart.png'
import flowChartMobile from '@/assets/imgs/home/flowChartMobile.png'
const Wrapper = styled(Box)`
  width: 100%;
  padding-left: 60px;
  padding-right: 60px;
  margin-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  @media (max-width: 600px) {
    padding: 0;
  }
`
const TextTitle = styled(Typography)`
  width: fit-content;

  ${Technomite.style};
  font-weight: 400;
  font-size: 54px;
  line-height: 70px;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.9);

  text-shadow: 0px 0px 40px #bfff0b;
  border-right: 4px solid transparent;

  @media (max-width: 600px) {
    /* display: none; */

    text-align: center;
    white-space: break-spaces;
  }
`
const TextDescription = styled(Typography)`
  width: 590px;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 200%;
  color: rgba(255, 255, 255, 0.9);
  margin-top: 40px;
  @media (max-width: 600px) {
    white-space: break-spaces;
    margin-top: 32px;
    margin-bottom: 32px;
    width: 327px;

    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 200%;
    text-align: center;
  }
`

const Text = styled(Typography)`
  margin: 40px 0 32px 0;

  max-width: 1143px;
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

const Session5 = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))
  const TextEffHeight = matches ? 737 : 561
  const TextEffWidth = matches ? 1133.49 : 337

  return (
    <Wrapper>
      <TextTitle>How it all works</TextTitle>
      <Text>
        MultiBit simplifies the process of transferring BRC20 tokens from Bitcoin to the EVM networks. Users transfer
        their BRC20 tokens to their dedicated BRC20 address, and after confirmation, the tokens become available for
        minting on EVM networks. With MultiBit, users can effortlessly bridge and mint tokens between bitcoin and EVM
        networks for seamless cross-chain transfer.
      </Text>
      <Image src={matches ? flowChart : flowChartMobile} alt="label" height={TextEffHeight} width={TextEffWidth} />
    </Wrapper>
  )
}

export default Session5
