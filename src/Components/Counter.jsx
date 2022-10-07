import React, {useState} from 'react';
import   './Counter.css';

const Counter= () => {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState('input text');
// console.log(setValue)
// console.log(setCount)

    function increment() {
        setCount(count + 1)
    }

    function decrement(){
        setCount(count - 1)
    }
     
    return (
        <div className='counter'>
            <input 
            type="text"
            value= {value}
            onChange={event => setValue(event.target.value)} 
            />
            <h1>{count}</h1> 
            <h1>{value}</h1>
            <button onClick={increment}>Increnent</button>
            <button onClick= {decrement}>Decrement</button>
        </div>
    )
}
export default Counter;
