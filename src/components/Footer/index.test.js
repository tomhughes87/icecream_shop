import React, { useEffect } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../../Application.tsx';
import userEvent from '@testing-library/user-event';
// import GeneratorFunc, { copyFunc2, checkLengthOfRandomWord } from './GeneratorFunc';



test('Footer component is in place', () => {
  render(<App />);
//   const temp = screen.getByRole('')
  const footersmallprint = document.getElementById('footerSmallPrint')
  expect(footersmallprint).toBeInTheDocument();
});