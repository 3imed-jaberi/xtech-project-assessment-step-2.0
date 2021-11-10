/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import { Select } from './Select'

describe('Select', () => {
  it('should render correctly on the screen', () => {
    render(<Select label="languages" options={['fr', 'en']} />)

    // make sure the select is rendered 
    const listElement = screen.getByRole('select-list')
    expect(listElement.childElementCount > 0).toBeTruthy()
  })
})
