import React from "react";
import { styled } from "styled-components";

interface ChatMessageProps {
  color: string;
}

function ChatMessage({ color = "#ffffff" }: ChatMessageProps) {
  return (
    <ChatMessageLayout color={color}>
      <Profile src="/강아지.jpg" alt="직원 프로필" />
      <Message>
        <Name>홍길동 (대리)</Name>
        <Content>
          안녕하세요. 저 홍길동입니다. 이러이러한 문제가 있어서 연락드립니다.
        </Content>
      </Message>
      <State>
        <p>3</p>
      </State>
    </ChatMessageLayout>
  );
}

const ChatMessageLayout = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.color};
  height: 75px;
  border-bottom: 1px solid #c6c6c6;
  padding: 10px 10px;
  position: relative;
  cursor: pointer;
  margin-bottom: 5px;
  border-radius: 10px;
  position: relative;
  gap: 10px;
  width: 100%;
`;

const Profile = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 5px;
`;

const Message = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: calc(100% - 90px);
`;

const Name = styled.p`
  font-size: 1.3em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: bold;
`;

const Content = styled.p`
  font-size: 1.6em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const State = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #cc1414;
  width: 25px;
  height: 25px;
  border-radius: 100%;
  position: absolute;
  right: 15px;
  position: absolute;

  & > p {
    color: #ffffff;
    font-size: 1.5em;
  }
`;

export default ChatMessage;
