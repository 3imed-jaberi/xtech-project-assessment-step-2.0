/* eslint-disable react/display-name */
import React from 'react'
import styled from '@mui/material/styles/styled'

import { Card } from './Card'

const Container = styled('div')({
  display: 'flex',
  justifyContent: 'flex-start',
})

export const Cards = {}

Cards.Container = Container

Cards.Item = Card

Cards.List = ({ data }) =>
  data?.map((item) => <Cards.Item key={item.id} item={item} />)
