import React from 'react';
import Login from './Login';
import { render, cleanup, screen } from '@testing-library/react';

afterEach(cleanup);

test('renders with Login Page', () => {
    render(<Login/>)
    const element =  screen.getByText("Login Page");
    expect(element).toBeInTheDocument();
  });

  test('Not renders with Login Page', () => {
    render(<Login/>)
    const element =  screen.queryByText("Login Pages");
    expect(element).not.toBeInTheDocument();
  });