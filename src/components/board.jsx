import React from 'react';
import "./board.css"

const Cell = (tile, x, y) =>{
    return (<div class="cell">{tile}</div>)
} 

function Board(props) {
    const gameBoard = document.getElementById("main-game")
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