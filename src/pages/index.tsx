import React from 'react'
import { Box } from '@mui/material'

import PageLayout from '@/components/PageLayout'
import Session1 from '@/components/Home/Session1'
import Session2 from '@/components/Home/Session2'
// import Session3 from '@/components/Home/Session3'
import Session4 from '@/components/Home/Session4'
import Session5 from '@/components/Home/Session5'
import Session6 from '@/components/Home/Session6'

export default function Index() {
  return (
    <PageLayout>
      <Box sx={{ paddingBottom: { xs: 23, md: 112 } }}>
        <Session1 />
        <Session2 />
        {/* <Session3 /> */}
        <Session4 />
        <Session5 />
        <Session6 />
      </Box>
    </PageLayout>
  )
}
