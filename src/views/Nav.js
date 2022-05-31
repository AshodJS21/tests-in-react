import React from 'react';

const Nav = () => {
    return ( 
        <nav>
        <div className="nav">
            <h3>This is the NavBar</h3>
            <ul>
                <a href="/">Home</a>
                <a href="/About">About</a>
                <a href="/HomeTwo">Home Two</a>
                <a href="/HomeThree">Home Three</a>
                <a href="/BlogList">BlogList</a>
                <a href="/NewPost">NewPost</a>
                <a href="/PostPage">PostPage</a>
                <a href="/CountdownTimer">CountdownTimer</a>
                <a href="/Missing">Missing</a>
            </ul>
        </div>
        </nav>
    );
}

export default Nav;