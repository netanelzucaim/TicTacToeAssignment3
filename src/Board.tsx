import { useState } from 'react'
import './App.css'

function isWon( input:any) {
  const array = [[1,5,9],[3,5,7],[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9]]
  for (let i = 0; i < array.length; i++) {
    const [a, b, c] = array[i]
    if (input[a] && input[a] === input[b] && input[a] === input[c]) {
      return input[a]
    }
  }
}
function Square({ value, onClick }) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

function Board() {
  
  const [array, setArray] = useState( Array(10).fill(null))
  const [isXNext, setIsXNext] = useState(true)

  function handleClick( currIndex){
    console.log('click')
    if(array[currIndex] !== null){
      return;
    }
    const updatedArray = array.map((item, index) => index === currIndex ? (isXNext ? 'X' : '0') : item)
    console.log(isWon(updatedArray) +"won")
    setArray(updatedArray)
    setIsXNext(!isXNext) 
  }
  return (
    <div>
      <div className="board-row">
        <Square value={array[1]} onClick={() => handleClick(1)} />
        <Square value={array[2]} onClick={() => handleClick(2)} />
        <Square value={array[3]} onClick={() => handleClick(3)} />
      </div>
      <div className="board-row">
      <Square value={array[4]} onClick={() => handleClick(4)} />
        <Square value={array[5]} onClick={() => handleClick(5)} />
        <Square value={array[6]} onClick={() => handleClick(6)} />

      </div>
      <div className="board-row">
        <Square value={array[7]} onClick={() => handleClick(7)} />
        <Square value={array[8]} onClick={() => handleClick(8)} />
        <Square value={array[9]} onClick={() => handleClick(9)} />
      </div>
    <button 
      className="reset-button" 
      onClick={() => {
      setArray(Array(10).fill(null));
      setIsXNext(true);
      }}
      disabled={!isWon(array)}
    >
      Reset Game
    </button>
    </div>
  );
  
}

export default Board
