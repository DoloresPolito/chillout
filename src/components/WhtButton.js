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
      <i className="bi bi-whatsapp"></i>
      <Text>Escribinos por WhatsApp</Text>
    </Button>
  );
};

const Button = styled.button`
  z-index: 100;
  background: transparent;
  background: #c3b091;
  border: 2px solid black;
  border-color: #c3b091;
  border-radius: 30px;
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: 20%;
  display: flex;
  justify-content: center;
  align-item: center;
  color: white;
  padding-top: 5px;
  box-shadow: none;
`;

const Text = styled.p`
  padding-left: 15px;

`;

export default WthButton;
