import React, { useState, useEffect } from 'react';

const DateComponent = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    // Update the current date every minute (you can adjust the interval as needed)
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const formattedDate = () => {
    const options = {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    };

    return currentDate.toLocaleDateString('en-US', options);
  };

  return (
    <span className="h-date">
      {formattedDate()}
      <style jsx>{`
        .h-date {
          font-size: 12px;
          color: white;
          margin-left: 5px;
        }
      `}</style>
    </span>
  );
};

export default DateComponent;
