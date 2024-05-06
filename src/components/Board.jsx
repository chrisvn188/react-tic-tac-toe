/* eslint-disable react/prop-types */
import Square from './Square'

export default function Board({ currentMark, squares, onPlay }) {
  function handleClick(index) {
    if (calculateWinner(squares) || squares[index]) return
    const nextSquares = squares.slice()
    nextSquares[index] = currentMark
    onPlay(nextSquares)
  }

  const winner = calculateWinner(squares)
  let status
  if (winner) {
    status = 'Winner: ' + winner
  } else {
    status = `${currentMark} plays this round`
  }

  return (
    <div className="flex flex-col p-8 bg-blue-100 rounded-sm">
      <div>{status}</div>
      <div className="flex">
        <Square
          value={squares && squares[0]}
          index={0}
          onSquareClick={handleClick}
        />
        <Square
          value={squares && squares[1]}
          index={1}
          onSquareClick={handleClick}
        />
        <Square
          value={squares && squares[2]}
          index={2}
          onSquareClick={handleClick}
        />
      </div>
      <div className="flex">
        <Square
          value={squares && squares[3]}
          index={3}
          onSquareClick={handleClick}
        />
        <Square
          value={squares && squares[4]}
          index={4}
          onSquareClick={handleClick}
        />
        <Square
          value={squares && squares[5]}
          index={5}
          onSquareClick={handleClick}
        />
      </div>
      <div className="flex">
        <Square
          value={squares && squares[6]}
          index={6}
          onSquareClick={handleClick}
        />
        <Square
          value={squares && squares[7]}
          index={7}
          onSquareClick={handleClick}
        />
        <Square
          value={squares && squares[8]}
          index={8}
          onSquareClick={handleClick}
        />
      </div>
    </div>
  )
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for (let line of lines) {
    const [a, b, c] = line

    const winningCondition =
      squares[a] && squares[a] === squares[b] && squares[a] === squares[c]

    if (winningCondition) return squares[a]
  }

  return null
}
