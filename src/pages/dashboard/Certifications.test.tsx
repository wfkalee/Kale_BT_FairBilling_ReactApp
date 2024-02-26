import React from 'react';
import Certifications from '././Certifications';
import { render, cleanup, screen } from '@testing-library/react';

afterEach(cleanup);

test('renders with Certification Page', () => {
    render(<Certifications/>)
    const element =  screen.getByText("Certification Page");
    expect(element).toBeInTheDocument();
  });

  test('Not renders with Certification Page', () => {
    render(<Certifications/>)
    const element =  screen.queryByText("Certification");
    expect(element).not.toBeInTheDocument();
  });
  