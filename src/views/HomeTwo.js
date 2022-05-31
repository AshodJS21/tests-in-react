import React from 'react';
import { useState } from 'react';


const HomeTwo = () => {
//hook
    const [name, setName] = useState('Lucks');
    const [number, setNumber] = useState(17)

    const clickHandler = () => {
       setName('Marcelo')
       setNumber(12)
    }


    return ( 
        <div className="main-page">
            <h1>Main page </h1>
            <p>{name} is player number {number} </p> 
            <button onClick={clickHandler}>Click</button>

        </div>
     );
}
 
export default HomeTwo;