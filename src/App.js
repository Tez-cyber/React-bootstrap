 import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Navbar  from './components/inc/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Footer from './components/inc/Footer';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// Packages installed
/* 
Bootstrap ------- 'npm i bootstrap@next'

*/

