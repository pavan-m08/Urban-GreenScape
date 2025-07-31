import React, { useEffect, useState } from 'react';
import '../styles/AnimatedStats.css';

const statsData = [
  { label: 'Gardens Created', value: 42 },
  { label: 'Volunteers', value: 120 },
  { label: 'Kg Produce Grown', value: 3500 },
  { label: 'Events Held', value: 27 },
];

function AnimatedStat({ value, label }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;
    let increment = end / 60;
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);
    return () => clearInterval(timer);
  }, [value]);
  return (
    <div className="stats-item">
      <div className="stats-value">{count.toLocaleString()}</div>
      <div className="stats-label">{label}</div>
    </div>
  );
}

function AnimatedStats() {
  return (
    <div className="stats-container">
      <div className="stats-card">
        {statsData.map((stat, idx) => (
          <AnimatedStat key={idx} value={stat.value} label={stat.label} />
        ))}
      </div>
    </div>
  );
}

export default AnimatedStats; 