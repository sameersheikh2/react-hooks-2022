import React from 'react';
import { useState, useEffect } from 'react';

function Message() {
    const [age, setAge] = useState();
    const [name, setName] = useState("");
    const [num, setNum] = useState();
    const [count, setCount] = useState(0);
    const [secondCount, setSecondCount] = useState(0)
    useEffect(() => {
        console.log ("You clicked" , {count}, "times");
        setSecondCount(secondCount + 5);
    }, [count]);
    return (
        <>
            <p>Hello {name}, You're {age} years old. </p>
            Type Name here
            <input type="text" onChange={(e) => setName(e.target.value)} /> <br />
            <br />
            Type age
            <input type="number" onChange={(e) => setNum(e.target.value)} />
            <button onClick={() => setAge(num)}>Submit</button>
            <br />
            <p>{count} - {secondCount}</p>
            <button onClick={() => setCount(count - 1)}>Count -</button>
            <button onClick={() => setCount(count + 1)}>Count +</button>
        </>
    )

}

export default Message;