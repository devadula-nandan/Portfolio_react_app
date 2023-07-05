import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation, useParams } from 'react-router-dom';
import PortfolioHome from './components/pages/PortfolioHome';



const NotFound = () => <div>404 Not Found</div>;
const Home = () => <div> Home </div>;
const App = () => {

  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/users/:githubName" element={<PortfolioHome />} /> */}
        <Route path="/" element={<PortfolioHome />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
