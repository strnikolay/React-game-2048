import React from 'react';
import "./board.css"

const Cell = (tile, x, y) =>{
    return (<div class="cell">{tile}</div>)
} 

const board = [
    {x:1, y:1, tile: null},
    {x:1, y:1, tile: null},
    {x:1, y:1, tile: null},
    {x:1, y:1, tile: null},
    {x:1, y:1, tile: null},
    {x:1, y:1, tile: null},
    {x:1, y:1, tile: null},
    {x:1, y:1, tile: null},
    {x:1, y:1, tile: null},
    {x:1, y:1, tile: null},
    {x:1, y:1, tile: null},
    {x:1, y:1, tile: null},
    {x:1, y:1, tile: null},
    {x:1, y:1, tile: null},
    {x:1, y:1, tile: null},
    {x:1, y:1, tile: null}
] 

const DEFAULT_GRID_SIZE = 4
const DEFAULT_CELL_SIZE = 20
const DEFAULT_CELL_GAP = 2

function Board(props) {
    const gameBoard = document.getElementById("main-game")
    
    return (
        <main id="main-game" class="game-board">
            <Cell/>
            <Cell/>
            <Cell/>
            <Cell/>
            <Cell/>
            <Cell/>
            <Cell/>
            <Cell/>
            <Cell/>
            <Cell/>
            <Cell/>
            <Cell/>
            <Cell/>
            <Cell/>
            <Cell/>
            <Cell/>
        </main>
    );
}

export default Board;