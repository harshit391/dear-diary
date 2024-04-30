import React, { useState } from 'react';
import './daycounter.css'
import { Link } from 'react-router-dom';
const DayCounter = () => {
  const [currentDay, setCurrentDay] = useState(1);

  const increaseDay = () => {
    if (currentDay < 15) {
      setCurrentDay(currentDay + 1);
    }
  };

  const decreaseDay = () => {
    if (currentDay > 2) {
      setCurrentDay(currentDay - 1);
    }
  };

  return (
    <div className="counter">
        <h1 className="counter-heading">How long is your average period?</h1>
        <div className="counter-text">
          <button className="arrow" onClick={decreaseDay}> ◄ </button>
          <div className="day-circle" id="dayCircle">
            <span id="dayCount">{currentDay}</span>
          </div>
          <button className="arrow" onClick={increaseDay}> ► </button>
        </div>
        <Link to='/monthcounter' className="next-button">Next</Link>
    </div>
  );
};

export default DayCounter;
