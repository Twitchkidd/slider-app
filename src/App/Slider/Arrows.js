import React from "react";
import styled from "styled-components";
import leftArrowIcon from "../../images/slider-left-arrow.svg";
import rightArrowIcon from "../../images/slider-right-arrow.svg";

const StyledArrow = styled.div`
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f9f9f9;
  border-radius: 50%;
  cursor: pointer;
  transition: transform ease-in 0.1s;
  &:hover {
    transition: transform ease-in 0.1s;
    transform: scale(1.1);
  }
`;

const StyledRightArrow = styled(StyledArrow)`
  position: absolute;
  top: 50%;
  right: 25px;
  z-index: 999;
  color: #fff;
  img {
    transform: translate(2px, 0);

    &:focus {
      outline: 0;
    }
  }
`;

const StyledLeftArrow = styled(StyledArrow)`
  position: absolute;
  top: 50%;
  left: 25px;
  z-index: 999;
  color: #fff;
  img {
    transform: translate(-2px, 0);

    &:focus {
      outline: 0;
    }
  }
`;

const LeftArrow = props => {
  return (
    <StyledLeftArrow onClick={props.prevSlide}>
      <img src={leftArrowIcon} alt="" aria-hidden="true" />
    </StyledLeftArrow>
  );
};

const RightArrow = props => {
  return (
    <StyledRightArrow onClick={props.nextSlide}>
      <img src={rightArrowIcon} alt="" aria-hidden="true" />
    </StyledRightArrow>
  );
};

export { LeftArrow, RightArrow };
