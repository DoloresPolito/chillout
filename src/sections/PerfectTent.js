import React from "react";
import styled from "styled-components";
import Trail from "../components/Trail";

const PerfectTent = () => {
  return (
    <PerfectSection>
      <Trail
        data={[
          "TENEMOS LA CARPA PERFECTA PARA VOS",
          "TENEMOS LA CARPA PERFECTA PARA VOS",
        ]}
      />
    </PerfectSection>
  );
};

const PerfectSection = styled.section`
  height: 200px;
  background: white;
  color: grey;
  @media only screen and (max-width: 970px) {
  }

  .letter-changer {
    animation: changeLetter 8s linear;
  }
`;

const Sec = styled.span`
  background-color: white;
  height: 400px;
`;

export default PerfectTent;
