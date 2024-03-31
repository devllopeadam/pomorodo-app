/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const TimeValueContext = createContext(null);

export const useValueTime = () => {
  return useContext(TimeValueContext);
};

export const TimeValueProvider = ({ children }) => {
  const [valueTime, setValueTime] = useState([
    { type: "pomorodo", value: 25 },
    { type: "short", value: 5 },
    { type: "long", value: 15 },
  ]);

  return (
    <TimeValueContext.Provider value={{ valueTime, setValueTime }}>
      {children}
    </TimeValueContext.Provider>
  );
};
