import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'; // Обновленный импорт
import Aside from './Aside';

test('renders Aside component', () => {
  const { getByText } = render(<Aside />);
  expect(getByText('clients')).toBeInTheDocument();
  expect(getByText('warehouse')).toBeInTheDocument();
});
