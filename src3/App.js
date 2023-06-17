import React, { useState, useEffect } from 'react';

const RideCard = ({ ride }) => {
  const { RideName, RideImage, Amount, TimeSlot } = ride;

  return (
    <div className="ride-card">
      <img src={RideImage} alt={RideName} />
      <h3>{RideName}</h3>
      <p>Amount: {Amount}</p>
      <p>Time Slot: {TimeSlot.join(', ')}</p>
    </div>
  );
};

const RideCheckout = ({ selectedRides }) => {
  const [otp, setOtp] = useState('');

  const handleProceedToPayment = () => {
    // Generate a random OTP
    const randomOtp = Math.floor(1000 + Math.random() * 9000);
    setOtp(randomOtp);
    console.log(`OTP: ${randomOtp}`);
  };

  return (
    <div>
      <h2>Selected Rides</h2>
      {selectedRides.map((ride, index) => (
        <div key={index}>
          <h3>{ride.RideName}</h3>
          <p>Amount: {ride.Amount}</p>
          <p>Time Slot: {ride.TimeSlot.join(', ')}</p>
        </div>
      ))}
      <button onClick={handleProceedToPayment}>Proceed to Payment</button>
      {otp && <p>Your OTP: {otp}</p>}
    </div>
  );
};

const App = () => {
  const [rides, setRides] = useState([]);
  const [selectedRides, setSelectedRides] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Simulate loading rides from an API
    setIsLoading(true);
    // Replace this fetch with your actual API call
    fetch('/api/rides')
      .then((response) => response.json())
      .then((data) => {
        setRides(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error loading rides:', error);
        setIsLoading(false);
      });
  }, []);

  const handleLoadMoreRides = () => {
    // Load additional rides, e.g., next 20 records
    // Replace this logic with your actual pagination or lazy loading implementation
    console.log('Load more rides');
  };

  const handleRideSelection = (ride) => {
    // Add or remove the selected ride based on its current state
    setSelectedRides((prevSelectedRides) => {
      const rideIndex = prevSelectedRides.findIndex(
        (selectedRide) => selectedRide.RideName === ride.RideName
      );
      if (rideIndex === -1) {
        return [...prevSelectedRides, ride];
      } else {
        const updatedSelectedRides = [...prevSelectedRides];
        updatedSelectedRides.splice(rideIndex, 1);
        return updatedSelectedRides;
      }
    });
  };

  return (
    <div className="App">
      <h1>Kids Ride Management</h1>
      {isLoading ? (
        <p>Loading rides...</p>
      ) : (
        <>
          <div className="ride-list">
            {rides.slice(0, 20).map((ride, index) => (
              <div
                key={index}
                className={`ride-item ${
                  selectedRides.find(
                    (selectedRide) => selectedRide.RideName === ride.RideName
                  ) ? 'selected' : ''
                }`}
                onClick={() => handleRideSelection(ride)}
              >
                <RideCard ride={ride} />
              </div>
            ))}
          </div>
          <button onClick={handleLoadMoreRides}>Load More</button>
          {selectedRides.length > 0 && (
            <RideCheckout selectedRides={selectedRides} />
          )}
        </>
      )}
    </div>
  );
};

export default App;
