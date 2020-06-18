import React from 'react';

const Home = () => {
  return (
    <div>
      <section className="section-one">
        <h1>Hello there.</h1>
        <p>This is Rohit Kumar.</p>
      </section>

      <section className="section-two">
        <h1>Here are 2 random boxes.</h1>
        <p>(So I could practise flexbox.)</p>
        <p>(I like these dashed lines. Yay :D)</p>

        <div className="boxes">
          <div className="box">Box 1</div>
          <div className="box">Box 2</div>
        </div>
      </section>

      <section className="section-three">
        <h1>Now lets see some colorful spheres.</h1>
        <div className="spheres">
          <div className="sphere"></div>
          <div className="sphere"></div>
          <div className="sphere"></div>
          <div className="sphere"></div>
          <div className="sphere"></div>
        </div>
      </section>

      <section className="section-four">
        <h1>I am just learning CSS and React.</h1>
        <button>Yay</button>
      </section>
    </div>
  );
};

export default Home;
