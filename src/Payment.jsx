import React, { useState } from 'react';

const Payment = () => {
  const [totalAmount, setTotalAmount] = useState(0);

  const calculateTotalAmount = () => {
    const premiumSeatPrice = 250; // Price for premium seats in Rs
    const standardSeatPrice = 180; // Price for standard seats in Rs

    // Calculate the total amount based on your business logic
    const totalAmount = /* Calculate total amount based on selected seats */
    setTotalAmount(totalAmount);
  };

  const handleProceedToPay = () => {
    calculateTotalAmount();
    // Logic to proceed to payment page with totalAmount
    // This can involve navigation to a payment page or displaying a modal, etc.
    console.log('Total Amount:', totalAmount);
  };

  return (
    <div className="movie-details">
      {/* Render movie details */}
      <h2>Movie Name</h2>
      {/* Assume buttons for selecting premium and standard seats */}
      <button onClick={handleProceedToPay}>Proceed to Pay</button>
      {/* Display total amount */}
      <p>Total Amount: {totalAmount} Rs</p>
    </div>
  );
};

export default Payment;
