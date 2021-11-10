import React from 'react'
import Image from 'next/image'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import { styled } from '@mui/material/styles'
import { nanoid } from 'nanoid'

import { Search } from './Search'
import { TabsNavigation } from './TabsNavigation'
import { Notification, useNotification } from '@components/Notification'
import { useI18nSelector } from '@contexts/i18n'
import airbnbLogo from '@public/airbnb.png'

const NavItem = styled('p')({
  marginRight: '1.5rem',
})

export function NavBar() {
  const [content, setContent] = React.useState('')
  const { open, handleOpen, handleClose } = useNotification()
  const { 
    NAVBAR_ITEMS_LIST,
    NAVBAR_NOTIFICATION_CONTENT,
    NAVBAR_SEARCH_PLACEHOLDER
  } = useI18nSelector(state => state.constants)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color='transparent' position='static'>
        <Toolbar>
          <Image src={airbnbLogo} alt='Airbnb Logo' width={35} height={35} />
          <Search 
            placeholder={NAVBAR_SEARCH_PLACEHOLDER}
            id='selectLang'
          />
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {NAVBAR_ITEMS_LIST.map((item) => (
              <NavItem
                key={nanoid()}
                onClick={handleOpen(() =>
                  setContent(NAVBAR_NOTIFICATION_CONTENT(item))
                )}
              >
                {item}
              </NavItem>
            ))}
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }} />
        </Toolbar>
        <TabsNavigation />
      </AppBar>
      <Notification open={open} onClose={handleClose} content={content} />
    </Box>
  )
}
