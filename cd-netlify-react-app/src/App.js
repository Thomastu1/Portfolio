import Pres from './component/Pres';
import './App.css';
import Nav from './component/nav';
import Homea from './component/home';
import Projet from './component/Projet';

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

<p> <h1>Présentation</h1></p>
<br/>
<Pres/>
<br/>
<br/>
<br/>
<a href="#projets" id="projets"> </a>
<p> <h1>Projets</h1></p>
<br/>
<Projet/> 



    </div>)
    }

export default App;
