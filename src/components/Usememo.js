import React, { useState, useMemo } from 'react'

const Usememo = () => {

    const [count, setCount] = useState(0);
    const [item, setItem] = useState(10)
    const multiCountMemo = useMemo(()=>{
        console.warn('inner');
     return count*5;

    },[count]);
    // function multiComponent() {
    //     console.warn('inner');
    //     return count*5;
        
    // }



    return (
        <>
            <h1>UsememoHooks</h1>
            <h2>Lets Count:{count}</h2>
            <h2>{item}</h2>
            <h2>{multiCountMemo}</h2>
            <button onClick={() => { setCount(count + 1) }}>Count</button>
            <button onClick={() => { setItem(item * 10) }}>item</button>
        </>
    )
}

export default Usememo;
