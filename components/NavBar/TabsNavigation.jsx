import React from 'react'
import { useRouter } from 'next/router'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import { nanoid } from 'nanoid'

import { useI18nSelector } from '@contexts/i18n'

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

export function TabsNavigation() {
  const [value, setValue] = React.useState(0)
  const router = useRouter()
  const { NAVBAR_TABS_NAVIGATION_CONFIG } = useI18nSelector(state => state.constants)

  const handleChange = (event, newValue) => {
    // I add an attribute to extract the corret path.
    const url = event.target.attributes.to.value
    router.push(url)
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          indicatorColor='secondary'
          textColor='secondary'
          value={value}
          onChange={handleChange}
          aria-label='tabs navigation'
        >
          {NAVBAR_TABS_NAVIGATION_CONFIG?.map((props, index) => (
            <Tab key={nanoid()} {...props} {...a11yProps(index)} />
          ))}
        </Tabs>
      </Box>
    </Box>
  )
}
