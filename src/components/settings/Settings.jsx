/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import "./settings.scss";
import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useValueTime } from "../../contexts/TimeValueContext";
import BoxValue from "../boxValue/BoxValue";

import { IoCheckmark } from "react-icons/io5";
import { useIsRunning } from "../../contexts/IsRunningContext";
import { useColor } from "../../contexts/ColorContext";
import { useFont } from "../../contexts/FontContext";

const Settings = ({ show, setShow }) => {
  const [active, setActive] = useState(false);
  const HTML = document.querySelector("html");
  const { valueTime } = useValueTime();
  const { isRunning } = useIsRunning();
  const { color, setColor } = useColor();
  const { font, setFont } = useFont();

  const handleChangeFont = (name) => {
    setFont(name);
    HTML.dataset.font = name;
  };

  const hanldeChangeColor = (name) => {
    setColor(name);
    HTML.dataset.color = name;
  };

  const animation = () => {
    setTimeout(() => {
      show && setActive(true);
    }, 20);
  };
  useEffect(() => {
    animation();
  }, [active]);

  return (
    <div className={`settings-popup ${active ? "show" : ""}`}>
      <div className="settings-popup__header">
        <h2>Settings</h2>
        <RxCross2
          onClick={() => {
            setShow(false);
          }}
        />
      </div>
      <div className="settings-popup__content">
        <div className="settings-popup__content-timing">
          <h3 className="title">time ( minutes )</h3>
          <div className="settings-popup__content-timing__boxes">
            {valueTime.map((value) => {
              return (
                <BoxValue
                  key={value.type}
                  nameTime={value.type}
                  timeValue={value.value}
                />
              );
            })}
          </div>
          {isRunning ? (
            <p className="error">The Timer is running you cannot change</p>
          ) : null}
        </div>
        <div className="settings-popup__content-font">
          <h3 className="title">font</h3>
          <div className="settings-popup__content-font__fonts">
            <div
              className={`box-font kumbh ${font === "kumbh" ? "active" : ""}`}
              onClick={() => handleChangeFont("kumbh")}>
              Aa
            </div>
            <div
              className={`box-font roboto ${font === "roboto" ? "active" : ""}`}
              onClick={() => handleChangeFont("roboto")}>
              Aa
            </div>
            <div
              className={`box-font space ${font === "space" ? "active" : ""}`}
              onClick={() => handleChangeFont("space")}>
              Aa
            </div>
          </div>
        </div>
        <div className="settings-popup__content-color">
          <h3 className="title">color</h3>
          <div className="settings-popup__content-color__colors">
            <div
              className={`box-color red ${color === "red" ? "active" : ""}`}
              onClick={() => hanldeChangeColor("red")}>
              <IoCheckmark />
            </div>
            <div
              className={`box-color aqua ${color === "aqua" ? "active" : ""}`}
              onClick={() => hanldeChangeColor("aqua")}>
              <IoCheckmark />
            </div>
            <div
              className={`box-color purple ${
                color === "purple" ? "active" : ""
              }`}
              onClick={() => hanldeChangeColor("purple")}>
              <IoCheckmark />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
