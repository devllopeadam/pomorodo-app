import "./app.scss";
import TimeSwitch from "./components/timeSwitch/TimeSwitch";
import Logo from "./assets/images/logo.svg";
import Watch from "./components/watch/Watch";
import { TimeProvider } from "./contexts/TimeContext";
import { TimeValueProvider } from "./contexts/TimeValueContext";
import Settings from "./components/settings/Settings";
import { IoSettingsSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import { IsRunningProvider } from "./contexts/IsRunningContext";
import { ColorProvider, useColor } from "./contexts/ColorContext";
import { FontProvider } from "./contexts/FontContext";

function App() {
  const [show, setShow] = useState(false);

  const handleKey = (key) => {
    if (key === "Escape") {
      setShow(false);
    }
  };

  return (
    <div
      className={`app ${show ? "backdrop" : ""}`}
      tabIndex={1}
      onKeyUp={(e) => {
        handleKey(e.key);
      }}>
      <img
        src={Logo}
        alt="logo"
        className="logo"
      />
      <ColorProvider>
        <FontProvider>
          <TimeProvider>
            <TimeValueProvider>
              <IsRunningProvider>
                <TimeSwitch />
                <Watch />
                <div className="setting-icon">
                  <IoSettingsSharp onClick={() => setShow(true)} />
                </div>
                {show && (
                  <Settings
                    show={show}
                    setShow={setShow}
                  />
                )}
              </IsRunningProvider>
            </TimeValueProvider>
          </TimeProvider>
        </FontProvider>
      </ColorProvider>
    </div>
  );
}

export default App;
