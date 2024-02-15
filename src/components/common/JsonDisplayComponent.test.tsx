import React from 'react';
import { render, screen } from '@testing-library/react';
import JsonDisplayComponent from './JsonDisplayComponent';

test('renders not found component', () => {
    const { container } = render(<JsonDisplayComponent inputJson={[{ "name": "Ankita" }]} />);
    expect(container.firstChild).toHaveClass('json-container');
});
