import { useState } from 'react';
import './Board.css';
import image_x from './images/x.jpg';
import image_circle from './images/circle.png';

function isWon(input: (string | null)[]) {
  const array = [[1, 5, 9], [3, 5, 7], [1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9]];
  for (let i = 0; i < array.length; i++) {
    const [a, b, c] = array[i];
    if (input[a] && input[a] === input[b] && input[a] === input[c]) {
      return input[a];
    }
  }
  return null;
}

interface SquareProps {
  value: string | null;
  onClick: () => void;
}

function Square({ value, onClick }: SquareProps) {
  return (
    <button className="square" onClick={onClick}>
      {value === 'X' ? <img src={image_x} alt="X" /> : value === 'O' ? <img src={image_circle} alt="O" /> : null}
    </button>
  );
}

function Board() {
  const [array, setArray] = useState(Array(10).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const winner = isWon(array);

  function handleClick(currIndex: number) {
    if (array[currIndex] !== null || winner) {
      return;
    }
    const updatedArray = array.map((item, index) => index === currIndex ? (isXNext ? 'X' : 'O') : item);
    setArray(updatedArray);
    setIsXNext(!isXNext);
  }

  return (
    <div>
      <div className="board">
        {array.slice(1, 10).map((value, index) => (
          <Square key={index + 1} value={value} onClick={() => handleClick(index + 1)} />
        ))}
      </div>

      {/* Display the winner message if there is a winner */}
      {winner && <div className="winner-message">{`Player ${winner} Wins!`}</div>}

      <button
        className="reset-button"
        onClick={() => {
          setArray(Array(10).fill(null));
          setIsXNext(true);
        }}
        disabled={!winner}
      >
        Reset Game
      </button>
    </div>
  );
}

export default Board;
