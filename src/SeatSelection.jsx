import React, { useState } from 'react';
import './SeatSelection.css';
import Payment from './Payment';

const SeatSelection = ({ onProceedToPay }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  // Define the number of premium and standard seats
  const premiumSeats = 20;
  const standardSeats = 40;

  const handleSeatClick = (seatNumber) => {
    // Check if the seat is already selected
    if (selectedSeats.includes(seatNumber)) {
      // If selected, remove it from the selectedSeats array
      const updatedSeats = selectedSeats.filter(seat => seat !== seatNumber);
      setSelectedSeats(updatedSeats);
    } else {
      // If not selected, add it to the selectedSeats array
      const updatedSeats = [...selectedSeats, seatNumber];
      setSelectedSeats(updatedSeats);
    }
  };

  const renderSeats = () => {
    const totalRows = 6; // Total number of rows in the theatre
    const seatsPerRow = 10; // Number of seats per row
    const seats = [];

    for (let row = 1; row <= totalRows; row++) {
      for (let seatNumber = 1; seatNumber <= seatsPerRow; seatNumber++) {
        const seatId = `A${(row - 1) * seatsPerRow + seatNumber}`;
        const isSeatSelected = selectedSeats.includes(seatId);

        seats.push(
          <div
            key={seatId}
            className={`seat ${isSeatSelected ? 'selected' : ''}`}
            onClick={() => handleSeatClick(seatId)}
          >
            {seatId}
          </div>
        );
      }
      
      seats.push(<br key={`row-break-${row}`} />);
    }

    return seats;
  };

  return (
    <div className="seat-selection">
      <h2>Select Your Seats</h2>
      <div className="seat-layout">
        <div className="seat-type-heading">Premium Seats ({premiumSeats})</div>
        {renderSeats().slice(0, premiumSeats)}
        <br/>
        <div className="seat-type-heading">Standard Seats ({standardSeats})</div>
        {renderSeats().slice(premiumSeats)}
      </div>
      <button>Proceed to Pay
        
      </button>
    </div>
  );
};

export default SeatSelection;
