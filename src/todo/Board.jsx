
import React, {useState} from "react";
import Square from './Square';

const Board = () =>{ 

    const[state, setState] =useState(Array(9).fill(null));
    const[isX, setIsX] = useState(true);
  
    const checkWinner = () => {
        const winnerLogic = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],

        ];

        for(let logic of winnerLogic) {
           const [a,b,c]= logic;
           if(state[a] !== null  && state[a] === state[b] && state[b] === state[c]) {
            return state[a];
        }
    }
        return false;
    };
 

      const isWinner =checkWinner();

    const hansleClick = (index)=>{
       if(state[index] !== null){
        return
       }
       const copyState = [...state];
       copyState[index] = isX ? "X" : "O";
       setState(copyState);
       setIsX(!isX);
      
    }

      const handleReset=()=>{
        setState(Array(9).fill(null));
      }

      

    return (
       <div className="board-container">
     {isWinner ? (
        <>{isWinner} is won <button style={{borderRadius:"4px",  width:"90px", backgroundColor:"pink"}}onClick={handleReset}>Play Again</button></>) : (

        <>
       <h3 className="play">Player {isX?"X":"O"} Play </h3>

       
       <div className="board-row">
       <Square onClick={()=> hansleClick(0)} value={state[0]} />
       <Square onClick={()=> hansleClick(1)} value={state[1]} />
       <Square onClick={()=> hansleClick(2)} value={state[2]} />
       </div>

       <div className="board-row">
       <Square onClick={()=> hansleClick(3)} value={state[3]} />
       <Square onClick={()=> hansleClick(4)} value={state[4]} />
       <Square onClick={()=> hansleClick(5)} value={state[5]} />
       </div>

       <div className="board-row">
       <Square onClick={()=> hansleClick(6)} value={state[6]} />
       <Square onClick={()=> hansleClick(7)} value={state[7]} />
       <Square onClick={()=> hansleClick(8)} value={state[8]} />
       </div>
       <h4 className="button"><button style={{borderRadius:"4px",  width:"90px", backgroundColor:"pink"}}onClick={handleReset}>Reset</button></h4>
       </>)
       }
       </div>

       );
};



export default Board;
