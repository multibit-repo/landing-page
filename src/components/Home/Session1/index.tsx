import React, { useEffect, useState } from 'react'
import { Box, Button, Tooltip, Typography, keyframes, styled, useMediaQuery, useTheme } from '@mui/material'
import Image from 'next/image'

import BridgeSvg from '@/assets/imgs/home/bridge.svg'
import { Technomite } from '@/assets/fonts'

const Wrapper = styled(Box)`
  width: 100%;
  margin-top: 52px;
  padding-left: 60px;
  padding-right: 60px;

  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 120px;
  @media (min-width: 600px) {
    /* flex-direction: column; */
  }

  @media (max-width: 600px) {
    margin-top: 10px;
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 52px;
    flex-direction: column;
  }
`

const LeftWrapper = styled(Box)`
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const blinkCaret = keyframes`
  from, to { border-color: transparent }
  50% { border-color: #fff; }
  
`

const TextTitle = styled(Typography)`
  width: fit-content;
  height: 83px;
  ${Technomite.style};
  font-weight: 400;
  font-size: 54px;
  line-height: 70px;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.9);
  white-space: nowrap;
  text-shadow: 0px 0px 40px #bfff0b;
  border-right: 4px solid transparent;
  animation: ${blinkCaret} 1s step-end infinite;
  @media (max-width: 600px) {
    display: none;
    /* width: 375px; */
    /* white-space: break-spaces; */
  }
`
const TextTitleMobile2 = styled(Typography)`
  width: fit-content;
  height: 83px;

  ${Technomite.style};
  font-weight: 400;
  font-size: 54px;
  line-height: 70px;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.9);
  white-space: nowrap;
  text-shadow: 0px 0px 40px #bfff0b;
  border-right: 4px solid transparent;
  animation: ${blinkCaret} 1s step-end;
  @media (max-width: 600px) {
    width: fit-content;
    text-align: center;
    padding: 0 19.5px;
    font-weight: 400;
    font-size: 40px;
    line-height: 52px;
    height: 52px;
    /* width: 375px; */
    /* white-space: break-spaces; */
  }
`
const TextTitleMobile3 = styled(Typography)`
  width: fit-content;
  height: 83px;

  ${Technomite.style};
  font-weight: 400;
  font-size: 54px;
  line-height: 70px;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.9);
  white-space: nowrap;
  text-shadow: 0px 0px 40px #bfff0b;
  border-right: 4px solid transparent;
  animation: ${blinkCaret} 2s step-end infinite;
  @media (max-width: 600px) {
    width: fit-content;
    text-align: center;
    font-size: 40px;
    line-height: 52px;
    height: 52px;
    margin-top: 5px;
    /* width: 375px; */
    /* white-space: break-spaces; */
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
const BoxTextMobiles = () => {
  const fullText2 = 'MultiBit'
  const fullText3 = ' Bridge'
  const [text2, setText2] = useState('')
  const [text3, setText3] = useState('')
  const [index2, setIndex2] = useState(0)
  const [index3, setIndex3] = useState(0)
  useEffect(() => {
    if (index2 < fullText2.length) {
      setTimeout(() => {
        setText2(text2 + fullText2[index2])
        setIndex2(index2 + 1)
      }, 100)
    }

    if (index3 < fullText3.length) {
      setTimeout(() => {
        setText3(text3 + fullText3[index3])
        setIndex3(index3 + 1)
      }, 300)
    }
  }, [index2, text2, index3, text3])
  return (
    <>
      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <TextTitleMobile2>{text2}</TextTitleMobile2>
        <TextTitleMobile3>{text3}</TextTitleMobile3>
      </Box>
    </>
  )
}
const LaunchAppButton = styled(Button)`
  background: #bfff0b;
  border-radius: unset;
  padding: 16px 40px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  :hover {
    background-color: #bfff0b;
  }
  @media (max-width: 600px) {
    padding: 11px 20px;
    font-size: 14px;
  }
`
const Session1 = () => {
  const fullText = ' MultiBit Bridge'
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))
  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index])
        setIndex(index + 1)
      }, 100)
    }
  }, [index, text])

  return (
    <Wrapper>
      <LeftWrapper>
        <TextTitle>{text}</TextTitle>
        <BoxTextMobiles />
        <TextDescription>
          Say goodbye to the limitations of operating solely within the single BTC blockchain ecosystem. MultiBit will
          provides you with a higher level of efficiency, connectivity, and opens up a world of infinite possibilities
          in the decentralized field.
        </TextDescription>
        <Box sx={{ mt: 20 }}>
          <Tooltip title="Coming soon" enterTouchDelay={50}>
            <LaunchAppButton>Enter Bridge</LaunchAppButton>
          </Tooltip>
        </Box>
      </LeftWrapper>
      <Box
        sx={{
          width: { xs: '326.72px', md: '623px' },
          height: { xs: '229px', md: '437px' },
          mt: { xs: '32px', md: '20px' },
        }}
      >
        <img src={BridgeSvg} alt="bridge" style={{ height: '100%', width: '100%' }} />
      </Box>
    </Wrapper>
  )
}

export default Session1
