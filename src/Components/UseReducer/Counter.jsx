import React,{useReducer} from "react";

const initialstate = {count:0}
function reducer(state,action){
    switch(action.type){
        case 'increment' :
            return {count : state.count+1}
        case 'decrement' :
            return {count : state.count-1}
        case 'reset' :
            return {count : 0}
        case 'default' :
          throw new Error()
    }
}

function Counter(){
    const [state,dispatch] = useReducer(reducer,initialstate)

    return(
        <div>
            <p>{state.count}</p>
         <button onClick={()=>dispatch({type:'increment'})}>increment</button>
         <button onClick={()=>dispatch({type:'decrement'})}>decrement</button>
         <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
        </div>   
         )
}

export default Counter;