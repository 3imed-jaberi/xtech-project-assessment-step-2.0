import React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import MuiSelect from '@mui/material/Select'
import { nanoid } from 'nanoid'

export function Select({ label, options, empty, ...props }) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <MuiSelect role="select-list" label={label} {...props}>
          {!empty && options?.map((op) => (
            <MenuItem key={nanoid()} value={op}>
              {op}
            </MenuItem>
          ))}
        </MuiSelect>
      </FormControl>
    </Box>
  )
}
