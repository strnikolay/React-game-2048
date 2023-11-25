import React from 'react'

export default function 
() {
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
          <p>Combine tiles of the same number in an attempt to create a tile with the value 2048.</p>
          <p>Pressing the arrow keys or swiping across the game board will move all tiles in the direction of the key pressed/swipe. After all the tiles are done moving a new tile with the value of 2 or 4 will be created in a random empty cell.</p>
          <p>Two tiles with the same number will merge when they collide to create a single tile with double the value.</p>
          <p>The game is over when there are no valid ways for you to move the tiles.</p>
        </div>
        <div class="modal-section game-container">
          <svg class="arrow-keys" data-arrow-keys xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 178 752 356">
            <g>
             <path class="arrow-left" d="m293.72 485.37h-99.562c-4.8242 0-8.7344-3.9102-8.7344-8.7344v-99.562c0-4.8242 3.9102-8.7344 8.7344-8.7344h99.562c4.8242 0 8.7344 3.9102 8.7344 8.7344v99.562c0 4.8242-3.9102 8.7344-8.7344 8.7344zm-90.828-17.469h82.094v-82.094h-82.094z"/>
             <path class="arrow-down" d="m426.48 485.37h-99.562c-4.8242 0-8.7344-3.9102-8.7344-8.7344v-99.562c0-4.8242 3.9102-8.7344 8.7344-8.7344h99.562c4.8242 0 8.7344 3.9102 8.7344 8.7344v99.562c-0.003907 4.8242-3.9102 8.7344-8.7344 8.7344zm-90.832-17.469h82.094v-82.094h-82.094z"/>
             <path class="arrow-up" d="m426.48 352.62h-99.562c-4.8242 0-8.7344-3.9102-8.7344-8.7344v-99.562c0-4.8242 3.9102-8.7344 8.7344-8.7344h99.562c4.8242 0 8.7344 3.9102 8.7344 8.7344v99.562c-0.003907 4.8242-3.9102 8.7344-8.7344 8.7344zm-90.832-17.469h82.094v-82.094h-82.094z"/>
             <path class="arrow-right" d="m559.21 485.37h-99.562c-4.8242 0-8.7344-3.9102-8.7344-8.7344v-99.562c0-4.8242 3.9102-8.7344 8.7344-8.7344h99.562c4.8242 0 8.7344 3.9102 8.7344 8.7344v99.562c0 4.8242-3.9102 8.7344-8.7344 8.7344zm-90.828-17.469h82.094v-82.094h-82.094z"/>
             <path class="arrow-up" d="m360.1 302.85c-2.2344 0-4.4688-0.85156-6.1719-2.5547-3.4141-3.4102-3.4141-8.9375-0.007812-12.352l16.586-16.602c1.6367-1.6406 3.8594-2.5625 6.1758-2.5625h0.003906c2.3164 0 4.5352 0.92188 6.1758 2.5586l16.582 16.582c3.4102 3.4102 3.4102 8.9414 0 12.352-3.4102 3.4102-8.9414 3.4102-12.352 0l-10.402-10.402-10.41 10.422c-1.7031 1.7031-3.9414 2.5586-6.1797 2.5586z"/>
             <path class="arrow-down" d="m376.7 452.17c-2.2305 0-4.4609-0.85156-6.168-2.5508l-16.613-16.574c-3.4141-3.4062-3.4219-8.9336-0.015624-12.352 3.4062-3.4141 8.9336-3.4219 12.352-0.015624l10.445 10.418 10.426-10.414c3.4141-3.4102 8.9414-3.4062 12.352 0.007812 3.4062 3.4141 3.4062 8.9414-0.007812 12.352l-16.594 16.574c-1.7109 1.7031-3.9414 2.5547-6.1758 2.5547z"/>
             <path class="arrow-right" d="m509.46 452.17c-2.2344 0-4.4688-0.85156-6.1758-2.5586-3.4102-3.4102-3.4102-8.9414 0-12.352l10.402-10.402-10.422-10.41c-3.4141-3.4102-3.4141-8.9375-0.007813-12.352 3.4102-3.4141 8.9375-3.4141 12.352-0.007812l16.602 16.586c1.6406 1.6367 2.5625 3.8594 2.5625 6.1758 0 2.3164-0.91797 4.5391-2.5586 6.1797l-16.582 16.582c-1.7031 1.7031-3.9375 2.5586-6.1719 2.5586z"/>
             <path class="arrow-left" d="m243.94 452.17c-2.2344 0-4.4688-0.85156-6.1719-2.5547l-16.602-16.586c-1.6406-1.6367-2.5625-3.8594-2.5625-6.1758 0-2.3164 0.91797-4.5391 2.5586-6.1797l16.582-16.582c3.4102-3.4102 8.9414-3.4102 12.352 0s3.4102 8.9414 0 12.352l-10.402 10.402 10.422 10.41c3.4141 3.4102 3.4141 8.9375 0.007813 12.352-1.7109 1.707-3.9492 2.5625-6.1836 2.5625z"/>
            </g>
          </svg>
          <div id="instruction-board" class="game-board"></div>
        </div>
        <div class="modal-section">
          <p><strong>IMPORTANT:</strong> Each day a new game is generated which is exactly the same for everyone in the world. Come back each day and share your results with your friends so you can claim your title as the best 2048 player.</p>
        </div>
      </div>
    </div>
  </template>
    </div>
  )
}
