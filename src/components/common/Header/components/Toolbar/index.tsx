import React from 'react'
import { Box, Button, Fade, IconButton, Stack, Tooltip, Typography, styled } from '@mui/material'
import { Twitter, Telegram } from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'
import HeadPopover from '../HeadPopover'
import LogoSvg from '@/assets/imgs/logo.svg'
import { ReactComponent as MediumSvg } from '@/assets/imgs/medium.svg'
import { ReactComponent as DiscordSvg } from '@/assets/imgs/discord.svg'
import { Technomite } from '@/assets/fonts'

const Wrapper = styled(Box)`
  height: 88px;
  padding-left: 60px;
  padding-right: 60px;

  background: transparent;

  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 600px) {
    padding: 0 24px;
  }
`

const LaunchAppButton = styled(Button)`
  padding: 10px 12px;
  border: 1px solid #ffffff;
  border-radius: unset;

  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;

  color: #ffffff;
  @media (max-width: 600px) {
    padding: 5px 8px;
    font-size: 14px;
  }
`
const MoreButton = styled(Button)`
  padding: 8px;
  border: 1px solid #bfff0b;
  min-width: 0%;
  border-radius: unset;
  font-style: normal;
  font-weight: 700;
  align-items: baseline;
  line-height: 20px;
  color: #bfff0b !important;
  width: 40px;
  /* align-items: baseline; */
  font-size: 24px;
  color: #ffffff;
  @media (max-width: 600px) {
    padding: 4.8px;
    width: 20px;
  }
`

const RightWrapper = styled(Box)`
  display: flex;
  align-items: center;
  column-gap: 16px;
`

const StyledIconButton = styled(IconButton)`
  opacity: 0.4;

  :hover {
    opacity: 1;
  }
  @media (max-width: 600px) {
    display: none;
  }
`

const TextBrandName = styled(Typography)`
  ${Technomite.style};
  font-weight: 400;
  font-size: 17.4545px;
  line-height: 23px;
  color: #bfff0b;
`

const menuItem = [
  { name: 'About', check: true },
  { name: 'Bridge', check: false },
  { name: 'Lucky Drop', check: false },
  { name: 'Farm', check: false },
  { name: 'Swap', check: false },
]
const Toolbar = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  return (
    <Wrapper>
      <Stack direction={'row'} spacing={60} alignItems={'center'}>
        <Stack direction={'row'} spacing={10} alignItems={'center'}>
          <Image src={LogoSvg} alt={'logo'} width={32} height={32} />
          <TextBrandName variant="h1">MultiBit</TextBrandName>
        </Stack>
        <Stack
          direction={'row'}
          spacing={40}
          alignItems={'center'}
          sx={{
            display: { xs: 'none', md: 'flex' },
          }}
        >
          {menuItem.map((item) => {
            return item.check ? (
              <Typography key={item.name} fontWeight={500} fontSize={16} sx={{ cursor: 'pointer' }} color={'#FFFFFF'}>
                {item.name}
              </Typography>
            ) : (
              <Tooltip key={item.name} title="Coming soon" enterTouchDelay={50}>
                <Typography
                  fontWeight={500}
                  fontSize={16}
                  sx={{
                    cursor: 'pointer',
                    opacity: 0.4,
                  }}
                >
                  {item.name}
                </Typography>
              </Tooltip>
            )
          })}
        </Stack>
      </Stack>

      <RightWrapper>
        <Link href="https://twitter.com/Multibit_Bridge" target="_blank">
          <StyledIconButton>
            <Twitter />
          </StyledIconButton>
        </Link>
        <Link href="https://medium.com/@Multibit_Bridge" target="_blank">
          <StyledIconButton>
            <MediumSvg />
          </StyledIconButton>
        </Link>
        <Link href="https://t.me/multibitprotocol" target="_blank">
          <StyledIconButton>
            <Telegram />
          </StyledIconButton>
        </Link>
        {/* <Link href="https://docs.multibit.exchange/multibit/" target="_blank">
          <StyledIconButton>
            <DiscordSvg />
          </StyledIconButton>
        </Link> */}
        <Tooltip title="Coming soon" enterTouchDelay={50}>
          <LaunchAppButton>Launch App</LaunchAppButton>
        </Tooltip>
        <div>
          <MoreButton onClick={handleClick}>···</MoreButton>
          <HeadPopover
            anchorEl={anchorEl}
            handleClose={() => {
              setAnchorEl(null)
            }}
          />
        </div>
      </RightWrapper>
    </Wrapper>
  )
}

export default Toolbar
