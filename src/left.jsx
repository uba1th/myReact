import "./App.css"
import { useState } from "react";

function Counter(){

    const [count,SetCount]=useState(0)

    return(
        <div className="banner-content-left">
            <h1>You clicked this button {count} times</h1>
            <button type="button" onClick={()=>SetCount(count+1)}>Count here</button>
        </div>
    )
}

export default Counter;