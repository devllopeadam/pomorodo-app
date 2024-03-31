import { createContext, useContext, useState } from "react";

const ColorContext = createContext(null);

export const useColor = () => {
  return useContext(ColorContext);
};

export const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("red");
  return (
    <ColorContext.Provider value={{ color, setColor }}>
      {children}
    </ColorContext.Provider>
  );
};
