import Login from './components/Login';
import Navbar from './components/Navbar';
import Courses from './components/Courses';
import Notes from './components/Notes';
import Resources from './components/Resources';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Signin from './components/Signin';
import Home from './components/Home';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/Resources" element={<Resources />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
