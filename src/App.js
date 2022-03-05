import logo from './logo.svg';
import './App.css';
import React from 'react';
import img from'./images/image.jpg';


function App() {
  return (
    <div className="App">
      
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title red">Bio cosmetics</h1>

        <br />
        <div className="img">
        <img src={img} alt="" />

          <br />

          <img src="./imgs/img.jpg" />
        </div>
      </div>
      <div className="iframe-container">
        
      <iframe width="560" height="315" src="https://www.youtube.com/embed/16hDRJXa5MY?start=6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

      
    
  
    </div>
  );
}

export default App;