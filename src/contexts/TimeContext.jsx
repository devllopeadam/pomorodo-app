/* eslint-disable react/prop-types */
import { useState, useContext, createContext } from "react";

const TimeContext = createContext(null);

export const useTime = () => {
  return useContext(TimeContext);
};

export function TimeProvider({ children }) {
  const [time, setTime] = useState("pomorodo");
  return (
    <TimeContext.Provider value={{ time, setTime }}>
      {children}
    </TimeContext.Provider>
  );
}
