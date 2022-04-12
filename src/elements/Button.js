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
  background-color: #FFB72B;
  color: #ffffff;
  padding: ${(props) => props.padding};
  box-sizing: border-box;
  border: 2px solid #FFB72B;
  border-radius: 10px;
  ${(props) => (props.margin? `margin: ${props.margin};` : "")}
`;

export default Button;