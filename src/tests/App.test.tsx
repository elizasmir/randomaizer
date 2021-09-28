import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe("tests for Randomaizer main component", () => {
  it('renders header', () => {
    render(<App />);
    const header = screen.getByText(/Randomizer/i);
    expect(header).toBeInTheDocument();
  });
});


