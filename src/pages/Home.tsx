import { Box } from '@mui/material'
import React, { useState } from 'react'

import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'

function Home() {
  return (
    <Box>
      <HeroBanner />
      <SearchExercises />
      Exercises
    </Box>
  )
}

export default Home
