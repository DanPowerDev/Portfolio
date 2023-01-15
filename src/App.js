import './App.css';
import NavBar from './components/NavBar';
import { SkillCard } from './components/SkillCard';
import { skills } from './content/skills';
import ProjectCard from './components/ProjectCard';
import { projects } from './content/projects';
import BioCard from './components/BioCard';
import { bio } from './content/bio';
import ContactCard from './components/ContactCard';
import { contact } from './content/contact';

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
        {/* TODO: Add github here somehow */}
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
        <div className='contact-container'>
          {contact.map((method, i) => <ContactCard key={i} method={method}/>)}
        </div>
      </section>
    </div>
  );
}

export default App;
