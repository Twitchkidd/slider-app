import React from "react";
import styled from "styled-components";

const StyledDot = styled.div`
  background: ${props => (props.active ? "#ffffff" : "#222222")};
  display: inline-block;
  padding: 10px;
  margin-right: 5px;
  cursor: pointer;
  border-radius: 50%;
`;

const Dot = ({ id, active, dotClick }) => (
  <StyledDot
    active={active}
    data-id={id}
    onClick={e => dotClick(parseInt(e.target.getAttribute("data-id"), 10))}
  />
);

export default Dot;
