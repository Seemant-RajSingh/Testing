import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '@/app/GlobalRedux/store'; 
import Home from '@/app/page';
import { setStatus } from '@/app/GlobalRedux/Features/User/userSlice'; 

test('Inc by 11 button is only clickable when status is ADMIN', async () => {
  render(
    <Provider store={store}>
      <Home />
    </Provider>
  );

  const incBy11Button = screen.getByText(/Inc by 11/i); 
  const statusButton = screen.getByText(/Value:/i); 

  expect(incBy11Button).toBeDisabled(); 

  await act(async () => {
    store.dispatch(setStatus("ADMIN"));
  });

  await waitFor(() => {
    expect(incBy11Button).not.toBeDisabled(); 
  });

  const displayValue = screen.getByText(/Value:/i);
  const initialValue = parseInt(displayValue.textContent?.split(": ")[1] || "0");

  fireEvent.click(incBy11Button);

  await waitFor(() => {
    const updatedDisplayValue = screen.getByText(/Value:/i);
    const updatedValue = parseInt(updatedDisplayValue.textContent?.split(": ")[1] || "0");
    expect(updatedValue).toBe(initialValue + 11); 
  });

  // Changing status back to GUEST, wrapped in act()
  await act(async () => {
    store.dispatch(setStatus("GUEST"));
  });

  await waitFor(() => {
    expect(incBy11Button).toBeDisabled(); 
  });
});
