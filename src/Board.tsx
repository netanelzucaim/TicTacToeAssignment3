import { useState } from 'react'
import './App.css'

// function isWon(number[] input) {
//   const array = [[1,5,9],[3,5,7],[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9]]
//   for (let i = 0; i < array.length; i++) {
//     const [a, b, c] = array[i]
//     if (input[a] && input[a] === input[b] && input[a] === input[c]) {
//       return input[a]
//     }
//   }
// }
function Square({value}){
  return <button className="square">{value}</button>
}
function handleClick(){
  console.log('click')
}
function Board() {
  const [array, setArray] = useState( Array(10).fill(null))
  const [isXNext, setIsXNext] = useState(true)

  return (
    <div>
      <div className="board-row">
      <Square value="1" />
      <Square value="1"/>
      <Square value="1"/>
      </div>
      <div className="board-row">
      <Square value="1"/>
      <Square value="1"/>
      <Square value="1"/>
      </div>
      <div className="board-row">
      <Square value="1"/>
      <Square value="1"/>
      <Square value="1"/>
      </div>
    </div>
  );
  
}

export default Board
