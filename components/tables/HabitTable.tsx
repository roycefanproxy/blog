import React from 'react'
import GroupTable, {
  RenderExpandableCell,
  RenderCell,
  TableGroupColumn,
} from '@/components/GroupTable'

const data = [
  {
    law: '1st Law',
    description: 'Make it obvious',
    subRows: [
      {
        law: '1.1',
        description: (
          <span>
            Fill out the Habits Scorecard. Write down your current habits to become aware of them.
          </span>
        ),
      },
      {
        law: '1.2',
        description: (
          <span>
            Use implementation intentions: "I will [<b>BEHAVIOR</b>] at [<b>TIME</b>] in [
            <b>LOCATION</b>]."
          </span>
        ),
      },
      {
        law: '1.3',
        description: (
          <span>
            Use habit stacking: "After [<b>CURRENT HABIT</b>], I will [<b>NEW HABIT</b>]."
          </span>
        ),
      },
      {
        law: '1.4',
        description: (
          <span>Design your environment. Make the cues of good habits obvious and visible.</span>
        ),
      },
    ],
  },
  {
    law: '2nd Law',
    description: 'Make it attractive',
    subRows: [
      {
        law: '2.1',
        description: (
          <span>
            Use temptation bundling. Pair an action you want to do with an action you need to do.
          </span>
        ),
      },
      {
        law: '2.2',
        description: (
          <span>Join a culture where your desired behavior is the normal behavior.</span>
        ),
      },
      {
        law: '2.3',
        description: (
          <span>
            Create a motivation ritual. Do something you enjoy immediately before a difficult habit.
          </span>
        ),
      },
    ],
  },
  {
    law: '3rd Law',
    description: 'Make it easy',
    subRows: [
      {
        law: '3.1',
        description: (
          <span>
            Reduce friction. Decrease the number of steps between you and your good habits.
          </span>
        ),
      },
      {
        law: '3.2',
        description: (
          <span>
            Prime the environment. Prepare your environment to make future actions easier.
          </span>
        ),
      },
      {
        law: '3.3',
        description: (
          <span>
            Master the decisive moment. Optimize the small choices that deliver outsized impact.
          </span>
        ),
      },
      {
        law: '3.4',
        description: (
          <span>
            Use the Two-Minute Rule. Downscale your habits until they can be done in two minutes or
            less.
          </span>
        ),
      },
      {
        law: '3.5',
        description: (
          <span>
            Automate your habits. Invest in technology and onetime purchases that lock in future
            behavior.
          </span>
        ),
      },
    ],
  },
  {
    law: '4th Law',
    description: 'Make it satisfying',
    subRows: [
      {
        law: '4.1',
        description: (
          <span>
            Use reinforcement. Give yourself an immediate reward when you complete your habit.
          </span>
        ),
      },
      {
        law: '4.2',
        description: (
          <span>
            Make "doing nothing" enjoyable. When avoiding a bad habit, design a way to see the
            benefits.
          </span>
        ),
      },
      {
        law: '4.3',
        description: (
          <span>
            Use a habit tracker. Keep track of your habit streak and "don\'t break the chain."
          </span>
        ),
      },
      {
        law: '4.4',
        description: (
          <span>
            Never miss twice. When you forget to do a habit, make sure you get back on track
            immediately
          </span>
        ),
      },
    ],
  },
]

type Expandable = {
  row: {
    canExpand: boolean
    isExpanded: boolean
    getToggleRowExpandedProps: () => void
  }
}

const columns: TableGroupColumn<typeof data[number]>[] = [
  {
    id: 'habit-expander',
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
