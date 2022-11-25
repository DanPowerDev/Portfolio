import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Let's build something beautiful</h1>
      </header>
      <section className='welcome'>
        <h2>Welcome</h2>
        <p>
          I'm a software professional with over 4 years of experience in building sleek products, designing polished interfaces and writing clean code.
        </p>
        <p>
          Currently seeking new clients for product, design or frontend development contracts.
        </p>
      </section>
      <section>
        <h2>What I do</h2>
        <div>
          <article>
            <h3>Product management</h3>
            <p></p>
          </article>
          <article>
            <h3>UX Design</h3>
          </article>
          <article>
            <h3>Frontend development</h3>
          </article>
        </div>
      </section>
      <section>
        <h2>Portfolio</h2>
        <div>
          <h3>Major projects</h3>
        </div>
        <div>
          <h3>Minor projects</h3>
          <p>Small contracts, or just for fun</p>
        </div>
      </section>
      <section>
        <h2>Work with me</h2>
      </section>
    </div>
  );
}

export default App;
