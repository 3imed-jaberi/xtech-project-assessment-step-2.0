/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
// TODO: termine all knobs.
import { text  } from '@storybook/addon-knobs'

import { Select } from './Select'

export default {
  title: 'Components/Select',
  component: Select,
}

const Template = () => (
  <Select
    label={text('label', 'Select Label')}
    options={['Man', 'Girl']}
  />
);

export const Default = Template.bind({});
