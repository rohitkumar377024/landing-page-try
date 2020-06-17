import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="nav-bar">
        <li className="nav-logo">Logo</li>
        <div className="nav-items">
          <li className="nav-item">Item 1</li>
          <li className="nav-item">Item 2</li>
          <li className="nav-item">Item 3</li>
          <li className="nav-item">Item 4</li>
          <li className="nav-item">Item 5</li>
        </div>
      </nav>

      <section className="section-one">
        <h1>Hello there.</h1>
        <p>This is Rohit Kumar.</p>
      </section>

      <section className="section-two">
        <h1>Meowsy 2</h1>
      </section>

      <section className="section-three">
        <h1>Meowsy 3</h1>
      </section>

      <section className="section-four">
        <h1>Meowsy 4</h1>
      </section>
    </div>
  );
}

export default App;
