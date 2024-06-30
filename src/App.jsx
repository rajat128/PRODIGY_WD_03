import React ,{ useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[player,setPlayer]=useState('X');
  let color=""
    const [gameActive, setGameActive] = useState(true);
    const[roundwon,setroundwon]=useState(false)
    const red="#dc2626"
    const blue="#0284c7"
   
function Square({ onClick, value ,id}) {
  return (
  
    <div  id={id} style={{ color: value === 'X' ? red : blue, }}  className={` font-black text-6xl h-24 w-24 border-2 rounded  flex justify-center items-center hover:bg-zinc-200 hover:rounded-lg` } onClick={onClick}>{value}</div>
  );
}

function checkWinner() {
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
 
for (let i = 0; i < winningConditions.length; i++) {
  const [a, b, c] =winningConditions[i];
  // console.log();
  if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
    
  
    return squares[a];
   
  }
}
return '';
 
}




  const [squares, setSquares] = useState(Array(9).fill(''))
  const [isX, setIsX] = useState(true);

  const handleClick = (i) => {
    // console.log(2);
    if (checkWinner(squares) || squares[i]) {
      return
    }
    
    squares[i] = isX ? 'X' : 'O'
    setSquares(squares)
    setIsX(!isX)

  }

  const winner = checkWinner(squares)
  let status
 

  if (winner) {
    color=winner
    status = `Winner: ${winner}`;
  } else {
    
    {isX? color="X" : color=('O')}
    status = 'Next player: ' + (isX ? 'X' : 'O');
  }
  
  const handleRestart = () => {
    setIsX(true)
    setSquares(Array(9).fill(null))
  }

  const renderSquare = (i) => {
    return <Square id={i} class="square" value={squares[i]}  onClick={() => handleClick(i)}/>
  }
  

  
  
  return (
    <>
    <div className='h-screen bg-slate-300 flex justify-center items-center '>
    <div className='bg-zinc-800 flex justify-center  items-center px-28 rounded-xl  '>
      <div className=''>
<div className='flex justify-center   text-white'>
        <div>
      <h1 className='font-sans font-black  text-4xl my-5 text-center'>  TIC TAC TOE</h1>
      <div id='status' style={{ color: color=== 'X' ? red : blue }} className='text-white  font-mono text-2xl mb-8 ml-5'>{status}</div>
      </div>
        </div>
        <div className='flex justify-center'>
<div className="board text-center ">
      <div className="board-row flex mb-2 gap-2 ">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row flex mb-2 gap-2">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row flex mb-2 gap-2">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <button className=" mt-10 bg-red-500 hover:bg-gray-100 text-white font-semibold hover:text-red-700 hover:font-bold py-2 px-4 border border-red-500 mb-10  hover:border-transparent rounded-md  w-2/3" onClick={handleRestart}>Restart Game!</button>
    </div>
    </div>
    </div>
    </div>
    </div>
    
    </>
  )
}

export default App
