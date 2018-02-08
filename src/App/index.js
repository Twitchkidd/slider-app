import React from "react";
import styled from "styled-components";
import redBox from "../images/redBox.png";
import orangeBox from "../images/orangeBox.png";
import greenBox from "../images/greenBox.png";
import blueBox from "../images/blueBox.png";
import purpleBox from "../images/purpleBox.png";
import Slider from "./Slider";

const Rapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 960px 1fr;
  grid-template-rows: 295px;
`;

const images = [redBox, orangeBox, greenBox, blueBox, purpleBox];

const App = () => (
  <Rapper>
    <Slider images={images} />
  </Rapper>
);

export default App;
