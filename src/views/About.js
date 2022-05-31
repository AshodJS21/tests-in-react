import React from 'react';


const About = () => {

    const title = 'This is an About page that comes from the "NavBar"'
    const paragraph  = 'learn this React as much as I can as a beginner pogrammer'
    const randomNumber = 10;
    return ( 
        <main>
            <h1>About Page</h1>
            <h3>This is the About page</h3>
            <h3>What is this ? <br/>{title}</h3>
            <h3>But I'm trying to {paragraph}</h3>
            <p>the number is {randomNumber}, but will be changed to  {Math.random() * 10 } because this is a random number</p>
        </main>
    );
}

export default About;