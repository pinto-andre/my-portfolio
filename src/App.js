import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import About from './pages/about/about'
import Projects from './pages/projects/projects';
import Work from './pages/work/work';
import Education from './pages/education/education'
import Entrance from './pages/entrance/entrance';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route 
          path="/"
          element={<Entrance />}
        />
        <Route 
          path="/about" 
          element={<About />} 
        />
        <Route 
          path="/projects"
          element={<Projects />}
        />
        <Route
          path="/work"
          element={<Work />}
        />
        <Route
          path="/education"
          element={<Education />}
        />
      </Routes>
    </div>
  );
}

export default App;
