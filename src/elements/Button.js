import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { text, _onClick, children, margin, width, padding } = props;

  const styles = {
    margin: margin,
    width: width,
    padding: padding,
  };

  return (
    <React.Fragment>
      <ElButton {...styles} onClick={_onClick}>{text? text : children}</ElButton>
    </React.Fragment>
  );
};

Button.defaultProps = {
  text: false,
  children: null,
  _onClick: () => {},
  margin: false,
  width: '',
  padding: false,
};

const ElButton = styled.button`
  width: ${(props) => props.width};
  background: none;
  color: #2474C2;
  font-size: 16px;
  font-weight: 800;
  padding: ${(props) => props.padding};
  box-sizing: border-box;
  border: none;
  border-radius: 10px;
  ${(props) => (props.margin? `margin: ${props.margin};` : "")}
  transition: 0.2s;
  
  &:hover {
    color: #ffa72a;
  }
`;

export default Button;