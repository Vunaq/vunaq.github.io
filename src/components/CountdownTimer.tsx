"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 60,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    // Set launch date to 60 days from now
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 60);
    
    // Store launch date in localStorage to persist across visits
    const storedLaunchDate = localStorage.getItem("vunaq-launch-date");
    const targetDate = storedLaunchDate 
      ? new Date(storedLaunchDate) 
      : launchDate;
    
    if (!storedLaunchDate) {
      localStorage.setItem("vunaq-launch-date", targetDate.toISOString());
    }

    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();
      
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
        };
      }
      
      return { days: 0, hours: 0, minutes: 0 };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center gap-6">
      {/* Simple, clean number display */}
      <div className="text-[120px] md:text-[180px] lg:text-[220px] font-black text-white leading-none tracking-tighter">
        {String(value).padStart(2, "0")}
      </div>
      {/* Minimal label */}
      <div className="text-sm md:text-base uppercase tracking-[0.3em] text-white/40 font-light">
        {label}
      </div>
    </div>
  );

  return (
    <div className="flex gap-16 md:gap-24 lg:gap-32 justify-center items-center flex-wrap">
      <TimeUnit value={timeLeft.days} label="Days" />
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <TimeUnit value={timeLeft.minutes} label="Minutes" />
    </div>
  );
}