import React from 'react';
import Courses from './Courses';
import { render, cleanup, screen } from '@testing-library/react';

afterEach(cleanup);

test('renders with CoursePage', () => {
    render(<Courses/>)
    const element =  screen.getByText("CoursePage");
    expect(element).toBeInTheDocument();
  });

  test('Not renders with CoursePage', () => {
    render(<Courses/>)
    const element =  screen.queryByText("CoursePage1");
    expect(element).not.toBeInTheDocument();
  });
  
 