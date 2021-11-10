import React from 'react'

import { WelcomeToPage } from '@components/WelcomeToPage'
import { useI18nSelector } from '@contexts/i18n'

export default function Experiences() {
  const { PAGE_WELCOME } = useI18nSelector(state => state.constants)
  return <WelcomeToPage>{PAGE_WELCOME.EXPERIENCES}</WelcomeToPage>
}
