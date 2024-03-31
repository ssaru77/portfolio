import logo from './logo.svg';
import './App.css';
import { Nav } from './components/Nav';
import { Homepage } from './components/Homepage';
import { Services } from './components/Services';
import { Page3 } from './components/Page3';
import { Page4 } from './components/Page4';
import { Page5 } from './components/Page5';
import { Page6 } from './components/Page6';
import { Parge7 } from './components/Parge7';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
     <Nav/>
     
     <Homepage/>
     <Services/>
     <Page3/>
     <Page4/>
     <Page5/>
     <Page6/>
     <Parge7/>
     <Contact/>
     <Footer/>
     </div>
    
  );
}

export default App;
