import { Box, Drawer, IconButton, Stack, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Telegram, Twitter } from '@mui/icons-material'
import DescriptionIcon from '@mui/icons-material/Description'
import { ReactComponent as MenuSVG } from '@/assets/imgs/menu.svg'
import { ReactComponent as CloseSVG } from '@/assets/imgs/close.svg'
import { Technomite } from '@/assets/fonts'
import LogoSvg from '@/assets/imgs/logo.svg'

import { ReactComponent as RightSvg } from '@/assets/imgs/right.svg'
import { ReactComponent as MediumSvg } from '@/assets/imgs/medium.svg'
export type IHeaderMobileProps = {}

const TextBrandName = styled(Typography)`
  ${Technomite.style};
  font-weight: 400;
  font-size: 15.2727px;
  line-height: 20px;
  color: #bfff0b;
`

const StyledIconButton = styled(IconButton)`
  opacity: 0.4;

  :hover {
    opacity: 1;
  }
`

const HeaderMobile: React.FC<IHeaderMobileProps> = ({}) => {
  const [showSlider, setShowSlider] = useState<boolean>(false)
  return (
    <Box
      sx={{
        height: 88,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 24,
      }}
    >
      <Stack direction={'row'} spacing={8.75} alignItems={'center'}>
        <Image src={LogoSvg} alt={'logo'} width={32} height={32} />
        <TextBrandName variant="h1">MultiBit</TextBrandName>
      </Stack>
      <IconButton
        onClick={() => {
          setShowSlider(true)
        }}
      >
        <MenuSVG />
      </IconButton>
      <Drawer
        sx={{
          '& .MuiDrawer-paper': {
            background: '#030401',
            height: '100%',
          },
        }}
        anchor="top"
        open={showSlider}
        onClose={() => {
          setShowSlider(false)
        }}
      >
        <Stack px={24} height={'100%'}>
          <Box
            sx={{
              height: 88,
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Stack direction={'row'} spacing={8.75} alignItems={'center'}>
              <Image src={LogoSvg} alt={'logo'} width={32} height={32} />
              <TextBrandName variant="h1">MultiBit</TextBrandName>
            </Stack>
            <IconButton
              onClick={() => {
                setShowSlider(false)
              }}
            >
              <CloseSVG />
            </IconButton>
          </Box>
          <Box
            p={'32px 0px 25px 0px'}
            display={'flex'}
            flex={1}
            flexDirection={'column'}
            justifyContent={'space-between'}
          >
            <Stack spacing={20} direction={'column'}>
              <Stack direction={'column'} spacing={8}>
                <Typography fontSize={20} lineHeight={'26px'} fontWeight={500} color={'#FFFFFF'}>
                  Account
                </Typography>
                <Typography
                  fontSize={14}
                  lineHeight={'18px'}
                  fontWeight={500}
                  color={'#FFFFFF'}
                  sx={{
                    opacity: 0.4,
                  }}
                >
                  View your portfolio of related assets on this chain
                </Typography>
              </Stack>

              <Box
                sx={{
                  borderBottom: '1px solid rgba(57, 61, 73, 0.5)',
                  pb: 30,
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
                onClick={() => {
                  setShowSlider(false)
                }}
              >
                <Typography color={'#FCFCFD'}>About</Typography>
                <RightSvg />
              </Box>

              <Box
                sx={{
                  borderBottom: '1px solid rgba(57, 61, 73, 0.5)',
                  pb: 30,
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <Typography color={'#FCFCFD'}>
                  Bridge <span style={{ opacity: 0.4 }}>(SOON)</span>
                </Typography>
                <RightSvg />
              </Box>
              <Box
                sx={{
                  borderBottom: '1px solid rgba(57, 61, 73, 0.5)',
                  pb: 30,
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <Typography color={'#FCFCFD'}>
                  Lucky Drop <span style={{ opacity: 0.4 }}>(SOON)</span>
                </Typography>
                <RightSvg />
              </Box>
              <Box
                sx={{
                  borderBottom: '1px solid rgba(57, 61, 73, 0.5)',
                  pb: 30,
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <Typography color={'#FCFCFD'}>
                  Farm <span style={{ opacity: 0.4 }}>(SOON)</span>
                </Typography>
                <RightSvg />
              </Box>
              <Box
                sx={{
                  borderBottom: '1px solid rgba(57, 61, 73, 0.5)',
                  pb: 30,
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <Typography color={'#FCFCFD'}>
                  Swap <span style={{ opacity: 0.4 }}>(SOON)</span>
                </Typography>
                <RightSvg />
              </Box>
            </Stack>
            <Stack direction={'row'} spacing={12} alignContent={'center'}>
              <Link href="https://docs.multibit.exchange/multibit" target="_blank">
                <StyledIconButton>
                  <DescriptionIcon />
                </StyledIconButton>
              </Link>
              <Link href="https://t.me/multibitprotocol" target="_blank">
                <StyledIconButton>
                  <Telegram />
                </StyledIconButton>
              </Link>
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
            </Stack>
          </Box>
        </Stack>
      </Drawer>
    </Box>
  )
}

export default HeaderMobile
