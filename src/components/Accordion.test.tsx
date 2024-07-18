// src/components/Accordion.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Accordion from './Accordion';
import { Accordion as AccordionType } from '../types';

const mockData: AccordionType = {
  root_name: 'root',
  childArr: [
    { root_name: 'child1' },
    { root_name: 'child2' },
    {
      root_name: 'child3',
      childArr: [
        { root_name: 'grandchild1' },
        { root_name: 'grandchild2' },
      ],
    },
  ],
};

test('renders Accordion component', () => {
  const { getByText } = render(<Accordion item={mockData} path="" />);
  const rootElement = getByText(/root/i);
  expect(rootElement).toBeInTheDocument();
});

test('toggles children visibility on button click', () => {
  const { getByText, queryByText } = render(<Accordion item={mockData} path="" />);
  const rootButton = getByText(/root/i);

  // Initially, children should not be visible
  expect(queryByText(/child1/i)).toBeNull();
  expect(queryByText(/child2/i)).toBeNull();

  // Click to show children
  fireEvent.click(rootButton);
  expect(getByText(/child1/i)).toBeInTheDocument();
  expect(getByText(/child2/i)).toBeInTheDocument();

  // Click to hide children
  fireEvent.click(rootButton);
  expect(queryByText(/child1/i)).toBeNull();
  expect(queryByText(/child2/i)).toBeNull();
});
