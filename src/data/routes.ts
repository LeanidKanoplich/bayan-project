import { Accordion } from '../types';

export const routesArr: Accordion[] = [
  {
    root_name: 'bayan1_level1',
    childArr: [
      { root_name: 'bayan1_level2_el1' },
      { root_name: 'bayan1_level2_el2' },
      { root_name: 'bayan1_level2_el3' },
    ],
  },
  {
    root_name: 'bayan2_level1',
    childArr: [
      { root_name: 'bayan2_level2_el1' },
      {
        root_name: 'bayan2_level2_el2',
        childArr: [
          { root_name: 'bayan2_level3_el1' },
          { root_name: 'bayan2_level3_el2' },
          { root_name: 'bayan2_level3_el3' },
        ],
      },
    ],
  },
];
