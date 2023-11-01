import React from 'react';
import { useNavigate } from 'react-router-dom';
import Payment from './Payment';

const MovieDetails = () => {
  const navigate = useNavigate();
  

  const movieDetails = {
    name: 'Leo',
    location: 'PVR ',
    showtime: '12:00 PM',
    genre: 'Action, Adventure, Thriller',
    rating: '8.5/10',
      
  };

  const handleSeatSelect = () => {
    
    navigate('/seat-selection');
  };

  return (
    <div className="movie-details">
      <h2>Movie Details</h2>
      <p>Movie: {movieDetails.name}</p>
      <p>Location: {movieDetails.location}</p>
      <p>Showtime: {movieDetails.showtime}</p>
      <button onClick={handleSeatSelect}>Select Seats</button>
    </div>
  );
};

export default MovieDetails;
