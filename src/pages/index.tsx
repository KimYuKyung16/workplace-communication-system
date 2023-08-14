import React from "react";
import { styled } from "styled-components";
import Button from "../components/button";

function index() {
  return (
    <IndexLayout>
      <Header>
        <h1>Network 회사</h1>
      </Header>
      <Main>
        <MainLogo>
          <img src="/image/network_img.png" alt="회사 로고" />
        </MainLogo>
        <MainLogin>
          <p>Login</p>
          <LoginItem>
            <label htmlFor="employee-identification-number">사번</label>
            <input type="text" id="employee-identification-number" />
          </LoginItem>
          <LoginItem>
            <label htmlFor="password">비밀번호</label>
            <input type="password" id="password" />
          </LoginItem>
          <Button text="로그인" />
          <p>Network 회사 구성원만 이용할 수 있습니다.</p>
        </MainLogin>
      </Main>
    </IndexLayout>
  );
}

const IndexLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  background-color: #4274bf;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 70px;
  background-color: #4274bf;
  color: white;
  padding-left: 30px;
  font-size: 1.5rem;

  @media screen and (max-width: 768px) {
    height: 100px;
    font-size: 1.2rem;
    justify-content: center;
    align-items: flex-end;
    margin-bottom: 20px;
  }
`;

const Main = styled.div`
  display: flex;
  padding: 0 4vw 0px 4vw;
  width: 100%;
  height: calc(100vh - 70px);
  background-color: #4274bf;

  @media screen and (max-width: 768px) {
    justify-content: center;
    padding: 0;
    padding-bottom: 50px;
    height: 100%;
  }
`;

const MainLogin = styled.div`
  width: 40%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  color: #4274bf;
  border-radius: 20px;
  padding: 50px 5vw 60px 5vw;
  gap: 5px;
  min-height: 500px;
  box-shadow: 20px 20px 50px rgba(15, 34, 182, 0.16);

  & > p:first-child {
    font-size: 4.5rem;
    padding-bottom: 10px;
  }

  & > p:nth-child(3) {
    margin-bottom: 10px;
  }

  & > p:last-child {
    align-self: flex-end;
    font-size: 1.5rem;
    margin-top: 15px;
  }

  @media screen and (max-width: 768px) {
    width: 80%;
    min-height: 350px;
    padding: 20px 7vw 20px 7vw;

    & > p:first-child {
      font-size: 3rem;
      padding-bottom: 10px;
    }
  }
`;

const MainLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;

  & > img {
    width: 70%;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const LoginItem = styled.p`
  display: flex;
  flex-direction: column;
  width: 100%;

  & > label {
    color: #4274bf;
    font-size: 2rem;
  }

  & > input {
    border: 1px solid #d2d2d2;
    border-radius: 10px;
    height: 60px;
    padding: 10px;
    font-size: 2.5rem;
    color: #5b5b5b;
    box-shadow: 5px 5px 10px rgba(15, 34, 182, 0.16);

    &:checked {
      border: 1px solid #4274bf;
    }
    &:hover {
      border: 1px solid #4274bf;
    }
  }

  @media screen and (max-width: 768px) {
    & > label {
      color: #4274bf;
      font-size: 1.5rem;
    }
  }
`;

export default index;
