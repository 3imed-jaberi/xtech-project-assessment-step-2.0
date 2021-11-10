import React from 'react'

// hook to apply the DRY principle and make more easy 
// to reuse the logic behind the Notification component.
export function useNotification() {
  const [open, setOpen] = React.useState(false)

  const handleOpen = (cb) => () => {
    if (cb) cb()
    setOpen(true)
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return

    setOpen(false)
  }

  return { open, handleOpen, handleClose }
}
