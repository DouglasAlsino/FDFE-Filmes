// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Components/Header';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Movie from './Pages/Movie';
import SearchPage from './Components/SearchPage';

function App() {
  return (
    <Router>
        <Content></Content>
    </Router>
  );
}

function Content() {
  const location = useLocation();
  const showNavbar = location.pathname !== '/Login' && location.pathname !== '/login' && location.pathname !== '/Register';
  return (
    <div>
      {showNavbar && <Navbar />}
      <Routes>
        
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/" element={<Movie />} />
      </Routes>
    </div>
  );
  
}

export default App;
