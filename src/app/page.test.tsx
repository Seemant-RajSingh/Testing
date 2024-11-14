import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './GlobalRedux/store'; 
import Home from './page';

test('increments value when Increment button is clicked', async () => {

  render(
    <Provider store={store}>
      <Home />
    </Provider>
  );

 
  const incrementButton = screen.getByText(/Increment/i);


  const displayValue = screen.getByText(/Value: 0/i);

  expect(displayValue).toBeInTheDocument(); 


  fireEvent.click(incrementButton);


  await waitFor(() => {

    const updatedDisplayValue = screen.getByText(/Value: 1/i); 
    expect(updatedDisplayValue).toBeInTheDocument(); 
  });
});
