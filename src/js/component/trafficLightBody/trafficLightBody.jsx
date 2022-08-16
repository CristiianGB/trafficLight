import React, { useState, useEffect } from "react";
import "./trafficLightBodyStyles.css";

const TrafficLightBody = () => {

  const [color, setColor] = useState("");
  const [display, setDisplay] = useState("purpleDiv")


  const handleClic = () => {
    let interval = 0;
    setColor("red");
    setTimeout(() => {
      setColor("orange");
    }, 1000);
    setTimeout(() => {
      setColor("green");
    }, 2000);
    setTimeout(()=>{
      setColor("purple");
    }, 3000)
    let ciclos = setInterval(() => {
      interval == 1 ? clearInterval(ciclos) : interval++;
      setColor("red");
      setTimeout(() => {
        setColor("orange");
      }, 1000);
      setTimeout(() => {
        setColor("green");
      }, 2000);
      setTimeout(()=>{
        setColor("purple");
      }, 3000)
    } , 4000);
  };

  const shutDown = () => {
    color=="red" || "orange" || "green" || "purple" ? setColor("redLigthSelected"):setColor("red");
  } 

  const showHide = () => {
    setDisplay(!display)
      display==false?setDisplay("purpleDiv"):setDisplay("");
    (display)
  }

  const MakeItPurple = () => {
      return (
      <div id={display}
          onClick={() => {
            setColor("purple");
          }}
          className={color == "purple" ? "purpleLightSelected" : "purpleLight"}
        ></div>)
  }
  

  return (
    <>
      <div className="container bodyLight">
        <div
          onClick={() => {
            setColor("red");
          }}
          className={color == "red" ? "redLightSelected" : "redLight"}
        ></div>
        <div
          onClick={() => {
            setColor("orange");
          }}
          className={color == "orange" ? "orangeLightSelected" : "orangeLight"}
        ></div>
        <div
          onClick={() => {
            setColor("green");
          }}
          className={color == "green" ? "greenLightSelected" : "greenLight"}
        ></div>
        <MakeItPurple />
      </div>
      <div>
        <button
          className="css-button-sliding-to-bottom--green ms-5 mt-5"
          onClick={handleClic}
        >
          Cicla el tráfico! (3 vueltas)
        </button>
        <button
          className="css-button-sliding-to-top--blue me-5 float-end mt-5"
          onClick={showHide}
        >
         Añade/Quita el lila bb
        </button>
      </div>
      <div className="buttonShutDown">
      <button
          className="css-button-fully-rounded--red mx-3 mt-5"
          onClick={shutDown}
        >
          Apaga
        </button>
      </div>
    </>
  );
};

export default TrafficLightBody;
