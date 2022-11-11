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
        <a
          className="whatsappLink desktop"
          href="http://web.whatsapp.com/send?text=Hola! Me gustaría alquilar la carpa para un evento.&phone=+543446584076&abid=+543446584076"
          target="_blank"
        >

            <Icon >
              {" "}
              <i className="bi bi-whatsapp"></i>
            </Icon>

        </a>
      ) : (
        <a
          className="whatsappLink mobile"
          href="whatsapp://send?text=Hola! Me gustaría alquilar la carpa para un evento.&phone=+543446584076&abid=+543446584076"
          target="_blank"
        >

            <Icon >
              {" "}
              <i className="bi bi-whatsapp"></i>
            </Icon>


        </a>


      )}
    </>
  );
};

const Icon = styled.a`
  color: grey;
  font-size: 1.2em;
  padding-left: 20px;
  cursor: pointer;

  &:hover {
    color: white;
  }
`;

const Button = styled.button`
  z-index: 100;
  background: transparent;
  // background: #c8c1ba;
  border-radius:35px;
  border: none;
  // border-color: grey;
  position: fixed;
  bottom: 15px;
  left: 15px;
  display: flex;
  justify-content: center;
  align-item: center;
  color: grey;
  box-shadow: none;
  width: 50px;
  height:30px;
  font-weight: 500;

  @media only screen and (max-width: 1120px) {
    font-size: 14px;

  }
  @media only screen and (max-width: 860px) {
    font-size: 14px;
 30%;
  }
  @media only screen and (max-width: 715px) {
    font-size: 12px;
  
  }
  @media only screen and (max-width: 550px) {
    font-size: 12px;

  }
  @media only screen and (max-width: 380px) {
    font-size: 12px;

  }
`;

const Text = styled.p`
  padding-top: 8px;
  padding-left: 10px;
`;

export default WthButton;
