import React, {useState} from "react"

const Amount = () => {
   const [amount, setAmount] = useState(1)

    const plus = () =>{
        setAmount((num)=> num+=1) 
    }

    const minus=()=>{
        if(amount === 1){
            setAmount(amount) 
        }else{
            setAmount((num)=> num-=1)
        }
    }

    return(
        <div>
       <button onClick={minus}>-</button>
       <span>{amount}</span> 
        <button onClick={plus}>+</button>
       </div>
    )
}

export default Amount 