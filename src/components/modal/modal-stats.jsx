import React from 'react'
import "./modal.css"
import one from "./one.svg"

export default function Modalstat () {
  return (
    <div>

<template data-stats-modal-template>
<div class="modal stat-modal" data-modal role="dialog" aria-labelledby="statsModalTitle">
  <button aria-label="Close" class="modal-close-btn" data-modal-close>&times;</button>
  <header class="modal-header">
    <h2 id="statsModalTitle" class="modal-title">Statistics</h2>
  </header>
  <div class="modal-body">
    <div class="modal-section">
      <div class="stat-grid">
        <div class="stat-container" data-stat-container>
          <div class="stat-label">Current Score</div>
          <div class="stat-amount" data-current-game-score></div>
        </div>
        <div class="stat-container" data-stat-container>
          <div class="stat-label">Current Streak</div>
          <div class="stat-amount" data-current-streak></div>
        </div>
        <div class="stat-container" data-stat-container>
          <div class="stat-label">Current Largest Tile</div>
          <div class="stat-amount" data-current-game-highest-tile></div>
        </div>
        <div class="stat-container" data-stat-container>
          <div class="stat-label">High Score</div>
          <div class="stat-amount" data-high-score></div>
        </div>
        <div class="stat-container" data-stat-container>
          <div class="stat-label">Max Streak</div>
          <div class="stat-amount" data-max-streak></div>
        </div>
        <div class="stat-container" data-stat-container>
          <div class="stat-label">All Time Largest Tile</div>
          <div class="stat-amount" data-highest-tile></div>
        </div>
      </div>
    </div>
    <div class="modal-section">
      <div class="stats-bottom-section">
        <div class="stat-container next-game-time-container">
          <div class="next-game-label stat-label">Next Game</div>
          <div class="next-game-time stat-amount" data-next-game-time></div>
        </div>
        <button class="share-btn" data-share-btn>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0V0z" fill="none"/><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
          </svg>
          Share
        </button>
      </div>
    </div>
  </div>
</div>
</template>

</div>
)
}