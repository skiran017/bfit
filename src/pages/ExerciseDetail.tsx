import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Detail from '../components/Detail'
import { exerciseOptions, fetchData } from '../utils/fetchData'

function ExerciseDetail() {
  const [exerciseDetail, setExerciseDetail] = useState({})

  const { id } = useParams()

  return (
    <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
      <Detail exerciseDetail={exerciseDetail} />
    </Box>
  )
}

export default ExerciseDetail
