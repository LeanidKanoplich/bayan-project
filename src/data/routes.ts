import { Accordion } from '../types';

export const routesArr: Accordion[] = [
  {
    root_name: 'clients',
    childArr: [
      { root_name: 'add_client' },
      { root_name: 'view_clients' },
    ],
  },
  {
    root_name: 'warehouse',
    childArr: [
      { root_name: 'incoming' },
      { root_name: 'outgoing' },
    ],
  },
];
