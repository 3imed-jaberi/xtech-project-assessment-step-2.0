/* eslint-disable react/display-name */
import React from 'react'
import Paper from '@mui/material/Paper'

export const Bloc = {}

Bloc.Container = (props) => <Paper elevation={0} {...props} />

Bloc.Title = (props) => <h2 {...props} />

Bloc.Content = React.Fragment
