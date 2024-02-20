import { useEffect, useState } from "react";

const CountdownClock = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date("2024-03-09");
    const currentDate = new Date();

    const difference = eventDate.getTime() - currentDate.getTime();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const { days, hours, minutes, seconds } = timeLeft;
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: 20 }}>
      <div className="countdown-wrapper">
        <div className="countdown-box">
          {days}
          <span className="legend">Ngày</span>
        </div>
        <div className="countdown-box">
          {hours}
          <span className="legend">Giờ</span>
        </div>
        <div className="countdown-box">
          {minutes}
          <span className="legend">Phút</span>
        </div>
        <div className="countdown-box">
          {seconds}
          <span className="legend">Giây</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownClock;
