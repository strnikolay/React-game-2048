import React from 'react'

export default function Header() {
  return (
    <header class="header">
      <button data-help-btn class="icon-btn" />
      <button data-stats-btn class="icon-btn" />
      <h1 class="title">2048 Daily</h1>
      <div class="score-container stat-container">
        <span class="stat-label">Score</span>
        <div data-score class="score">
          <div data-score-amount class="stat-amount score-amount">0</div>
        </div>
      </div>
      {/*<button data-settings-btn class="icon-btn"></button>*/} 
    </header>
  )
}
