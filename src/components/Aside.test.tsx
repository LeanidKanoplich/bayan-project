// src/components/Aside.test.tsx
import React from 'react';
import { render } from '@testing-library/react';
import Aside from './Aside';
import { routesArr } from '../data/routes';

test('renders Aside component with routes', () => {
  const { getByText } = render(<Aside />);
  routesArr.forEach(route => {
    const element = getByText(new RegExp(route.root_name, 'i'));
    expect(element).toBeInTheDocument();
  });
});
