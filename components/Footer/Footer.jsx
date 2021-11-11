import React from 'react'
import Image from 'next/image'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { nanoid } from 'nanoid'

import { Select } from '@components/Select'
import { SectionContent } from './SectionContent'
import { SocialMediaIcons } from './SocialMediaIcons'
import airbnbIcon from '@public/airbnb-icon.png'

import {
  useI18nDispatch, 
  useI18nSelector,
  usingFrenshAsLangAction,
  usingEnglishAsLangAction,
} from '@contexts/i18n'

export function Footer() {
  const [localLang, setLocalLang] = React.useState('')
  const dispatch = useI18nDispatch()
  const {
    FOOTER_INC,
    FOOTER_SECTIONS,
    FOOTER_SELECT_INR_LABEL,
    FOOTER_SELECT_LANG_LABEL,
    FOOTER_TERMS,
    SELECT_LANG_OPTIONS
  } = useI18nSelector(state => state.constants)

  React.useEffect(() => {
    setLocalLang(SELECT_LANG_OPTIONS[1])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleChange = (event) => {
    const selectedValue = event.target.value
    console.log({ selectedValue });
    // sync the ui.
    setLocalLang(selectedValue)

    // pick the correct action
    // TODO: improve this behave.
    const langAction = selectedValue.toLowerCase().startsWith('fr') 
      ? usingFrenshAsLangAction
      : usingEnglishAsLangAction

    dispatch(langAction())
  }

  return (
    <React.Fragment>
      <Divider variant='middle' />
      <Container>
        <Grid container spacing={3} sx={{ marginTop: '0.25rem' }}>
          <Grid item xs={3}>
            <br />
            <Select 
              label={FOOTER_SELECT_LANG_LABEL}
              options={SELECT_LANG_OPTIONS}
              value={localLang}
              onChange={handleChange}
            />
            <br />
            {/* I don't know what's INR so I keep it a empty select */}
            <Select label={FOOTER_SELECT_INR_LABEL} empty />
            <br />
          </Grid>
          {Object.keys(FOOTER_SECTIONS).map((key) => {
            const { MODULE, SUBMODULE } = FOOTER_SECTIONS[key]
            return (
              <Grid key={nanoid()} item xs={3}>
                <SectionContent title={MODULE} data={SUBMODULE} />
              </Grid>
            )
          })}
        </Grid>
        <br />
        <Divider variant='middle' />
        <Grid container spacing={3} sx={{ marginTop: '0.25rem' }}>
          <Grid item xs={4}>
            <Typography
              sx={{ marginLeft: '2.25rem' }}
              variant='body2'
              color='text.secondary'
              align='left'
            >
              <Image
                src={airbnbIcon}
                alt='Airbnb Icon'
                width={20}
                height={20}
              />{' '}
              {FOOTER_INC}
            </Typography>
          </Grid>
          <Grid item xs={2} />
          <Grid item xs={6}>
            <Typography variant='body2' color='text.secondary' align='right'>
              {FOOTER_TERMS} <SocialMediaIcons />
            </Typography>
          </Grid>
        </Grid>
        <br />
      </Container>
    </React.Fragment>
  )
}
