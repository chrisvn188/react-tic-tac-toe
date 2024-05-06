import { useState } from 'react'
import Board from './Board'

const MARKS = ['X', 'O']

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [currentMove, setCurrentMove] = useState(0)

  const currentMark = MARKS[currentMove % 2]
  const currentSquares = history[currentMove]

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length - 1)
  }

  function handleHistoryClick(move) {
    setCurrentMove(move)
  }

  const historyTexts = history.map((h, index) => {
    if (index === 0) return 'Go to start game'
    return 'Go to move #' + index
  })

  return (
    <div className="flex gap-4 items-center">
      <Board
        currentMark={currentMark}
        squares={currentSquares}
        onPlay={handlePlay}
      />
      <ul className="mt-4 flex flex-col gap-2">
        {historyTexts.map((text, move) => (
          <li key={text}>
            <button
              className="py-2 px-4 rounded-md bg-slate-100"
              onClick={() => handleHistoryClick(move)}>
              {text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
