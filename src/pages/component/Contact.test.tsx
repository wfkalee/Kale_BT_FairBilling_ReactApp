import React from 'react';
import Contact from './Contact';
import { render, cleanup, screen } from '@testing-library/react';

afterEach(cleanup);

test('renders with Contact Page', () => {
    render(<Contact/>)
    const element =  screen.getByText("Contact Page");
    expect(element).toBeInTheDocument();
  });

  test('Not renders with Contact Page', () => {
    render(<Contact/>)
    const element =  screen.queryByText("Contact Page1");
    expect(element).not.toBeInTheDocument();
  });