import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './GlobalRedux/store'; 
import Home from './page';

test('increments value by 1 when Increment button is clicked', async () => {

  render(
    <Provider store={store}>
      <Home />
    </Provider>
  );

 
  const incrementButton = screen.getByText(/Increment/i);


  const displayValue = screen.getByText(/Value:/i); 

  
  const initialValue = parseInt(displayValue.textContent?.split(": ")[1] || "0"); 

  expect(displayValue).toBeInTheDocument();

  
  fireEvent.click(incrementButton);

  await waitFor(() => {
    
    const updatedDisplayValue = screen.getByText(/Value:/i); 
    expect(updatedDisplayValue).toBeInTheDocument();

    const updatedValue = parseInt(updatedDisplayValue.textContent?.split(": ")[1] || "0");
    expect(updatedValue).toBe(initialValue + 1); 
  });
});
