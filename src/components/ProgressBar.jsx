import { useEffect, useState } from "react";
import {
  INTERVAL_INCREMENT,
  MIN,
  MAX,
  INTERVAL_SPEED_IN_MS,
} from "../constants";

export default function App() {
  const [bar, setBar] = useState(MIN);
  useEffect(() => {
    const interval = setInterval(() => {
      // console.log("interval running");
      setBar((prevBarValue) => {
        if (prevBarValue >= MAX) {
          clearInterval(interval);
        }
        return Math.min(prevBarValue + INTERVAL_INCREMENT, MAX);
      });
    }, INTERVAL_SPEED_IN_MS);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="container">
      <div
        style={{ transform: `translateX(${bar - MAX}%)` }}
        className="progress"
      ></div>
    </div>
  );
}
