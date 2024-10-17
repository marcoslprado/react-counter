import { useState } from "react";
import './style.css'


export default function Counter () {
    const [counter, setCounter] = useState(0)

    return (
        <div id="content">
            <h1>Counter</h1>
            <h2>{counter}</h2>
            <button onClick={() => setCounter(counter+1)}>Click here!</button>
        </div>
    )
}