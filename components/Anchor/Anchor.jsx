import React from 'react'
// import Link from 'next/link'
import MuiArrowForwardIcon from '@mui/icons-material/ArrowForwardIosOutlined'
import styled from '@mui/material/styles/styled'

import { Notification, useNotification } from '@components/Notification'
import { useI18nSelector } from '@contexts/i18n'

const StyledAnchor = styled('a')({
  display: 'flex',
  direction: 'row',
  justifyContent: 'flex-end',
})

const ArrowForwardIcon = styled(MuiArrowForwardIcon)({
  fontSize: '17px',
  marginTop: '3px',
})

export function Anchor({ seeAll, /* linkProps, */ children }) {
  const { open, handleOpen, handleClose } = useNotification()
  const { ANCHOR_SEE_ALL, ANCHOR_NOTIFICATION_CONTENT } = useI18nSelector(state => state.constants)

  return (
    <>
      {/* <Link passHref {...linkProps}> */}
      <StyledAnchor onClick={handleOpen()}>
        {seeAll && (
          <>
            {ANCHOR_SEE_ALL} <ArrowForwardIcon />
          </>
        )}
        {children}
      </StyledAnchor>
      {/* </Link> */}
      <Notification
        open={open}
        onClose={handleClose}
        type='success'
        content={ANCHOR_NOTIFICATION_CONTENT}
      />
    </>
  )
}
