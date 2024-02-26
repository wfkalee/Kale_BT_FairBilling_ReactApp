import React from 'react';
import DashboardPageLayout from './DashboardPageLayout';
import { render, cleanup, screen } from '@testing-library/react';

afterEach(cleanup);

test('renders with Outlet', () => {
    render(<DashboardPageLayout/>)
    const element =  screen.getByText("Outlet");
    expect(element).toBeInTheDocument();
  });

  test('Not renders with Dashboard Page Layout', () => {
    render(<DashboardPageLayout/>)
    const element =  screen.queryByText("Dashboard Page Layout");
    expect(element).not.toBeInTheDocument();
  });
  
 