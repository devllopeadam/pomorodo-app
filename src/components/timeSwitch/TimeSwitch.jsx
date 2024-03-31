import "./timeswitch.scss";
import { useTime } from "../../contexts/TimeContext";
const TimeSwitch = () => {
  const { time, setTime } = useTime();

  return (
    <div className="time-switch">
      <div className={`time ${time === "pomorodo" ? "active" : ""}`}>
        <p
          onClick={() => {
            setTime("pomorodo");
          }}>
          pomorodo
        </p>
      </div>
      <div className={`time ${time === "short" ? "active" : ""}`}>
        <p
          onClick={() => {
            setTime("short");
          }}>
          short break
        </p>
      </div>
      <div className={`time ${time === "long" ? "active" : ""}`}>
        <p
          onClick={() => {
            setTime("long");
          }}>
          long break
        </p>
      </div>
    </div>
  );
};

export default TimeSwitch;
