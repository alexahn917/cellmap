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
    {from: 1, to: 2},
    {from: 1, to: 3},
    {from: 2, to: 4},
    {from: 2, to: 5},
    {from: 2, to: 6},
    {from: 6, to: 7},
    {from: 3, to: 8},
    {from: 3, to: 9},
    {from: 9, to: 10},
  ]
};
