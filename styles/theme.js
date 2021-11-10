import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// Create a theme instance.
const theme = createTheme({
  palette: {
    // here, I use the green color as primary and secondary.
    primary: {
      main: '#19857b',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  spacing: (value) => `${value / 2}rem`
})

export default theme
