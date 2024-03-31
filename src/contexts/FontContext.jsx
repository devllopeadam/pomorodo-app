import { createContext, useContext, useState } from "react";

const FontContext = createContext(null);

export const useFont = () => {
  return useContext(FontContext);
};

export const FontProvider = ({ children }) => {
  const [font, setFont] = useState("kumbh");
  return (
    <FontContext.Provider value={{ font, setFont }}>
      {children}
    </FontContext.Provider>
  );
};
