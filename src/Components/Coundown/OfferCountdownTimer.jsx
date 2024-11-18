import React, { useState, useEffect } from "react";

const OfferCountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 10,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;

        seconds--;

        if (seconds < 0) {
          seconds = 59;
          minutes--;

          if (minutes < 0) {
            minutes = 59;
            hours--;

            if (hours < 0) {
              hours = 23;
              days--;
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-xs mx-auto p-4 bg-white shadow-md rounded">
      <div className="grid grid-cols-1 gap-2 text-center">
        <div className="bg-blue-100 p-2 rounded">
          <div className="text-2xl font-bold text-blue-800">
            {timeLeft.days}
          </div>
          <div className="text-sm text-blue-600">Days</div>
        </div>
        <div className="bg-green-100 p-2 rounded">
          <div className="text-2xl font-bold text-green-800">
            {timeLeft.hours}
          </div>
          <div className="text-sm text-green-600">Hours</div>
        </div>
        <div className="bg-yellow-100 p-2 rounded">
          <div className="text-2xl font-bold text-yellow-800">
            {timeLeft.minutes}
          </div>
          <div className="text-sm text-yellow-600">Minutes</div>
        </div>
        <div className="bg-red-100 p-2 rounded">
          <div className="text-2xl font-bold text-red-800">
            {timeLeft.seconds}
          </div>
          <div className="text-sm text-red-600">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default OfferCountdownTimer;
