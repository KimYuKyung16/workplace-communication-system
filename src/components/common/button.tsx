import React from "react";
import { styled } from "styled-components";

interface ButtonProps {
  text: string;
  large?: boolean;
  onClick?: () => void;
}

function Button({ text, onClick, large }: ButtonProps) {
  return (
    <>
      <ButtonDefault onClick={onClick} $large={large}>
        {text}
      </ButtonDefault>
    </>
  );
}

const ButtonDefault = styled.button<{ $large: boolean | undefined }>`
  width: 100%;
  background-color: #1c3150;
  border-radius: 10px;
  color: white;
  border: none;
  height: 63px;
  font-size: ${(props) => (props.$large ? "2.2rem" : "1.8rem")};
  box-shadow: 10px 10px 40px rgba(15, 34, 182, 0.16);
  cursor: pointer;

  &:hover {
    background-color: #172842;
  }
`;

export default Button;
