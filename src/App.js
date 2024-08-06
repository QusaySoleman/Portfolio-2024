import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Skill from './components/Skills/Skill';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Company from './components/Company/Company';
import Copyright from './components/Copyright/Copyright';
//import google fonts

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Company/>
      <Skill/>
      <Projects/>
      <Contact/>
      <Copyright/>
    </div>
  );
}

export default App;
