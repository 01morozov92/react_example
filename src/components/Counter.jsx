import React, {useState} from 'react';

const Counter = () => {

    const [counter, setCounter] = useState(0);

    function increment() {
        setCounter(counter + 1)
    }

    function decrement() {
        setCounter(counter - 1)
    }

    return (
        <div>
            <h1 className={"count"}>{counter}</h1>
            <button onClick={increment} className={"button"} id={"b1"}>+</button>
            <button onClick={decrement} className={"button"} id={"b2"}>-</button>
        </div>
    );
};

export default Counter;