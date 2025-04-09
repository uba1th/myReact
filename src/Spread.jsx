import './App.css'
import { useState } from 'react'

export default function Spread(){

    const [car,setCar]=useState({
        brand:"ford",
        year:"1969"
    });



    return(
        <div className="spread-container">
            <h1> The car brand is {car.brand} and the year is {car.year}</h1>
            <button type="button" onClick={()=>setCar({brand:"Audi",year:"1970"})}>Click</button>
        </div>
    )
}