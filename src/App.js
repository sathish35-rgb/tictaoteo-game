
import Icon from "./Components/Icon";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  const tictaoteoArray = new Array(9).fill("")
const App = () => {
    
    const [isCross, setIsCross] = useState(true)
    const [winMessage, setWinMessage] = useState("") 

    function resetGame(){
        tictaoteoArray.fill("")
        setIsCross(true)
        setWinMessage("")
    }
    function checkIsWinner(){
        if(tictaoteoArray[0] == tictaoteoArray[1] && tictaoteoArray[0] == tictaoteoArray[2] && tictaoteoArray[0] !=""){
            setWinMessage(tictaoteoArray[0] +" has won")
        }
    
    else if(tictaoteoArray[3] == tictaoteoArray[4] && tictaoteoArray[3] == tictaoteoArray[5] && tictaoteoArray[3] !=""){
        setWinMessage(tictaoteoArray[3] +" has won")
    }
    else if(tictaoteoArray[6] == tictaoteoArray[7] && tictaoteoArray[6] == tictaoteoArray[8] && tictaoteoArray[6] !=""){
        setWinMessage(tictaoteoArray[6] +" has won")
    }
    else  if(tictaoteoArray[0] == tictaoteoArray[3] & tictaoteoArray[0] == tictaoteoArray[6] && tictaoteoArray[0] !=""){
            setWinMessage(tictaoteoArray[0] +" has won")
     }  
     else  if(tictaoteoArray[1] == tictaoteoArray[4] & tictaoteoArray[1] == tictaoteoArray[7] && tictaoteoArray[1] !=""){
        setWinMessage(tictaoteoArray[1] +" has won")
 } 
 else  if(tictaoteoArray[2] == tictaoteoArray[5] & tictaoteoArray[2] == tictaoteoArray[8] && tictaoteoArray[2] !=""){
    setWinMessage(tictaoteoArray[2] +" has won")
} 
else  if(tictaoteoArray[0] == tictaoteoArray[4] & tictaoteoArray[0] == tictaoteoArray[8] && tictaoteoArray[0] !=""){
    setWinMessage(tictaoteoArray[0] +" has won")
} 
else  if(tictaoteoArray[2] == tictaoteoArray[4] & tictaoteoArray[2] == tictaoteoArray[6] && tictaoteoArray[2] !=""){
    setWinMessage(tictaoteoArray[2] +" has won")
} 
}
function PlayGame(index){
    if(winMessage){
        return toast ("Game has already over")
    }
    else if(tictaoteoArray[index] !=""){
        return toast ("Already filled")
    }
    else { (tictaoteoArray[index] = isCross==true? "cross":"cicrle")
       setIsCross(!isCross)
}
       checkIsWinner()
}
return (
    <div class="app-body">
         <ToastContainer position="bottom-center"/>
        <h1>Lets play Tic tao toe Game</h1>
        {winMessage?(
            <div>
                <h2> {winMessage} </h2>
                <button onclick={resetGame}> Play Again
                </button>
                </div>
        ):(
            <h2>{isCross==true?"Cross":"Circle"}'s Turn </h2>
        )
    }
    <div className="container">
       
        {tictaoteoArray.map(
            (value, index)=>(
                <div className="item1" onClick={()=>PlayGame
                (index)}>
                    <Icon icon = {value}/>
                    </div>

        ))
        }

    </div> 
    </div>
);
}


export default App;     