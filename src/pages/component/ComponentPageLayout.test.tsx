import React from 'react';
import ComponentPageLayout from './ComponentPageLayout';
import { render, cleanup, screen } from '@testing-library/react';

afterEach(cleanup);

  test('Not renders with Outlet', () => {
    render(<ComponentPageLayout/>)
    const element =  screen.queryByText("Outlet1");
    expect(element).not.toBeInTheDocument();
  });