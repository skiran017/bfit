import 'react-horizontal-scrolling-menu/dist/styles.css'

import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'

import LeftArrowIcon from '../assets/icons/left-arrow.png'
import RightArrowIcon from '../assets/icons/right-arrow.png'
import BodyPart from './BodyPart'
// import ExerciseCard from './ExerciseCard'

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext)
  

  return (
    <Typography
      onClick={() => scrollPrev()}
      
      className="right-arrow"
    >
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  )
}

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext)

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  )
}

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }: any) => (
  <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
    {data.map((item: any) => (
      <Box key={item.id || item} itemID={item.id || item} title={item.id || item} m="0 40px">
        {bodyParts ? (
          <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
        ) : (
          // <ExerciseCard exercise={item} />
          'Exer'
        )}
      </Box>
    ))}
  </ScrollMenu>
)

export default HorizontalScrollbar
