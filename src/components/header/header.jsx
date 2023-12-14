import React from 'react'
import "./header.css"

export default function Header() {
  
  const scoreElem = document.querySelector("[data-score]")
  const scoreAmountElem = document.querySelector("[data-score-amount]")
  return (
    <header class="header">
      <button data-help-btn class="help icon-btn" />
      <button data-stats-btn class="stat icon-btn" />
      <h1 class="title">2048 Daily</h1>
      <div class="score-container stat-container">
        <span class="stat-label">Score</span>
        <div data-score class="score">
          <div data-score-amount class="stat-amount score-amount">0</div>
        </div>
      </div>
      <button data-settings-btn class="setting icon-btn"></button> 
    </header>
  )
}
