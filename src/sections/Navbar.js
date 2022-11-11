import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Menu from "../components/Menu";
import Tabs from "../components/Tabs";
import Hamburger from "hamburger-react";
import { Container } from "../styles/texts";

const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));

    window.onscroll = function () {
      setHeight(window.pageYOffset);
    };
  }, []);
  const [isOpen, setOpen] = useState(false);
  const medium = 700;

  return (
    <NavbarSection>
      {height <= 80 ? (
        <>
          <NavbarContainer className={!isOpen && "isClosed"}>
            {width >= medium ? (
              <Tabs mode={"large"} />
            ) : (
              <>
                <Hamburger
                  toggled={isOpen}
                  toggle={setOpen}
                  direction="right"
                />
                <Menu open={isOpen} />
              </>
            )}
          </NavbarContainer>
        </>
      ) : (
        <></>
      )}
    </NavbarSection>
  );
};

const NavbarSection = styled.section`
  position: absolute;
  z-index: 1;
  background: transparent;
  @media only screen and (max-width: 700px) {
    background: transparent;
  }
  position: fixed;
  top: 0;
  width: 100%;
  margin: auto;
  .hamburger-react {
    position: relative;
    z-index: 3;
    color: grey;
  }
`;

const NavbarContainer = styled(Container)`
  padding: 24px 0;
  margin-top: 0;
  margin-bottom: 0;
  @media only screen and (max-width: 700px) {
    padding: 10px 0;
    align-items: center;
  }
  display: flex;
  justify-content: space-between;
`;

export default Navbar;
