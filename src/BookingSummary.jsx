import React from 'react';

function BookingSummary({ movie, selectedSeats }) {
  const totalAmount = selectedSeats * (movie.standardSeatsPrice + movie.premiumSeatsPrice);

  return (
    <div className="booking-summary">
      <h4>Booking Summary</h4>
      <p>Movie: {movie.name}</p>
      <p>Selected Seats: {selectedSeats}</p>
      <p>Total Amount: ${totalAmount}</p>
      <button>Proceed to Pay</button>
    </div>
  );
}

export default BookingSummary;

