import React from 'react';
import Movie from './Movie';

const movies = [
  { id: 1, name: 'Leo', standardSeats: 50, premiumSeats: 20 },
  { id: 2, name: 'Bagavanth Kesari', standardSeats: 40, premiumSeats: 15 },
  
];

function MovieList() {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
