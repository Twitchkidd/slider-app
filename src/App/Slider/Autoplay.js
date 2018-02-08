import React from "react";
import styled from "styled-components";

const StyledAutoPlay = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  padding: 5px 10px;
  background: #ddd;
  color: #333;
  font-size: 15px;
`;

const Autoplay = ({ autoplay, toggle }) => {
  return (
    <StyledAutoPlay className="autoplay" onClick={toggle}>
      {autoplay ? <p>Disable Autoplay</p> : <p>Enable Autoplay</p>}
    </StyledAutoPlay>
  );
};

export default Autoplay;
