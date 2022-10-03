import React, { useEffect } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../../Application.tsx';
import userEvent from '@testing-library/user-event';




test('Span imge component is in place', () => {
  render(<App />);
//   const temp = screen.getByRole('')
  const spanContainer = document.getElementById('SpanImageContainer')
  expect(spanContainer).toBeInTheDocument();
});



// jest --coverage --collectCoverageFrom=src/**/*.{ts,tsx}
