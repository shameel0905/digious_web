import React, { useState, useEffect } from "react";

const CountDownBar = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set countdown end date (one month from now)
    const endDate = new Date();
    endDate.setMonth(endDate.getMonth() + 1);
    endDate.setHours(23, 59, 59, 999); // End of day

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = endDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        // Countdown finished
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Calculate immediately
    calculateTimeLeft();

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <div className="countdown-bar">
      <div className="container">
        <span className="heading-text">
          Black Friday: <span>Get extra months free</span>
        </span>
        <div className="countdown">
          <div className="count_box days">
            <strong>{formatTime(timeLeft.days)}</strong>d
          </div>
          <span>:</span>
          <div className="count_box hours">
            <strong>{formatTime(timeLeft.hours)}</strong>h
          </div>
          <span>:</span>
          <div className="count_box minutes">
            <strong>{formatTime(timeLeft.minutes)}</strong>m
          </div>
          <span>:</span>
          <div className="count_box seconds">
            <strong>{formatTime(timeLeft.seconds)}</strong>s
          </div>
        </div>
      </div>

      <style jsx>{`
        .countdown-bar {
          background-color: #000;
          color: #fff;
          padding: 15px 0;
          text-align: center;
          font-family: Arial, sans-serif;
        }

        .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .heading-text {
          font-size: 18px;
          font-weight: bold;
        }

        .heading-text span {
          color: #ff4444;
        }

        .countdown {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 16px;
        }

        .count_box {
          display: flex;
          flex-direction: column;
          align-items: center;
          background: #333;
          padding: 8px 12px;
          border-radius: 6px;
          min-width: 50px;
        }

        .count_box strong {
          font-size: 20px;
          color: #ff4444;
          font-weight: bold;
        }

        .count_box span {
          font-size: 12px;
          color: #fff;
        }

        .countdown span {
          color: #2c5d8f;
          font-weight: bold;
          font-size: 18px;
        }

        /* Responsive design */
        @media (max-width: 768px) {
          .container {
            flex-direction: column;
            gap: 15px;
          }

          .heading-text {
            font-size: 16px;
          }

          .count_box {
            min-width: 45px;
            padding: 6px 10px;
          }

          .count_box strong {
            font-size: 18px;
          }
        }
      `}</style>
    </div>
  );
};

export default CountDownBar;