import React from 'react'
import GroupTable, {
  RenderCell,
  RenderExpandableCell,
  TableGroupColumn,
} from '@/components/GroupTable'

const data = [
  {
    law: 'Inversion of 1st Law',
    description: 'Make it invisible',
    subRows: [
      {
        law: '1.5',
        description: 'Reduce exposure. Remove the cues of your bad habits from your environment',
      },
    ],
  },
  {
    law: 'Inversion of 2nd Law',
    description: 'Make it unattractive',
    subRows: [
      {
        law: '2.4',
        description: 'Reframe your mindset. Highlight the benefits of avoiding your bad habits.',
      },
    ],
  },
  {
    law: 'Inversion of 3rd Law',
    description: 'Make it difficult',
    subRows: [
      {
        law: '3.6',
        description:
          'Increase friction. Increase the number of steps between you and your bad habits.',
      },
      {
        law: '3.7',
        description:
          'Use a commitment device. Restrict your future choices to the ones that benefit you.',
      },
    ],
  },
  {
    law: 'Inversion of 4th Law',
    description: 'Make it Unsatisfying',
    subRows: [
      {
        law: '4.5',
        description: 'Get an accountability partner. Ask someone to watch your behaviour.',
      },
      {
        law: '4.6',
        description:
          'Create a habit contract. Make the costs of your bad habits public and painful.',
      },
    ],
  },
]

const columns: TableGroupColumn<typeof data[number]>[] = [
  {
    id: 'inverse-habit-expander',
    Cell: RenderExpandableCell,
    className: 'w-1/12',
  },
  {
    accessor: 'law',
    Cell: RenderCell,
    className: 'w-1/4',
  },
  {
    accessor: 'description',
    Cell: RenderCell,
    className: 'w-8/12',
  },
]

const HabitTable = () => <GroupTable data={data} columns={columns} />

export default HabitTable
