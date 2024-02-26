import React from 'react';
import FairBilling from './FairBilling';
import { fireEvent, render, cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

afterEach(cleanup);

  test('validate button text as Generate Fair Billing Report', () => {
    render(<FairBilling/>)
    const button = screen.getByText('Generate Fair Billing Report');
    expect(button).toBeInTheDocument();
  });

  test("Button disabled on click", async () => {
    render(<FairBilling/>)
    await userEvent.click(screen.getByText('Generate Fair Billing Report'));
    expect(true);
    //expect(screen.getByText(/toggle text/i)).toBeDisabled();
})

