/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Search } from './Search'

describe('Select', () => {
  let mockedSetQuery

  beforeEach(() => {
    mockedSetQuery = jest.fn()
  })

  it('should render correctly on the screen', () => {
    render(
      <Search
        placeholder='Anywhere'
        onChange={(event) => mockedSetQuery(event)}
      />
    )

    const searchElement = screen.getByPlaceholderText(/Anywhere/i)
    expect(searchElement).toBeInTheDocument()
  })

  it('should render correctly on the screen', () => {
    render(
      <Search
        placeholder='Anywhere'
        onChange={(event) => mockedSetQuery(event)}
      />
    )

    const searchElement = screen.getByPlaceholderText(/Anywhere/i)

    fireEvent.click(searchElement)
    fireEvent.change(searchElement, {
      target: {
        value: 'Tunis',
      },
    })

    expect(searchElement.value).toBe('Tunis')
    expect(mockedSetQuery).toBeCalled()
  })
})
