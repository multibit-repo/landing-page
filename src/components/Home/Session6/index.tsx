import { Box, Button, Stack, Tooltip, Typography, styled, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import { Technomite } from '@/assets/fonts'

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
    width: 327px;
    font-size: 32px;
    line-height: 41px;
    text-align: center;
    letter-spacing: 0.1em;
    white-space: break-spaces;
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
const Card = styled(Box)`
  flex: 1;
  height: auto;
  border: 1px solid rgba(191, 255, 11, 0.7);
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 20px;
  transition: box-shadow 0.2s ease-in-out;
  :hover {
    box-shadow: 0px 6px 30px #bfff0b;
  }
  box-sizing: border-box;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    gap: 10px;
    background: #111303;
    border: 1px solid rgba(191, 255, 11, 0.2);
  }
`

const CardTextTitle = styled(Typography)`
  font-weight: 700;
  font-size: 32px;
  line-height: 41px;
  color: #ffffff;
  @media (max-width: 600px) {
    font-weight: 700;
    font-size: 20px;
    line-height: 26px;
  }
`
const TextSubtitle = styled(Typography)`
  font-weight: 700;
  font-size: 24px;
  line-height: 31px;
  color: rgba(255, 255, 255, 0.9);
  @media (max-width: 600px) {
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
  }
`

const TextDescription = styled(Typography)`
  font-weight: 400;
  font-size: 24px;
  line-height: 150%;
  @media (max-width: 600px) {
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
  }
`
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
const Session6 = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))
  const TextEffHeight = matches ? 737 : 561
  const TextEffWidth = matches ? 1133.49 : 337

  return (
    <Wrapper>
      <TextTitle>Get Started Now</TextTitle>
      <Text>Find Resources you need to take advantage of MultiBit</Text>
      <Box sx={{ maxWidth: '100%', overflow: 'auto' }}>
        <Stack direction="row" spacing={{ xs: 16, md: 32 }} mt={30} sx={{ minWidth: 640, ml: 30 }}>
          <Card>
            <CardTextTitle>Documentation</CardTextTitle>
            <TextDescription>Read a detailed breakdown of our product offering and smart contract</TextDescription>
            <Box>
              <Tooltip title="Coming soon" enterTouchDelay={50}>
                <LaunchAppButton>Read the docs</LaunchAppButton>
              </Tooltip>
            </Box>
          </Card>
          <Card>
            <CardTextTitle>Tutorials</CardTextTitle>
            <TextDescription>Watch interactive tutorials to learn how MultiBit works</TextDescription>
            <Box>
              <Tooltip title="Coming soon" enterTouchDelay={50}>
                <LaunchAppButton>Go to tutorials</LaunchAppButton>
              </Tooltip>
            </Box>
          </Card>
        </Stack>
      </Box>
    </Wrapper>
  )
}

export default Session6
