import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Wishlist from './components/Wishlist';
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu'
import Genre from './components/Genre'
import Movie from './components/Movie'
import "./index.css"

// Routes

const App = () => {
  return (
    <>
      <div>
        <Router>
        <Menu />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/wishlist" element={<Wishlist/>} />
            <Route path="/genre/:genre" element={<Genre/>}/>
            <Route exact path="/movie/:id" element={<Movie/>}/>
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;