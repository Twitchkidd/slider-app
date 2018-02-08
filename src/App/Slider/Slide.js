import React from "react";
import styled from "styled-components";

const StyledSlide = styled.div`
  display: inline-block;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: 50% 60%;
  background-repeat: no-repeat;
`;

const Slide = ({ image }) => <StyledSlide className="slide" image={image} />;

export default Slide;
