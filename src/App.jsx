import { useState } from "react";
import "./App.css";
import Counter from "./left";
import Spread from "./Spread";


function App() {
  const [setOn, setOff] = useState("");

  return (

    <header>
      <div className="container">
        <div className="nav">
          <h1> useState </h1>
        </div>
      </div>
      <div className="banner">
        <div className="banner-content">

            <div className="banner-content-right">
                <h1> Usestate React {setOn}</h1>
                <p>useState is a React Hook that allows you to add state to functional components. It's one of the most fundamental hooks in React and replaces the need for class-based state management.</p> 
                <button type="button" onClick={()=>setOff("is Active")}>useState</button>
            </div>

          
                <Counter/>
            
        </div>
      </div>
      <div className="spread">

            <Spread/>

      </div>
    </header>



  );
}

export default App;
