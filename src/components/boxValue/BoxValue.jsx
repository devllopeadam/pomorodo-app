/* eslint-disable react/prop-types */
import { useIsRunning } from "../../contexts/IsRunningContext";
import { useValueTime } from "../../contexts/TimeValueContext";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const BoxValue = ({ nameTime, timeValue }) => {
  const { valueTime, setValueTime } = useValueTime();
  const { isRunning } = useIsRunning();
  const handleChangeValue = (name, option) => {
    if (!isRunning) {
      option === "increment"
        ? setValueTime(
            valueTime.map((time) => {
              if (time.type === name) {
                let old = time.value;
                return {
                  ...time,
                  value: old + 1,
                };
              } else {
                return time;
              }
            })
          )
        : setValueTime(
            valueTime.map((time) => {
              if (time.type === name) {
                let old = time.value;
                if (old !== 1) {
                  return {
                    ...time,
                    value: old - 1,
                  };
                } else {
                  let old = time.value;
                  return {
                    ...time,
                    value: old,
                  };
                }
              } else {
                return time;
              }
            })
          );
    } else {
      return;
    }
  };

  return (
    <div className="settings-popup__content-timing__boxes-box">
      <p>{nameTime}</p>
      <div className="box-input">
        <input
          type="text"
          value={timeValue}
          readOnly
        />
        <MdKeyboardArrowUp
          onClick={() => handleChangeValue(nameTime, "increment")}
        />
        <MdKeyboardArrowDown
          onClick={() => handleChangeValue(nameTime, "decrement")}
        />
      </div>
    </div>
  );
};

export default BoxValue;
