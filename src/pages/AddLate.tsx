import React from "react";
import { styled } from "styled-components";
import Layout from "../components/common/layout";
import Button from "../components/common/button";

function AddLate() {
  return (
    <Layout>
      <Main>
        <TardinessBtn>지각 사유</TardinessBtn>
        <MessageBox>
          <Message />
          <Button text="전송하기" />
        </MessageBox>
      </Main>
    </Layout>
  );
}

const Main = styled.div`
  height: 100%;
  padding: 20px 30px 10px 30px;
`;

const TardinessBtn = styled.button`
  background-color: #cc1414;
  color: #ffffff;
  padding: 5px 15px;
  margin-bottom: 10px;
  border-radius: 10px;
  font-size: 1.4rem;
  white-space: nowrap;
  box-shadow: 5px 5px 20px rgba(15, 34, 182, 0.16);
  cursor: pointer;

  &:hover {
    background-color: #be1313;
  }
`;

const MessageBox = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 50px);
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

export default AddLate;
