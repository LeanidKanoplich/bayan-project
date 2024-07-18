import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // Обновленный импорт
import Accordion from './Accordion';
import { Accordion as AccordionType } from '../types';

const mockData: AccordionType = {
  root_name: 'root',
  childArr: [
    { root_name: 'child1' },
    { root_name: 'child2' },
  ],
};

test('renders Accordion component', () => {
  const { getByText } = render(<Accordion item={mockData} path="" />);
  expect(getByText('root')).toBeInTheDocument();
});

test('toggles Accordion component', () => {
  const { getByText, queryByText } = render(<Accordion item={mockData} path="" />);
  const rootElement = getByText('root');
  fireEvent.click(rootElement);
  expect(getByText('child1')).toBeInTheDocument();
  expect(getByText('child2')).toBeInTheDocument();
  fireEvent.click(rootElement);
  expect(queryByText('child1')).not.toBeInTheDocument();
  expect(queryByText('child2')).not.toBeInTheDocument();
});
