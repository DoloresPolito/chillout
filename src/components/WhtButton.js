import React, { useState, useEffect } from "react";
import styled from "styled-components";

const WthButton = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  const medium = 1024;

  return (
    <>
      {width >= medium ? (
     <a className="whatsappLink desktop" href="http://web.whatsapp.com/send?text=Hola! Me gustaría alquilar la carpa para un evento.&phone=+543446584076&abid=+543446584076" target="_blank">
        <Button>
          <span style={{ paddingTop: "8px" }}>
            {" "}
            <i className="bi bi-whatsapp"></i>
          </span>

          <Text>Escribinos por WhatsApp</Text>
        </Button>
        </a>
      ) : (
 
          <a className="whatsappLink mobile" href="whatsapp://send?text=Hola! Me gustaría alquilar la carpa para un evento.&phone=+543446584076&abid=+543446584076" target="_blank">
        <Button>
          <span style={{ paddingTop: "8px" }}>
            {" "}
            <i className="bi bi-whatsapp"></i>
          </span>

          <Text>Escribinos por WhatsApp</Text>
        </Button>
        </a>
      )}
    </>
  );
};

const Button = styled.button`
  z-index: 100;
  background: transparent;
  background: #c8c1ba;
  border: 2px solid black;
  border-color: #c8c1ba;
  position: fixed;
  bottom: 15px;
  left: 15px;
  width: 20%;
  display: flex;
  justify-content: center;
  align-item: center;
  color: white;
  box-shadow: none;
  width: 260px;
  font-weight: 500;

  @media only screen and (max-width: 1120px) {
    font-size: 14px;
    width: 25%;
  }
  @media only screen and (max-width: 860px) {
    font-size: 14px;
    width: 30%;
  }
  @media only screen and (max-width: 715px) {
    font-size: 12px;
    width: 35%;
  }
  @media only screen and (max-width: 550px) {
    font-size: 12px;
    width: 50%;
  }
  @media only screen and (max-width: 380px) {
    font-size: 12px;
    width: 60%;
  }
`;

const Text = styled.p`
  padding-top: 8px;
  padding-left: 10px;
`;

export default WthButton;
