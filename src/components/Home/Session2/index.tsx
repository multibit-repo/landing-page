import Image from 'next/image'
import React from 'react'
import { Box, keyframes, styled, useMediaQuery, useTheme } from '@mui/material'
import TextEfficiencyPng from '@/assets/imgs/home/text-efficiency.png'
import TextConnectivityPng from '@/assets/imgs/home/text-connectivity.png'

const loop1 = keyframes`
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-100%);
  }
`
const loop2 = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
`

const Wrapper = styled(Box)`
  align-items: center;
  display: flex;
  overflow: hidden;
  position: relative;
  height: 60px;
  border-top: 1px solid #ffffff;
  border-bottom: 1px solid #ffffff;
  margin-top: 100px;
  @media (max-width: 600px) {
    height: 40px;
    font-weight: 500;
  }
`

const Subwrapper = styled(Box)`
  flex-shrink: 0;
  position: absolute;
  animation-duration: 20s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  min-width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  > img {
    margin-left: 20px;
    margin-right: 20px;
  }
`

const Subwrapper1 = styled(Subwrapper)`
  animation-name: ${loop1};
`

const Subwrapper2 = styled(Subwrapper)`
  transform: translateX(100%);
  animation-name: ${loop2};
`

const Session2 = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))
  const TextEffHeight = matches ? 31 : 20
  const TextEffWidth = matches ? 178 : 126
  const TextConneWidth = matches ? 219 : 126
  const TextConneHeight = matches ? 31 : 20
  return (
    <Wrapper>
      <Subwrapper1>
        <Image src={TextEfficiencyPng} alt="label" height={TextEffHeight} width={TextEffWidth} />
        <Image src={TextConnectivityPng} alt="label" height={TextConneHeight} width={TextConneWidth} />
        <Image src={TextEfficiencyPng} alt="label" height={TextEffHeight} width={TextEffWidth} />
        <Image src={TextConnectivityPng} alt="label" height={TextConneHeight} width={TextConneWidth} />
        <Image src={TextEfficiencyPng} alt="label" height={TextEffHeight} width={TextEffWidth} />
        <Image src={TextConnectivityPng} alt="label" height={TextConneHeight} width={TextConneWidth} />
        <Image src={TextEfficiencyPng} alt="label" height={TextEffHeight} width={TextEffWidth} />
        <Image src={TextConnectivityPng} alt="label" height={TextConneHeight} width={TextConneWidth} />
      </Subwrapper1>
      <Subwrapper2>
        <Image src={TextEfficiencyPng} alt="label" height={TextEffHeight} width={TextEffWidth} />
        <Image src={TextConnectivityPng} alt="label" height={TextConneHeight} width={TextConneWidth} />
        <Image src={TextEfficiencyPng} alt="label" height={TextEffHeight} width={TextEffWidth} />
        <Image src={TextConnectivityPng} alt="label" height={TextConneHeight} width={TextConneWidth} />
        <Image src={TextEfficiencyPng} alt="label" height={TextEffHeight} width={TextEffWidth} />
        <Image src={TextConnectivityPng} alt="label" height={TextConneHeight} width={TextConneWidth} />
        <Image src={TextEfficiencyPng} alt="label" height={TextEffHeight} width={TextEffWidth} />
        <Image src={TextConnectivityPng} alt="label" height={TextConneHeight} width={TextConneWidth} />
      </Subwrapper2>
    </Wrapper>
  )
}

export default Session2
