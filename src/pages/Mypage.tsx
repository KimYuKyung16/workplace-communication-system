import React from "react";
import { styled } from "styled-components";
import Layout from "../components/common/layout";
import Profile from "../components/Mypage/profile";

function Mypage() {
  return (
    <Layout>
      <Main>
        <Profile btnText="수정" btnColor="#999999" />
        <MessageBox>
          <h3>✉️ 상태 메시지</h3>
          <Message />
        </MessageBox>
      </Main>
    </Layout>
  );
}

const Main = styled.div`
  height: 100%;
`;

const MessageBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 30px 10px 30px;
  height: calc(100% - 150px);
  min-height: 300px;

  & > h3 {
    font-size: 1.8rem;
    font-weight: 500;
    padding-bottom: 10px;
  }
`;

const Message = styled.textarea`
  border: 1.5px solid #b0b0b0;
  border-radius: 10px;
  height: 85%;
  padding: 10px;
  font-size: 1.4rem;
  line-height: 2.3rem;
  letter-spacing: -1px;
  margin-bottom: 10px;
`;

export default Mypage;
