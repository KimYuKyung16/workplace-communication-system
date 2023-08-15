import React from "react";
import { styled } from "styled-components";

interface ButtonProps {
  text: string;
}

function Button({ text }: ButtonProps) {
  return (
    <>
      <ButtonDefault>{text}</ButtonDefault>
    </>
  );
}

const ButtonDefault = styled.button`
  width: 100%;
  background-color: #1c3150;
  border-radius: 10px;
  color: white;
  border: none;
  height: 63px;
  font-size: 2.2rem;
  box-shadow: 10px 10px 40px rgba(15, 34, 182, 0.16);
  cursor: pointer;
`;

export default Button;
