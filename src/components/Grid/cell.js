
export default class Cell {
    #tile
    #mergeTile
    constructor(cell, x, y) {
      this.cell = cell
      this.x = x
      this.y = y
    }
  
    get tile() {
      return this.#tile
    }
  
    set tile(value) {
      this.#tile = value
      if (value == null) return
      this.#tile.x = this.x
      this.#tile.y = this.y
    }
  
    get mergeTile() {
      return this.#mergeTile
    }
  
    set mergeTile(value) {
      this.#mergeTile = value
      if (value == null) return
      this.#mergeTile.x = this.x
      this.#mergeTile.y = this.y
    }
  
    canAccept(tile) {
      return (
        this.tile == null ||
        (this.mergeTile == null && this.tile.value === tile.value)
      )
    }
  
    mergeTiles() {
      if (this.tile == null || this.mergeTile == null) return 0
      this.tile.value = this.tile.value + this.mergeTile.value
      this.mergeTile.remove()
      this.mergeTile = null
      this.tile.pop()
      return this.tile.value
    }
  }