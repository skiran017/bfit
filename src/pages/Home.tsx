import { Box } from '@mui/material'
import React, { useState } from 'react'

import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'

function Home() {
  const [exercises, setExercises] = useState([])
  const [bodyPart, setBodyPart] = useState('all')
  return (
    <Box>
      <HeroBanner />
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      Exercises
    </Box>
  )
}

export default Home
