import './App.css';
import './styles/TextStyles.css'
import NavBar from './components/global/NavBar';
import { SkillCard } from './components/SkillCard';
import { skills } from './content/skills';
import ProjectCard from './components/ProjectCard';
import { projects } from './content/projects';
import BioCard from './components/BioCard';
import { bio } from './content/bio';
import ContactCard from './components/ContactCard';
import { contact } from './content/contact';
import Footer from './components/global/Footer';
import ContentContainer from './components/global/ContentContainer';

function App() {
  return (
    <div className="App">
      
      <NavBar />

      <header className="App-header">
        <h1>Let's build something beautiful</h1>
      </header>

      <section>
        <h2>Skills</h2>
        <ContentContainer>
          {skills.map((skill, i) => <SkillCard key={i} skill={skill} />)}
        </ContentContainer>
      </section>

      <section>
        {/* TODO: Add github here somehow */}
        <h2>Current projects</h2>
        {projects.map((project, i) => <ProjectCard key={i} project={project}/>)}
      </section>

      <section>
        <h2>About</h2>
        <BioCard bio={bio} />
      </section>

      <section>
        <h2>Contact</h2>
        <ContentContainer>
          {contact.map((method, i) => <ContactCard key={i} method={method}/>)}
        </ContentContainer>
      </section>

      <Footer />
    
    </div>
  );
}

export default App;
