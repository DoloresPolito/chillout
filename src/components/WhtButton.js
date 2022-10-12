import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Menu from "../components/Menu";
import Tabs from "../components/Tabs";
import Hamburger from "hamburger-react";
import { Container } from "../styles/texts";

const WthButton = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  const medium = 700;

  return (
    <Button>
      <Text>Escribinos por WhatsApp</Text>
    </Button>
  );
};

const Button = styled.button`
  z-index: 100;
  background: transparent;
  background: #C3B091;
  border: 2px solid black;
  border-color:#C3B091;
  border-radius:30px;
  position: fixed;
  bottom: 10px;
  right:10px;
  width: 20%;

`;

const Text = styled.p`
color:white;
padding-top:5px;
display:flex;
justify-content:center;
align-item:center;
box-shadow:none;

`;


export default WthButton;
