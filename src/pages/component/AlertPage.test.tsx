import React from 'react';
import AlertPage from './AlertPage';
import { render, cleanup, screen } from '@testing-library/react';

afterEach(cleanup);

test('renders with User Notification', () => {
    render(<AlertPage/>)
    const element =  screen.getByText("User Notification");
    expect(element).toBeInTheDocument();
  });

  test('Not renders with User Notification', () => {
    render(<AlertPage/>)
    const element =  screen.queryByText("User Notification_test");
    expect(element).not.toBeInTheDocument();
  });