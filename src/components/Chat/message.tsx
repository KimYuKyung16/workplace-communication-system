import React from "react";
import { styled } from "styled-components";

interface ChatMessageProps {
  color: string;
  reversed?: boolean;
}

function _Message({ color = "#1C3150", reversed = false }: ChatMessageProps) {
  return (
    <MessageLayout color={color} reversed={reversed}>
      <Message>
        <Content>안녕하세요. 저 홍길동입니다.</Content>
        <Date>오후 11:05</Date>
      </Message>
    </MessageLayout>
  );
}

const MessageLayout = styled.div<{ reversed: boolean }>`
  display: flex;
  justify-content: ${(props) => (props.reversed ? "flex-end" : "flex-start")};
  width: 100%;
  height: auto;
  padding-bottom: 20px;
`;

const Message = styled.div`
  justify-self: flex-end;
  max-width: 70%;
`;

const Content = styled.p`
  background-color: #1c3150;
  padding: 10px 15px;
  color: #ffffff;
  border-radius: 7px;
  font-size: 1.7rem;
  width: auto;
`;

const Date = styled.p`
  font-size: 1.4rem;
  padding-top: 5px;
  font-weight: 500;
`;

export default _Message;
