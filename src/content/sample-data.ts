/* sample-data.js */
import React from 'react';

function createKey(input: string): string {
  return input ? input.replace(/^(the|a|an)/, '').replace(/\s/g, '') : input;
}

export const createHead = (withWidth: boolean) => {
  return {
    cells: [
      {
        key: 'title',
        content: 'Title',
        shouldTruncate: true,
        isSortable: true,
        width: withWidth ? 15 : undefined,
      },
    ],
  };
};

export const head = createHead(true);

const records = [
  {
    Title: 'foo',
  },
  {
    Title: 'bar',
  }
];

export const rows = records.map((record, index) => ({
  key: `row-${index}`,
  cells: [
    {
      key: createKey('index'),
      content: record.Title,
    }
  ],
}));
