// root component of application to effect change on application this file needs to be modified or have components added to it
import React from 'react';
// import logo from './logo.svg';
import './App.css';
import About from './components/About'
import Nav from "./components/Nav"

// is JSX not HTML
function App() {
  return (
    <div>
        <Nav></Nav>
        <main>
            <About></About>
        </main>
    </div>
  );
}

export default App;