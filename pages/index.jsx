import React from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { nanoid } from 'nanoid'

import { Bloc } from '@components/Bloc'
import { Cards } from '@components/Cards/Cards'
import { Anchor } from '@components/Anchor/Anchor'
import { dataClassifier } from '@utils/dataClassifier'
import { getContentfulClient } from '@services/contentful'
import { useI18nSelector } from '@contexts/i18n'

export default function ForYou({ list }) {
  const { CLASSIFIER_TITLE_MAPPER } = useI18nSelector(state => state.constants)
  const data = dataClassifier(list.items, CLASSIFIER_TITLE_MAPPER)

  return (
    <Container sx={{ marginBottom: 3 }}>
      <Grid
        container
        direction='column'
        justifyContent='space-evenly'
        alignItems='stretch'
        spacing={{ md: 2 }}
      >
        {data?.map((item) => (
          <Grid item key={nanoid()}>
            <Bloc.Container>
              <Bloc.Title>{item.title}</Bloc.Title>
              <Bloc.Content>
                <Anchor /* linkProps={{ href: item?.to }} */ seeAll notify />
                <Cards.Container>
                  <Cards.List data={item.data} />
                </Cards.Container>
              </Bloc.Content>
            </Bloc.Container>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export const getStaticProps = async () => {
  const list = await getContentfulClient().getEntries()

  return {
    props: {
      list,
    },
  }
}
