import React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import { nanoid } from 'nanoid'

export function SectionContent({ title, data }) {
  return (
    <List>
      <ListItem>
        <ListItemText
          primary={title}
          sx={{ marginBottom: '-0.75ch' }}
          primaryTypographyProps={{
            sx: {
              fontWeight: '600'
            }
          }}
        />
      </ListItem>
      {data?.map((item) => (
        <ListItem key={nanoid()}>
          <ListItemText primary={item} sx={{ marginBottom: '-2.25ch' }} />
        </ListItem>
      ))}
    </List>
  )
}
