import './App.css';
import NavBar from './components/NavBar';
import { SkillCard } from './components/SkillCard';
import { skills } from './content/skills';
import ProjectCard from './components/ProjectCard';
import { projects } from './content/projects';
import BioCard from './components/BioCard';
import { bio } from './content/bio';

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
        <h2>What I'm working on right now</h2>
        <div>
          {projects.map((project, i) => <ProjectCard key={i} project={project}/>)}
        </div>
      </section>
      <section>
        <h2>About</h2>
        <BioCard bio={bio} />
      </section>
      <section>
        <h2>Contact</h2>
        <p>Currently open to full-time and contract development work.</p>
        <p>The best way to reach me is by email, at DanPowerDev@protonmail.com</p>
        <p>You can also reach me on LinkedIn.</p>
      </section>
    </div>
  );
}

export default App;
