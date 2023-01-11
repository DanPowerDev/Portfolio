import './App.css';
import NavBar from './components/NavBar';
import { SkillCard } from './components/skill-card';
import { skills } from './content/skills';
import ProjectCard from './components/ProjectCard';
import { projects } from './content/projects';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <h1>Let's build something beautiful</h1>
      </header>
      <section>
        <h2>What I do</h2>
        <div className='skill-container'>
          {skills.map((skill, i) => <SkillCard key={i} skill={skill} />)}
        </div>
      </section>
      <section>
        <h2>What I'm working on</h2>
        <div>
          {projects.map((project, i) => <ProjectCard key={i} project={project}/>)}
        </div>
      </section>
      {/* <section className='welcome'>
        <h2>Welcome</h2>
        <p>
          I'm a software professional with over 4 years of experience in building sleek products, designing polished interfaces and writing clean code.
        </p>
        <p>
          Currently seeking new clients for product, design or frontend development contracts.
        </p>
      </section>
      <section>
        <h2>What I'm working on</h2>
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
      </section> */}
    </div>
  );
}

export default App;
