import React, { useEffect } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../../Application.tsx';
import userEvent from '@testing-library/user-event';
// import GeneratorFunc, { copyFunc2, checkLengthOfRandomWord } from './GeneratorFunc';



test('The complete random name gen is on the page', () => {
  render(<App />);
//   const temp = screen.getByRole('')
  const footersmallprint = document.getElementById('footerSmallPrint')
  console.log('testing is runnnnnnnnnnnnnnnnning')
  expect(footersmallprint).toBeInTheDocument();
// expect()
});