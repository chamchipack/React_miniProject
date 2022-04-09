import React from "react";
import styled from "styled-components";

const Input = (props) => {

  const {size, padding, margin, placeholder, label} = props;

  const styles = { size: size, margin: margin, padding: padding, placeholder: placeholder, label: label };

  return (
    <React.Fragment>
      <Label>{label}</Label>
      <ElInput {...styles} />
    </React.Fragment>
  )
}

export default Input;

const ElInput = styled.input`
  padding: 8px 8px;
`;

const Label = styled.label`
  font-size: 14px;
  margin-bottom: 5px;
`;