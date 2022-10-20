import React from "react";
import styled from "styled-components";

class TypeWriter extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
    };

    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.unmounted = false;
    this.loopNum = 0;
    this.period = 8000;
    this.isDeleting = false;
    this.tick();
  }

  componentWillUnmount() {
    this.unmounted = true;
  }

  tick() {
    if (this.unmounted) {
      return;
    }

    const { data: toRotate } = this.props;
    const i = this.loopNum % toRotate.length;
    const fullTxt = toRotate[i];

    let newText = "";
    if (this.isDeleting) {
      newText = fullTxt.substring(0, this.state.text.length - 1);
    } else {
      newText = fullTxt.substring(0, this.state.text.length + 1);
    }

    let delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && newText === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && newText === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    this.setState({ text: newText });

    setTimeout(() => {
      this.tick();
    }, delta);
  }

  render() {
    return <Type className="typewriter">{this.state.text}</Type>;
  }
}

const Type = styled.span`
  background: white;
  color: grey;
  display: flex;
  justify-content: center;
  align-items:center;
  font-family: "GTWalsheimPro";
  font-style: normal;
  font-weight: 400;
  line-height: 139px;
  letter-spacing: 1.71671px;
  position: relative;
  font-size: 30px;

  @media only screen and (max-width: 970px) {
    font-size: 25px;
  }

  @media only screen and (max-width: 780px) {
    font-size: 20px;
  }

  @media only screen and (max-width: 520px) {
    font-size: 18px;
  }

  @media only screen and (max-width: 460px) {
    font-size: 15px;
  }
`;

export default TypeWriter;
