import { Box, List, ListItemButton, Popover, Stack, Typography } from '@mui/material'
import React from 'react'
import { Twitter, Telegram } from '@mui/icons-material'
import { ReactComponent as DocsSvg } from '@/assets/imgs/docs.svg'
import { ReactComponent as MediumSvg } from '@/assets/imgs/medium.svg'

export type IHeadPopoverProps = {
  anchorEl: any
  handleClose: () => void
}

const listItems = [
  { name: 'Docs', href: 'https://docs.multibit.exchange/multibit', icon: <DocsSvg /> },
  // { name: 'Docs', href: 'https://docs.multibit.exchange/multibit', icon: <DocsSvg /> },
  { name: 'Telegram', href: 'https://t.me/multibitprotocol', icon: <Telegram /> },
  { name: 'Twitter', href: 'https://twitter.com/Multibit_Bridge', icon: <Twitter /> },
  { name: 'Medium', href: 'https://medium.com/@Multibit_Bridge', icon: <MediumSvg /> },
]
const HeadPopover: React.FC<IHeadPopoverProps> = ({ anchorEl, handleClose }) => {
  // const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)

  // const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   setAnchorEl(event.currentTarget)
  // }

  // const handleClose = () => {
  //   setAnchorEl(null)
  // }

  const open = Boolean(anchorEl)
  {
    /* <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        Open Popover
      </Button> */
  }
  return (
    <Popover
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      sx={{ mt: 14 }}
    >
      <Box sx={{ p: '32px 20px', background: '#111303', border: '1px solid rgba(191, 255, 11, 0.2)' }}>
        <Stack direction={'column'} spacing={32}>
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
          <List>
            {listItems.map((item, index) => (
              <ListItemButton
                key={index}
                onClick={() => {
                  window.open(item.href)
                }}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  opacity: 0.4,
                  ':hover': {
                    opacity: 1,
                  },
                }}
              >
                <Box sx={{ width: 32, height: 32, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  {item.icon}
                </Box>

                <Typography fontSize={16} fontWeight={500} lineHeight={'20px'} ml={8}>
                  {item.name}
                </Typography>
              </ListItemButton>
            ))}
          </List>
        </Stack>
      </Box>
    </Popover>
  )
}

export default HeadPopover
