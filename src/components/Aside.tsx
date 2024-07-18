import React from 'react';
import Accordion from './Accordion';
import { routesArr } from '../data/routes';

const Aside: React.FC = () => {
  return (
    <aside className="aside-menu">
      {routesArr.map((route, index) => (
        <Accordion key={index} item={route} path="" />
      ))}
    </aside>
  );
};

export default Aside;
