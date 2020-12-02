import React from 'react';
import styled from 'styled-components';

const ColorBox = styled.div`
  width: 180px;
  height: 180px;
  display: inline-block;
  background-color: ${props => props.color};
  :hover {
    cursor: pointer;
  }
`;
const Box = props => {
  return (
    // return a ColorBox object and pass your onClick props and color props as well as the id
  );
};

export default Box;