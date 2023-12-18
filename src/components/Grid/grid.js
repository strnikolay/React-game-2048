
const DEFAULT_GRID_SIZE = 4
const DEFAULT_CELL_SIZE = 20
const DEFAULT_CELL_GAP = 2

export default class Grid {
  #cells

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

  

  get cellsByColumn() {
    return this.cells.reduce((cellGrid, cell) => {
      cellGrid[cell.x] = cellGrid[cell.x] || []
      cellGrid[cell.x][cell.y] = cell
      return cellGrid
    }, [])
  }

  get cellsByRow() {
    return this.cells.reduce((cellGrid, cell) => {
      cellGrid[cell.y] = cellGrid[cell.y] || []
      cellGrid[cell.y][cell.x] = cell
      return cellGrid
    }, [])
  }

  get cells() {
    return this.#cells
  }

  get #emptyCells() {
    return this.cells.filter(cell => cell.tile == null)
  }

  randomEmptyCell() {
    const randomIndex = Math.floor(seededRandom() * this.#emptyCells.length)
    return this.#emptyCells[randomIndex]
  }

  moveTilesUp() {
    return this.#moveTiles(this.cellsByColumn)
  }

  moveTilesDown() {
    return this.#moveTiles(
      this.cellsByColumn.map(column => [...column].reverse())
    )
  }

  moveTilesLeft() {
    return this.#moveTiles(this.cellsByRow)
  }

  moveTilesRight() {
    return this.#moveTiles(this.cellsByRow.map(row => [...row].reverse()))
  }

  async #moveTiles(cells) {
    await Promise.all(
      cells.flatMap(group => {
        const promises = []
        for (let i = 1; i < group.length; i++) {
          const cell = group[i]
          if (cell.tile == null) continue
          let lastValidCell
          for (let j = i - 1; j >= 0; j--) {
            const moveToCell = group[j]
            if (!moveToCell.canAccept(cell.tile)) break
            lastValidCell = moveToCell
          }
          if (lastValidCell != null) {
            promises.push(cell.tile.waitForTransition())
            if (lastValidCell.tile != null) {
              lastValidCell.mergeTile = cell.tile
            } else {
              lastValidCell.tile = cell.tile
            }
            cell.tile = null
          }
        }
        return promises
      })
    )

    const additionalScore = this.cells.reduce((sum, cell) => {
      if (cell.mergeTile == null || cell.tile == null) return sum
      return sum + cell.mergeTile.value + cell.tile.value
    }, 0)

    this.cells.forEach(cell => cell.mergeTiles())
    return additionalScore
  }

  canMoveTilesAnyDirection() {
    return (
      this.canMoveTilesUp() ||
      this.canMoveTilesDown() ||
      this.canMoveTilesLeft() ||
      this.canMoveTilesRight()
    )
  }

  canMoveTilesUp() {
    return this.#canMoveTiles(this.cellsByColumn)
  }

  canMoveTilesDown() {
    return this.#canMoveTiles(
      this.cellsByColumn.map(column => [...column].reverse())
    )
  }

  canMoveTilesLeft() {
    return this.#canMoveTiles(this.cellsByRow)
  }

  canMoveTilesRight() {
    return this.#canMoveTiles(this.cellsByRow.map(row => [...row].reverse()))
  }

  #canMoveTiles(cells) {
    return cells.some(group => {
      return group.some((cell, index) => {
        if (index === 0) return false
        if (cell.tile == null) return false
        const moveToCell = group[index - 1]
        return moveToCell.canAccept(cell.tile)
      })
    })
  }
}
  