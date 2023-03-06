import React from "react";
import { ButtonStyled } from "./Button.style";

const Button = (props) => {
  return (
    <ButtonStyled type={props.type} onClick={props.onClick}>
      {props.children}
    </ButtonStyled>
  );
};

export default Button;
