import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFoundComponent from './NotFoundComponent';

test('renders not found component', () => {
  render(<NotFoundComponent />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
     const divElement= screen.getByText(/No Page Found/i);
     expect(divElement).toBeInTheDocument();
});
