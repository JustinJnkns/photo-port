import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup)

describe('Nav component', () =>{
    // baseline
    it('renders', () => {
        render(<Nav />);
      })
  // snapshot test
  it('matches snapshot', () => {
    // assert value comparison
        const { asFragment } = render(<Nav />);
      
        expect(asFragment()).toMatchSnapshot();
      })
})

describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
    // Arrange
    const { getByLabelText } = render(<Nav />);

    expect(getByLabelText('camera')).toHaveTextContent('📸');
    // Assert  
    })
  })  
// verify that the text content is being inserted into <a> tags (links are visible to users)
  describe('links are visible', () => {
    it('inserts text into the links', () => {
            const { getByTestId } = render(<Nav />);
            expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
            expect(getByTestId('about')).toHaveTextContent('About me');
          });
  })