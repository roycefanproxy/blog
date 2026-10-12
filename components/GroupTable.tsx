'use client'

import React from 'react'
import { useTable, Column, useExpanded, Hooks, CellProps } from 'react-table'

const ChevronIcon = ({ up }: { up: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    className="h-3 w-3"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d={up ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}
    />
  </svg>
)

type TableGroupColumn<Data extends Record<string, unknown>> = Column<Data> & { className?: string }

interface TableGroupProps<Data extends Record<string, unknown>> {
  data: Data[]
  columns: readonly TableGroupColumn<Data>[]
}

const GroupTable = <T extends Record<string, unknown>>({ data, columns }: TableGroupProps<T>) => {
  const { getTableProps, getTableBodyProps, rows, prepareRow } = useTable(
    { data, columns },
    useExpanded as (h: Hooks<T>) => void
  )

  return (
    <table {...getTableProps()} className="table-fixed break-words">
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()} key={i}>
              {row.cells.map((cell, j) => {
                return (
                  <td {...cell.getCellProps({ className: columns[j].className })} key={j}>
                    {cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

type Expandable = {
  row: {
    canExpand: boolean
    isExpanded: boolean
    getToggleRowExpandedProps: () => Record<string, unknown>
  }
}

type RenderCellProps<Data extends Record<string, unknown>> = CellProps<Data> & Expandable

const RenderCell = <Data extends Record<string, unknown>>({
  value,
  row: { canExpand },
}: RenderCellProps<Data>) => (canExpand ? <b>{value}</b> : value)

const RenderExpandableCell = <Data extends Record<string, unknown>>({
  row,
}: RenderCellProps<Data>) =>
  // Use the row.canExpand and row.getToggleRowExpandedProps prop getter
  // to build the toggle for expanding a row
  row.canExpand ? (
    <div {...row.getToggleRowExpandedProps()}>
      <ChevronIcon up={row.isExpanded} />
    </div>
  ) : null

export type { TableGroupColumn }

export { RenderExpandableCell, RenderCell }

export default GroupTable
