import React from 'react'
import { Box, IconButton, Typography, styled } from '@mui/material'

import { Twitter } from '@mui/icons-material'

import Image from 'next/image'
import Link from 'next/link'

import { ReactComponent as MediumSvg } from '@/assets/imgs/medium.svg'
import { Technomite } from '@/assets/fonts'

const Wrapper = styled(Box)`
  width: 100%;
  padding-left: 60px;
  padding-right: 60px;
  margin-top: 86px;

  display: flex;
  justify-content: center;
  column-gap: 30px;
  @media (max-width: 600px) {
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const Card = styled(Box)`
  flex: 1;
  height: auto;
  border: 1px solid rgba(191, 255, 11, 0.7);

  padding: 30px;

  display: flex;
  flex-direction: column;
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
    width: 327px;
    background: #000000;
    border: 1px solid rgba(191, 255, 11, 0.7);
    margin-bottom: 24px;
  }
`

const TextTitle = styled(Typography)`
  ${Technomite.style};
  font-weight: 400;
  font-size: 32px;
  line-height: 41px;
  color: #bfff0b;
  @media (max-width: 600px) {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
    padding-top: 10px;
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
  font-size: 20px;
  line-height: 150%;

  @media (max-width: 600px) {
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
  }
`
const BottomWrappe = styled(Box)`
  @media (min-width: 600px) {
    display: none;
  }
  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    a: nth-child(1) {
      margin-right: 20px;
    }
  }
`
const StyledIconButton = styled(IconButton)`
  /* opacity: 0.4; */
  /* 
  :hover {
    opacity: 1;
  } */
  @media (min-width: 600px) {
    display: none;
  }
  @media (max-width: 600px) {
    opacity: 1;
    background: #bfff0b;
    color: #000000;
    :hover {
      background: #bfff0b;
      color: #000000;
    }
  }
`
const Session4 = () => {
  return (
    <Wrapper>
      <Card>
        <TextTitle>Security</TextTitle>
        <TextSubtitle>At MultiBit</TextSubtitle>
        <TextDescription>
          security is our top priority. We implement robust measures to safeguard user accounts and funds. Regular
          consolidation of funds from distributed addresses to a secure cold wallet ensures isolation and protection.
          Our approval-based withdrawal process guarantees added security and accountability. With MultiBit, you can
          have peace of mind knowing that your assets are handled with the utmost security and care.
        </TextDescription>
      </Card>
      <Card>
        <TextTitle>User Experience</TextTitle>
        <TextSubtitle>At MultiBit</TextSubtitle>
        <TextDescription>
          we design with one core principle in mind: create solutions that users truly want.
          <br />
          <br /> Our user experience obsession is evident in our MultiBit Bridge, a reliable tool for seamless
          cross-chain token transfer. We&apos;ve incorporated features to make it safer and easier for users to bridge
          BRC20 tokens cross chains. Additionally, we&apos;re committed to facilitating developers who wish to leverage
          MultiBit to create novel cross-chain experiences.
        </TextDescription>
      </Card>
      <Card>
        <TextTitle>Scalability</TextTitle>
        <TextSubtitle>At MultiBit</TextSubtitle>
        <TextDescription>
          The current landscape of blockchain interoperability is fragmented and challenging to navigate given the
          myriad of new blockchains with their individual states. MultiBit is designed to obliterate these
          interoperability barriers between BRC20 and Ethereum ecosystem tokens.
        </TextDescription>
      </Card>
    </Wrapper>
  )
}

export default Session4
