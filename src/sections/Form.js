import React, { useState } from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Form = () => {

  const navigate = useNavigate();

  const frmContact = {
    userName: ``,
    userEmail: ``,
    userPhone: ``,
    date: ``,
    place: ``,
    message: ``,
  };
  const [contact, setContact] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };



  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(`service_lsilwkf`, `template_kirhqyk`, contact, `F-wmz4d9VI_6zEds5`)
      .then(
        (response) => {
          console.log(`SUCCESS!`, response.status, response.text);
          setContact(frmContact);
          navigate("/message");
        },
        (err) => {
          console.log(`FAILED...`, err);
        }
      );
  };
  return (
    <>
      <FormWrapper id="form">
        <StyledForm>
          <Parallax speed={5}>
            <Title>COTIZÁ TU EVENTO</Title>
          </Parallax>
          <Input
            placeholder="NOMBRE Y APELLIDO"
            type="text"
            required
            value={contact.userName}
            name="userName"
            onChange={handleChange}
          />

          <Input
            placeholder="EMAIL"
            value={contact.userEmail}
            onChange={handleChange}
            name="userEmail"
            type="text"
            required
          />
              <Input
            placeholder="TELÉFONO"
            value={contact.userPhone}
            onChange={handleChange}
            name="userPhone"
            type="text"
            required
          />

          <Input
            placeholder="LUGAR"
            value={contact.place}
            onChange={handleChange}
            name="place"
            type="text"
            required
          />

          <Input
            placeholder="FECHA"
            type="text"
            required
            value={contact.date}
            name="date"
            onChange={handleChange}
          />

          <Input
            name="message"
            placeholder="MENSAJE"
            onChange={handleChange}
            type="text"
            required
            value={contact.message}
          />

          {/* <br />
            <br />
            <h4 className="adicionales">ADICIONALES</h4>

            <label className="container">
              <p> PISOS DECK</p>

              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>

            <label className="container">
              FOGONEROS
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>

            <label className="container">
              ILUMINACIÓN
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>

            <label className="container">
              PAGINA WEB
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label> */}

          <Button onClick={handleSubmit}>ENVIAR</Button>
        </StyledForm>


      </FormWrapper>
    </>
  );
};

const Title = styled.h3`
  padding-bottom: 40px;
  font-family: "GTWalsheimPro";
  font-style: normal;
  font-size: 40px;
  color: #f6f4f3;
  font-weight: 500;
  letter-spacing: 5px;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 700px) {
    font-size: 50px !important;
  }
  @media only screen and (max-width: 600px) {
    font-size: 40px !important;
  }
  @media only screen and (max-width: 470px) {
    font-size: 30px !important;
  }
`;

const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: #d6d0cb;
`;

const StyledForm = styled.form`
  flex: 100%;

  list-style: none;
  text-decoration: none !important;
  color: grey !important;
  font-size: 15px !important;
  text-align: center;
  align-items: center;
  padding-top: 140px;
  max-width: 800px;
  font-weight: 300;
  letter-spacing: 2px;
  vertical-align: middle !important;

  @media only screen and (max-width: 1200px) {
    font-size: 13px;
  }

  @media only screen and (max-width: 630px) {
    font-size: 11px;
  }

  @media only screen and (max-width: 350px) {
    font-size: 10px;
  }
`;

const Input = styled.input`
  padding: 25px;
  width: 90%;
  height: 8px;
  margin: 0.5rem;
  background-color: #c8c1ba;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  color: grey;
  font-size: 15px;

  @media only screen and (max-width: 1200px) {
    font-size: 13px;
  }
`;
const Button = styled.button`
  color: white;
  font-size: 0.9em;
  background-color: #c8c1ba;
  border: #c3b091;
  padding: 5px;
  width: 130px;
  margin-top: 30px;
  font-weight: 600;
`;

export default Form;
