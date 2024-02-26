import React from 'react';
import FairBilling from './FairBilling';
import { render, cleanup, screen } from '@testing-library/react';

afterEach(cleanup);

  test('validate button text as Generate Fair Billing Report', () => {
    render(<FairBilling/>)
    const button = screen.getByText('Generate Fair Billing Report');
    expect(button).toBeInTheDocument();
  });

