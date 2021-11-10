/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import { Bloc } from './Bloc'

describe('Bloc', () => {
  describe('Bloc.Container', () => {
    it('should render correctly on the screen', () => {
      render(<Bloc.Container>Hello World !</Bloc.Container>)
  
      const element = screen.getByText(/World/)
  
      expect(element).toBeInTheDocument()
    })

    it('should render correctly when we pass prop', () => {
      render(
        <Bloc.Container 
          style={{ backgroundColor: 'red' }}
          data-testid="container"
        >
          Hello World !
        </Bloc.Container>
      )
  
      const container = screen.getByTestId('container');

      const style = window.getComputedStyle(container)
  
      expect(style.backgroundColor).toBe('red')
    })
  })

  describe('Bloc.Title', () => {
    it('should render correctly on the screen', () => {
      render(<Bloc.Title>Hello World !</Bloc.Title>)
  
      const element = screen.getByText(/World/)
  
      expect(element).toBeInTheDocument()
    })
  })
  

})
