/* eslint-disable react/display-name */
import React from 'react'
import MuiAlert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'

const Alert = React.forwardRef((props, ref) => (
  <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />
))

export function Notification({ open, onClose, duration, content, type }) {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      open={open}
      autoHideDuration={duration || 3000}
      onClose={onClose}
    >
      <Alert onClose={onClose} severity={type || 'info'} sx={{ width: '100%' }}>
        {content}
      </Alert>
    </Snackbar>
  )
}

export * from './useNotification'
