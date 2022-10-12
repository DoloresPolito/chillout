import React, { useState } from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";
import "../App.css";

const Form = () => {
  const path = window.location.pathname;

  const frmContact = { userName: ``, userEmail: ``, date:``, place:``, message: `` };
  const [contact, setContact] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });

  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("contact", contact)
    console.log("frmContact", frmContact)

    emailjs
      .send(`service_lsilwkf`, `template_zefnjzw`, contact, `F-wmz4d9VI_6zEds5`)
      .then(
        (response) => {
          console.log(`SUCCESS!`, response.status, response.text);
          setContact(frmContact);
          setShowMessage(true);
        },
        (err) => {
          console.log(`FAILED...`, err);
        }
      );
  };
  return (
    <>
       <Parallax speed={-8}>
      <FormWrapper id="contact">
        <StyledForm onSubmit={handleSubmit}>
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

          <br />
          <br />
          <h4 className="adicionales">ADICIONALES</h4>

          <label className="container">
            PISOS
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>

          <label className="container">
            FOGONEROS
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>

          <label className="container">
            GUIRNALDA DE LUCES
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>

          <label className="container">
            PAGINA WEB
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>

          <br />
          <br />

          <Button type="submit">ENVIAR</Button>
        </StyledForm>
      </FormWrapper>
      </Parallax>
    </>
  );
};

const FormWrapper = styled.div`
  margin-top: 90px;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: black;

`;

const StyledForm = styled.form`
  flex: 100%;
  height: 100vh;
  list-style: none;
  text-decoration: none !important;
  color: grey !important;
  font-size: 20px !important;
  text-align: center;
  align-items: center;
  padding-top: 140px;
  max-width: 800px;
  font-weight: 300;
  letter-spacing: 2px;
  vertical-align: middle !important;
`;

const Input = styled.input`
  padding: 25px;
  width: 90%;
  height: 8px;
  margin: 0.5rem;
  background-color: black;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  color: grey;
`;
const Button = styled.button`
  color: grey;
  font-size: 0.9em;
  background-color: #C3B091;
  border-radius: 30px;
  border: #C3B091;
  margin-bottom: 130px;
  padding: 10px;
  width: 150px;
`;

export default Form;
