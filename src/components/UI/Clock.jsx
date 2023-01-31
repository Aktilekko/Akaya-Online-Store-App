import React, { useState, useEffect } from "react";
import "./clock.scss";

const Clock = () => {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  let interval;

  const countDown = () => {
    const destination = new Date("Jan 30, 2023").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const different = destination - now;
      const days = Math.floor(different / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (different % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((different % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((different % (1000 * 60)) / 1000);
    });
  };

  return (
    <div className="clock">
      <div className="clock__data">
        <div className="text-center">
          <h1 className="text-white fs-3 pb-2">10 </h1>
          <h5 className="text-white fs-6">Days</h5>
        </div>
        <span className="text-white fs-3">:</span>
      </div>

      <div className="clock__data">
        <div className="text-center">
          <h1 className="text-white fs-3 pb-2">10 </h1>
          <h5 className="text-white fs-6">Hours</h5>
        </div>
        <span className="text-white fs-3">:</span>
      </div>

      <div className="clock__data">
        <div className="text-center">
          <h1 className="text-white fs-3 pb-2">10 </h1>
          <h5 className="text-white fs-6">Minutes</h5>
        </div>
        <span className="text-white fs-3">:</span>
      </div>

      <div className="clock__data">
        <div className="text-center">
          <h1 className="text-white fs-3 pb-2">10 </h1>
          <h5 className="text-white fs-6">Seconds</h5>
        </div>
        <span className="text-white fs-3">:</span>
      </div>
    </div>
  );
};

export default Clock;
