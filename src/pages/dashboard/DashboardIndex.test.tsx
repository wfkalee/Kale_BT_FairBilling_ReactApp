import React from 'react';
import DashboardIndex from './DashboardIndex';
import { render, cleanup, screen } from '@testing-library/react';

afterEach(cleanup);

test('renders with Dashboard Index Page', () => {
    render(<DashboardIndex/>)
    const element =  screen.getByText("Dashboard Index Page");
    expect(element).toBeInTheDocument();
  });

  test('Not renders with Dashboard Index Page', () => {
    render(<DashboardIndex/>)
    const element =  screen.queryByText("Dashboard Index Page1");
    expect(element).not.toBeInTheDocument();
  });
  
 