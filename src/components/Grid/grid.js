import React from "react"
import Cell from "./cell"
const DEFAULT_GRID_SIZE = 4
const DEFAULT_CELL_SIZE = 20
const DEFAULT_CELL_GAP = 2

const Grid = () => {
  const [cells, setSells] = React.useState([])

  const gridSize = DEFAULT_GRID_SIZE
  const createCellElements = () => {
    const cells = []
    for (let i = 0; i < gridSize * gridSize; i++) {
      cells.push(<div className="cell"></div>)
    }
    setSells(cells)
  }

  return (
    <>
      {cells.map((cell, index) => {
        <Cell 
          x={index % gridSize}
          y ={Math.floor(index / gridSize)}
        />
      }) 

      }
    </>
  )
}

export default Grid;
