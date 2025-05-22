import React from 'react';
import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<h1 style={{textAlign: 'center'}}>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter> */}
    </div>
  );
}

export default App;
