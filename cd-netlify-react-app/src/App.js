import Pres from './component/Pres';
import './App.css';
import Nav from './component/nav';
import Homea from './component/home';
import Projet from './component/Projet';
import Contact from './component/contact';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Homea/>
      <a href="#presentation" id="presentation"> </a>
      <br/>
      <br/>
      <br/>
      <br/>
      
      <p><h1>Présentation</h1></p>
      <br/>
      <Pres/>
      <br/>
      <br/>
      <br/>
      <a href="#projets" id="projets"> </a>
      <br/>
      
      {/* Lien vers le portfolio sur Figma */}
      <p>
        <a 
          href="https://www.figma.com/proto/DVBo9RubB4rUx0knXc9yHk/Portfolio-Totu?node-id=63-2014&node-type=frame&t=ckYTA8VtVmiEo5Ga-0&scaling=min-zoom&content-scaling=fixed&page-id=63%3A1632&starting-point-node-id=63%3A2014" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            border: '8px solid white', 
            padding: '5px', 
            display: 'inline-block', 
            textDecoration: 'none', 
            color: 'white'
          }}
        
        >
          <h1>Portfolio</h1>
        </a>
      </p>
      
      <p><h1>Projets Web</h1></p>
      <br/>
      <Projet/> 
      <br/>
      
      <a href="#contact" id="contact"> </a>
      <br/>
      
      <Contact/>
    </div>
  );
}

export default App;
