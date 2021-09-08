import styles from '../styles/Timer.module.css';
import { useEffect, useState } from 'react';

export const Timer = () => {
  const [time, setTime] = useState('Loading...');
  useEffect(() => {
    setInterval(() => {
      const countDate = new Date('September 8, 2021 23:00:00 +05:30').getTime();
      const now = new Date().getTime();
      const gap = countDate - now;

      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;
      const textDay = Math.floor(gap / day);
      const textHour = Math.floor((gap % day) / hour);
      const textMinute = Math.floor((gap % hour) / minute);
      const textSecond = Math.floor((gap % minute) / second);
      setTime(`${textDay}d ${textHour}h ${textMinute}m ${textSecond}s Left`);
      // `${textHour}:${textMinute}:${textSecond}`
    }, 1000);
  }, []);
  return (
    <div className={styles.timer}>
      <div className={styles.countdown}>{time}</div>
    </div>
  );
};
