import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieDetails from './Movie';
import SeatSelection from './SeatSelection';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieDetails />} />
        <Route path="/seat-selection" element={<SeatSelection />} />
      </Routes>
    </Router>
  );
};

export default App;
