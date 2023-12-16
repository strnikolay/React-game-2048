
export default class Grid {
  
  constructor(
    gridElem,
    {
      gridSize = DEFAULT_GRID_SIZE,
      cellSize = DEFAULT_CELL_SIZE,
      cellGap = DEFAULT_CELL_GAP,
    } = {}
  ) {
    gridElem.innerHTML = ""
    gridElem.style.setProperty("--grid-size", gridSize)
    gridElem.style.setProperty("--cell-size", `${cellSize}vmin`)
    gridElem.style.setProperty("--cell-gap", `${cellGap}vmin`)
    this.#cells = createCellElements(gridElem, gridSize).map((cell, index) => {
      return new Cell(cell, index % gridSize, Math.floor(index / gridSize))
    })
  }
  
    get colCells() {

    }
  
    get rowCells() {

    }
  
    get cells() {
      return this.#cells
    }
  
}
  