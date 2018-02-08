import React from "react";
import styled from "styled-components";
import Dot from "./Dot";

const StyledDots = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  z-index: 9999;
  padding: 5px 0;
`;

const Dots = ({ index, quantity, dotClick }) => {
  let dots = [];
  for (let i = 0; i < quantity; i++) {
    let isActive = i === index ? true : false;
    dots.push(<Dot key={i} active={isActive} dotClick={dotClick} />);
  }
  return <StyledDots>{dots}</StyledDots>;
};

export default Dots;
