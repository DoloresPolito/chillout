import React, { useState, useEffect } from "react";
import styled from "styled-components";

const WthButton = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  const medium = 700;

  return (
    <Button>
      <span style={{ paddingTop: "8px" }}>
        {" "}
        <i className="bi bi-whatsapp"></i>
      </span>

      <Text>Escribinos por WhatsApp</Text>
    </Button>
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

  @media only screen and (max-width: 1120px) {
    width: 25%;
  }
  @media only screen and (max-width: 860px) {
    font-size: 15px;
    width: 30%;
  }
  @media only screen and (max-width: 715px) {
    font-size: 13px;
    width: 35%;
  }
  @media only screen and (max-width: 550px) {
    font-size: 12px;
    width: 45%;
  }
  @media only screen and (max-width: 380px) {
    font-size: 12px;
    width: 50%;
  }
`;

const Text = styled.p`
  padding-top: 8px;
  padding-left: 10px;
`;

export default WthButton;
