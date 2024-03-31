/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const isRunningContext = createContext(null);

export const useIsRunning = () => {
  return useContext(isRunningContext);
};

export const IsRunningProvider = ({ children }) => {
  const [isRunning, setIsRunning] = useState(false);
  return (
    <isRunningContext.Provider value={{ isRunning, setIsRunning }}>
      {children}
    </isRunningContext.Provider>
  );
};
