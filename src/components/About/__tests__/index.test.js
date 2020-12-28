// needed to enable the components to function properly so they can be tested
import React from 'react'
// retrieve functions from react testing library
import {render, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import About from '..'
// This will ensure that after each test, we won't have any leftover memory data that could give us false results.
afterEach(cleanup)

describe('About component', () => {
    it('renders', () => {
      render(<About />);
    });
    
    it('matches snapshot DOM node structure', () => {
      const { asFragment } = render(<About />);
      
      expect(asFragment()).toMatchSnapshot();
    });
  })
  