import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
// import ContactUs from './components/MainWebsite/Contact';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />        
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;