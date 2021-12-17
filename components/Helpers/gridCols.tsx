/* eslint-disable react/prop-types */
import React from 'react'
import PropTypes from 'prop-types'
GridCols.propTypes = {
  columns: PropTypes.number,
  gap: PropTypes.number,
}

function GridCols({ columns, gap }) {
  const columnClass = 'w-full grid grid-cols-' + columns + ' gap-' + gap
  const makeColumn = () => {
    for (let i = 1; i === columns; i++)
      return (
        <div className='col-span-1 bg-peach rounded-sm py-2 text-center w-full'>Column {i}</div>
      )
  }

  return <div className={columnClass}>{makeColumn}</div>
}

export default GridCols
