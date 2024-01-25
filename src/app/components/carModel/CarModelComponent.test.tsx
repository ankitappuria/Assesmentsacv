import React from 'react';
import { render, screen } from '@testing-library/react';
import CarModelComponent from './CarModelComponent';

test('renders learn react link', () => {
  render(<CarModelComponent />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
