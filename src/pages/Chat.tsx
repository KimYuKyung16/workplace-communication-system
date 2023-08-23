import React, { useState } from "react";
import { styled } from "styled-components";
import Header from "../components/common/header";
import ChatMessage from "../components/Chat/chatMessage";
import Message from "../components/Chat/message";

function Chat() {
  const [type, setType] = useState("total"); // 'total' or 'team'
  const [choiceMessage, setChoiceMessage] = useState<number | null>(2);

  return (
    <ChatLayout>
      <ChatList>
        <Header profile={false} />
        <ChatListType>
          <Type
            onClick={() => setType("total")}
            color={type === "total" ? "#ffffff" : "#cccccc"}
          >
            <TotalChat color={type === "total" ? "#ffffff" : "#cccccc"}>
              전체 메시지
            </TotalChat>
            <p>10</p>
          </Type>
          <Type
            onClick={() => setType("team")}
            color={type === "team" ? "#ffffff" : "#cccccc"}
          >
            <TeamChat color={type === "team" ? "#ffffff" : "#cccccc"}>
              팀 메시지
            </TeamChat>
            <p>5</p>
          </Type>
        </ChatListType>
        <List>
          {new Array(10).fill(0).map((x, index) => {
            return (
              <ChatMessage
                color={choiceMessage === index ? "#FFFEE3" : "#ffffff"}
              />
            );
          })}
        </List>
      </ChatList>

      <MessageList>
        <header>홍길동 (대리)</header>
        <List2>
          {new Array(2).fill(0).map((x, index) => {
            return (
              <Message
                color={choiceMessage === index ? "#FFFEE3" : "#ffffff"}
              />
            );
          })}
        </List2>
        <MessageSend>
          <input type="text" />
          <button>전송</button>
        </MessageSend>
      </MessageList>
    </ChatLayout>
  );
}

const ChatLayout = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  background-color: #1c3150;
`;

const ChatList = styled.aside`
  width: 45%;
  border-right: 1px solid #ffffff;
  height: 100%;
  background-color: #1c3150;
`;

const ChatListType = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: #1c3150;
  border-bottom: 3px solid #1c3150;
`;

const Type = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  background-color: ${(props) => props.color};
  border-radius: 25px 25px 0 0;
  overflow: hidden;
  padding: 13px 0;
  gap: 7px;
  cursor: pointer;

  & > p {
    background-color: #cc1414;
    color: #ffffff;
    font-size: 2rem;
    width: 30px;
    height: 30px;
    vertical-align: middle;
    text-align: center;
    border-radius: 100px;
  }
`;

const TotalChat = styled.button`
  font-size: 2.2rem;
  background-color: ${(props) => props.color};
  white-space: nowrap;
  cursor: pointer;
`;

const TeamChat = styled.button`
  font-size: 2.2rem;
  background-color: ${(props) => props.color};
  white-space: nowrap;
  cursor: pointer;
`;

const List = styled.div`
  background-color: #1c3150;
  padding: 10px;
  width: 100%;
  height: calc(100% - 120px);
  overflow-y: auto;
`;

const MessageList = styled.main`
  width: 55%;
  background-color: #ffffff;
  position: relative;

  & > header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    background-color: #1c3150;
    color: #ffffff;
    font-weight: bold;
    font-size: 1.7rem;
  }
`;

const List2 = styled.div`
  padding: 20px;
  background-color: #ffffff;
  height: calc(100% - 60px);
  overflow-y: auto;
`;

const MessageSend = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  bottom: 0;
  background-color: #1c3150;
  width: 100%;
  height: 60px;
  padding: 10px;
  gap: 5px;

  & > input {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 1.7rem;
  }

  & > button {
    width: 55px;
    height: 40px;
    white-space: nowrap;
    background-color: #2b4f85;
    border-radius: 5px;
    color: #ffffff;
    cursor: pointer;
  }
`;

export default Chat;
