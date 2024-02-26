import React from 'react';
import App from './App';
import { render, cleanup, screen } from '@testing-library/react';

afterEach(cleanup);

  test('Not renders with App Page', () => {
    render(<App/>)
    const element =  screen.queryByText("AppPage");
    expect(element).not.toBeInTheDocument();
  });
  