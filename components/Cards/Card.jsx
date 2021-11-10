import React from 'react'
import styled from '@mui/material/styles/styled'
import MuiCard from '@mui/material/Card'
import Rating from '@mui/material/Rating'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

const StyledMuiCard = styled(MuiCard)({
  backgroundColor: 'white',
  marginLeft: '2rem',
  width: `12.25rem`,
})

export function Card({ item }) {
  return (
    <StyledMuiCard
      sx={{
        height: `${item?.reviewsStars ? 20 : 15.5}rem`,
      }}
    >
      <CardMedia component='img' image={item?.imgSrcPath} alt={item?.title} />
      <CardContent>
        <Typography gutterBottom variant='p' sx={{ fontWeight: '600' }}>
          {item?.title}{' '}
          {item?.subtitle && (
            <Typography
              variant='p'
              color='text.secondary'
              sx={{ fontWeight: '500' }}
            >
              {item?.subtitle}
            </Typography>
          )}{' '}
          {item?.reviewsStars && (
            <>
              <Rating
                value={item?.reviewsStars}
                readOnly
                sx={{ color: '#69be94', fontSize: '0.875rem' }}
              />{' '}
              <span style={{ fontSize: '0.875rem' }}>
                {item?.reviewsNumber} reviews
              </span>
            </>
          )}
        </Typography>
      </CardContent>
    </StyledMuiCard>
  )
}
