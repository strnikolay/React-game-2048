function createCellElements(gridElem, gridSize) {
    const cells = []
    for (let i = 0; i < gridSize * gridSize; i++) {
      const cell = document.createElement("div")
      cells.push(cell)
      cell.classList.add("cell")
      gridElem.append(cell)
    }
    return cells
}