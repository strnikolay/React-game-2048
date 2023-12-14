import React from 'react'
import "./modal.css"
import one from "./one.svg"

export default function Modalhelp () {
  return (
    <div>
      <template data-help-modal-template>
        <div class="modal" data-modal role="dialog" aria-labelledby="helpModalTitle">
          <button aria-label="Close" class="modal-close-btn" data-modal-close>&times;</button>
          <header class="modal-header">
            <h2 id="helpModalTitle" class="modal-title">How To Play</h2>
          </header>
          <div class="modal-body">
            <div class="modal-section">
              <p>Объедините плитки с одинаковым значением в попытке создать плитку со значением 2048.</p>
              <p>Нажатие клавиш со стрелками или свайп по игровому полю переместит все плитки в направлении нажатой клавиши / свайпа. После того, как все плитки будут перемещены, в случайной пустой ячейке будет создана новая плитка со значением 2 или 4.</p>
              <p>Две плитки с одинаковым значанием образуют при столкновении, новую плитку с удвоенным значением.</p>
              <p>Игра заканчивается, когда у вас не остается способов переместить плитки.</p>
            </div>
            <div class="modal-section game-container">
              <img src={one}/>
          <div id="instruction-board" class="game-board"></div>
        </div>
        <div class="modal-section">
          <p><strong>Выжно:</strong> Каждый день создается новая игра, которая абсолютно одинакова для всех в мире. Заходите каждый день и делитесь своими результатами с друзьями, чтобы претендовать на звание лучшего игрока 2048 года.</p>
        </div>
      </div>
    </div>
  </template>
    </div>
  )
}
