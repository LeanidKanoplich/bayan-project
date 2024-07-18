import React, { useState, useEffect } from 'react';
import { Accordion as AccordionType } from '../types';
import { NavLink } from 'react-router-dom';

type AccordionProps = {
  item: AccordionType;
  path: string;
};

const Accordion: React.FC<AccordionProps> = ({ item, path }) => {
  const fullPath = `${path}/${item.root_name.replace(/ /g, '-').toLowerCase()}`;
  const savedState = JSON.parse(localStorage.getItem('accordionState') || '{}');
  const [isOpen, setIsOpen] = useState(savedState[fullPath] || false);

  useEffect(() => {
    const state = JSON.parse(localStorage.getItem('accordionState') || '{}');
    state[fullPath] = isOpen;
    localStorage.setItem('accordionState', JSON.stringify(state));
  }, [isOpen, fullPath]);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
      <button onClick={toggleOpen} className="accordion-button">
        {item.root_name}
      </button>
      {isOpen && (
        <div className="accordion-children">
          {item.childArr ? (
            item.childArr.map((child: AccordionType, index: number) => (
              <Accordion key={index} item={child} path={fullPath} />
            ))
          ) : (
            <NavLink to={fullPath} activeClassName="active-link">
              Go to {item.root_name}
            </NavLink>
          )}
        </div>
      )}
    </div>
  );
};

export default Accordion;
