import React from 'react'
import { styled, alpha } from '@mui/material/styles'
import OutlinedInput from '@mui/material/OutlinedInput'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'

const MuiSearch = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  color: 'grey',
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledOutlinedInput = styled(OutlinedInput)(({ theme }) => ({
  color: 'inherit',
  '& .MuiOutlinedInput-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}))

export function Search(props) {
  return (
    <MuiSearch>
      <SearchIconWrapper>
        <SearchOutlinedIcon />
      </SearchIconWrapper>
      <StyledOutlinedInput
        inputProps={{ 'aria-label': 'search' }}
        {...props}
      />
    </MuiSearch>
  )
}
