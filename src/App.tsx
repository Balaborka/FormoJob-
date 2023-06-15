import React from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { About } from './pages/About'
import { Buy } from './pages/Buy'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="*" element={ <About /> } />
      </Routes>
    </Router>
  );
}

export default App;
