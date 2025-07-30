import './App.css';
import Navbar from './components/Navigation/Navigation';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import { ProjectDetails } from './components/Projects/ProjectDetails';
import Connections from './components/Connections/Connections';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'; 


function App() {
  return (
    <div>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='about' element={<About/>}/>
      <Route path='projects' element={<Projects/>}/>
      <Route path='projects/:id' element={<ProjectDetails/>}/>
      <Route path='skills' element={<Skills/>}/> 
      <Route path='connections' element={<Connections/>}/>   
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
