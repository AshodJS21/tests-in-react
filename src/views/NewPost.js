import React from "react";

import axios from "axios";
import { useState } from "react";

//API and Axios

const NewPost = () => {
  const [joke, setJoke] = useState("");
  // Axios...
  const getJoke = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      console.log(response);
      setJoke(response.data.setup + "..." + response.data.setup);
    });
  };

  //fetch
  // const getJoke= () => {
  //     fetch.get("http swapi.dev/api/planets/1/").then((response) => response.json()).then((data)=>(
  //     setJoke(data.setup + "..." + data.punchline)
  //     ));
  // };

  return (
    <main>
      <h1>NewPost Page</h1>
      <h3>This is the NewPost page</h3>
      <h3>This is a API test</h3>
      <button onClick={getJoke}>get the day's joke</button>
      <p>The API is: {joke}</p>
    </main>
  );
};

export default NewPost;
