/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import "./watch.scss";
import { useEffect, useState } from "react";
import { useTime } from "../../contexts/TimeContext";
import { useValueTime } from "../../contexts/TimeValueContext";
import { useIsRunning } from "../../contexts/IsRunningContext";

const Watch = () => {
  const { time } = useTime();
  const { valueTime } = useValueTime();
  const [seconds, setSeconds] = useState();
  const [active, setActive] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const [valueToCut, setValueToCut] = useState();

  const { setIsRunning } = useIsRunning();

  const formatTime = (sec) => {
    const minutes = Math.floor(sec / 60);
    const secs = sec % 60;
    return `${minutes < 10 ? "0" + minutes : minutes}:${
      secs < 10 ? "0" + secs : secs
    }`;
  };

  useEffect(() => {
    setPercentage(0);
    setActive(false);
  }, [valueToCut]);

  useEffect(() => {
    if (seconds) {
      let value = 1220 / valueToCut;
      setPercentage((prev) => prev + value);
    }
  }, [seconds]);

  useEffect(() => {
    setIsRunning(false);
  }, [time]);

  useEffect(() => {
    let interval;
    if (active && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
        setIsRunning(true);
      }, 1000);
    } else if (seconds === 0) {
      clearInterval(interval);
      setIsRunning(false);
      setActive(false);
    }
    return () => clearInterval(interval);
  }, [active, seconds]);

  useEffect(() => {
    valueTime.forEach((value) => {
      if (value.type === time) {
        setSeconds(value.value * 60);
        setValueToCut(value.value * 60);
      }
    });
  }, [time, valueTime]);
  
  return (
    <div className="watch">
      <div className="watch-container">
        <svg>
          <circle
            cx="50%"
            cy="50%"
            r="45%"
            fill="none"
            style={
              percentage > 0
                ? { strokeDashoffset: -percentage }
                : { strokeDashoffset: 0 }
            }></circle>
        </svg>
        <div className="control-timing">
          <div className="time-value">
            {formatTime(seconds) && formatTime(seconds)}
          </div>
          <div
            className="control-time"
            onClick={() => setActive(!active)}>
            {active ? "pause" : "start"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watch;
