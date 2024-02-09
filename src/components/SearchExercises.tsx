import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

import { BODY_PARTS_API_URL, EXERCISES_API_URL } from '../utils/constants'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar'

function SearchExercises({ bodyPart, setBodyPart, setExercises }: any) {
  const [searchInput, setSearchInput] = useState('')
  const [bodyParts, setBodyParts] = useState<any>([])

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(BODY_PARTS_API_URL, exerciseOptions)

      setBodyParts(['all', ...bodyPartsData])
    }

    fetchExercisesData()
  }, [])

  async function handleSearch() {
    if (searchInput) {
      const exercisesData = await fetchData(EXERCISES_API_URL, exerciseOptions)

      const searchedExercises = exercisesData.filter(
        (item: any) =>
          item.name.toLowerCase().includes(searchInput) ||
          item.target.toLowerCase().includes(searchInput) ||
          item.equipment.toLowerCase().includes(searchInput) ||
          item.bodyPart.toLowerCase().includes(searchInput)
      )

      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' })

      setSearchInput('')
      setExercises(searchedExercises)
    }
  }

  return (
    <Stack alignItems="center" mt={'36px'} justifyContent="center" p="20px">
      <Typography
        fontWeight="700"
        sx={{
          fontSize: { lg: '44px', xs: '30px' }
        }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: '700', border: 'none', borderRadius: '4px' },
            width: { lg: '1170px', xs: '350px' },
            backgroundColor: '#fff',
            borderRadius: '40px'
          }}
          value={searchInput}
          onChange={(e: any) => setSearchInput(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: '#FF2625',
            color: '#fff',
            textTransform: 'none',
            width: { lg: '173px', xs: '80px' },
            height: '56px',
            position: 'absolute',
            right: '0px',
            fontSize: { lg: '20px', xs: '14px' }
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} />
      </Box>
    </Stack>
  )
}

export default SearchExercises
