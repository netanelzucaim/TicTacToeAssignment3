import { useState } from 'react';
import './Board.css';
import image_x from './images/x.jpg';
import image_circle from './images/circle.png';

function isWon(input: (string | null)[]) {
  const array = [[0, 4, 8], [2,4,6], [0,1,2], [3,4,5], [6,7, 8], [0,3,6], [1,4,7], [2,5,8]];
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
//
function Board() {
  const [array, setArray] = useState(Array(9).fill(null));
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
        {array.map((value, index) => (
          <Square key={index} value={value} onClick={() => handleClick(index)} />
        ))}
      </div>

      {/* Display the winner message if there is a winner */}
      {winner && <div className="winner-message">{`Player ${winner} Wins!`}</div>}

      <button
        className="reset-button"
        onClick={() => {
          setArray(Array(9).fill(null));
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
