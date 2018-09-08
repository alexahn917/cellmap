export const mockGraph = {
  nodes: [
    {id: 1, label: 'Stem Cell'},
    {id: 2, label: 'Myeloid Progenitor'},
    {id: 3, label: 'Lymphoid Progenitor'},
    {id: 4, label: 'Megacamocyte'},
    {id: 5, label: 'Mast Cell'},
    {id: 6, label: 'Myeloblast'},
    {id: 7, label: 'Macrophage'},
    {id: 8, label: 'Natvral Killer Cell'},
    {id: 9, label: 'Lymphocyte'},
    {id: 10, label: 'Plasma Cell'},
  ],
  edges: [
    {id: 1, from: 1, to: 2, label: 'edge 1'},
    {id: 2, from: 1, to: 3, label: 'edge 2'},
    {id: 3, from: 2, to: 4, label: 'edge 3'},
    {id: 4, from: 2, to: 5, label: 'edge 4'},
    {id: 5, from: 2, to: 6, label: 'edge 5'},
    {id: 6, from: 6, to: 7, label: 'edge 6'},
    {id: 7, from: 3, to: 8, label: 'edge 7'},
    {id: 8, from: 3, to: 9, label: 'edge 8'},
    {id: 9, from: 9, to: 10, label: 'edge 9'},
  ]
};
