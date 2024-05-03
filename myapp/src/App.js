//app.js is the main file in react app

// import logo from './logo.svg';
import About from "./screens/About";
import Contact from "./screens/Contact";
import './App.css';
// import React from 'react';

function App() {
  // return (
  //   <h1>
  //     Hello World
  //   </h1>
  // );
  return (
    <div>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;

// basic react app build done
// Screens and Components 
// screens are the multiple web pages integrated into the website 
// to run the React: to "npm start" in the terminal

// App.js  -> src/
// about is in the screens of the source so (screens/about,js)
//   ./  for the current directory
//   ../ is for to move a directory above

//props are used to increase reusability
