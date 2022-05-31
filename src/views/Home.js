import React from 'react';

const  Home= () => {

    const clickhandler = (name)=>{
        console.log('Hala Madrid' , "" + name)
    }



    return (  
        <div className="header">
            <h1>Home Page</h1>
            <h3>This is the Home page</h3>
            <p>Button</p>
            <button onClick={()=>clickhandler('14 champ')}>Click</button>

        </div>
    );
}
export default Home;