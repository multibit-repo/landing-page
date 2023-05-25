import React from 'react'
import { Box, Button, IconButton, Stack, Tooltip, Typography, styled } from '@mui/material'
import { Twitter } from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'
import LogoSvg from '@/assets/imgs/logo.svg'
import { ReactComponent as MediumSvg } from '@/assets/imgs/medium.svg'
import { Technomite } from '@/assets/fonts'

const Wrapper = styled(Box)`
  padding: 60px 106px;
  /* padding-left: 60px;
  padding-right: 60px; */
  background: transparent;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 800px) {
    padding: 0 24px;
    flex-wrap: wrap;
  }
`
const RightWrapper = styled(Box)`
  display: flex;
  align-items: flex-start;
  column-gap: 93px;
  @media (max-width: 600px) {
    column-gap: 28px;
  }
`

const Text = styled(Typography)`
  text-align: center;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  /* font-family: 'Space Grotesk'; */
  @media (max-width: 600px) {
    /* font-family: 'Space Grotesk'; */
    padding: 0;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
  }
`
const TextSub = styled(Typography)`
  /* font-family: 'Space Grotesk'; */
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  @media (max-width: 600px) {
    padding: 0;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 200%;
    text-align: center;
  }
`
const TextBrandName = styled(Typography)`
  ${Technomite.style};
  font-weight: 400;

  font-size: 34.9091px;
  line-height: 23px;
  color: #bfff0b;
  @media (max-width: 600px) {
    font-size: 17.4545px;
  }
`

const Foot = () => {
  return (
    <Wrapper>
      <Stack direction={'row'} spacing={10} alignItems={'center'} sx={{ padding: { xs: '40px 0', md: 0 } }}>
        <Image src={LogoSvg} alt={'logo'} width={32} height={32} />
        <TextBrandName variant="h1">MultiBit</TextBrandName>
      </Stack>
      <RightWrapper>
        <Stack direction={'column'} spacing={20} alignItems={'flex-start'}>
          <Text> Functions</Text>
          <Stack direction={'column'} spacing={12} alignItems={'flex-start'}>
            {/* <Link target="_blank" href={' https://twitter.com/Multibit_Bridge'}> */}
            <TextSub>Bridge (soon)</TextSub>
            {/* </Link> */}
            <TextSub> Farm (soon)</TextSub>
            <TextSub> Swap (soon)</TextSub> 
          </Stack>
        </Stack>
        <Stack direction={'column'} spacing={20} alignItems={'flex-start'}>
          <Text> Developers</Text>
          <Stack direction={'column'} spacing={12} alignItems={'flex-start'}>
            <Link target="_blank" href={'https://docs.multibit.exchange/multibit'}>
              <TextSub> Documentation</TextSub>
            </Link>
            <Link target="_blank" href={'https://github.com/multibit-repo'}>
              <TextSub>Github</TextSub>
            </Link>
            <Link target="_blank" href={'https://medium.com/@Multibit_Bridge'}>
              <TextSub>Blog</TextSub>
            </Link>
          </Stack>
        </Stack>
        <Stack direction={'column'} spacing={20} alignItems={'flex-start'}>
          <Text> Support</Text>
          <Stack direction={'column'} spacing={12} alignItems={'flex-start'}>
            <Link target="_blank" href={'https://t.me/multibitprotocol'}>
              <TextSub>Telegram</TextSub>
            </Link>
            {/* <Link underline="none" target="_blank" href={' https://t.me/multibitprotocol'}>
              <TextSub>Discord</TextSub>
            </Link> */}
            <Link target="_blank" href={'https://twitter.com/Multibit_Bridge'}>
              <TextSub>Twitter</TextSub>
            </Link>
          </Stack>
        </Stack>
      </RightWrapper>
    </Wrapper>
  )
}

export default Foot
