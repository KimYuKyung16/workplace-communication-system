import React, { useState } from "react";
import { styled } from "styled-components";

interface MyProfileProps {
  btnVisible?: boolean;
  btnText?: string;
  btnColor?: string;
}

function Profile({ btnVisible = true, btnText, btnColor }: MyProfileProps) {
  let [state, setState] = useState<string>("out");

  return (
    <ProfileLayout>
      <ProfileImage src="/강아지.jpg" alt="프로필 사진" />
      <ProfileInfo>
        <ProfileRow>
          <NameRow>
            <h2>홍길동</h2>
            {state === "in" ? (
              <StateRow color="#14CC73">
                <State color="#14CC73" />
                <p>출근</p>
              </StateRow>
            ) : null}
            {state === "outsideWork" ? (
              <StateRow color="#D1EF17">
                <State color="#D1EF17" />
                <p>외근중</p>
              </StateRow>
            ) : null}
            {state === "leave" ? (
              <StateRow color="#000000">
                <State color="#000000" />
                <p>휴가중</p>
              </StateRow>
            ) : null}
            {state === "out" ? (
              <StateRow color="#CC1414">
                <State color="#CC1414" />
                <p>부재중</p>
              </StateRow>
            ) : null}
          </NameRow>
          <TardinessBtn state={state}>지각 사유</TardinessBtn>
        </ProfileRow>
        <h2>HP. 010-9999-9999</h2>
        {btnVisible ? <ReviseBtn color={btnColor}>{btnText}</ReviseBtn> : null}
      </ProfileInfo>
    </ProfileLayout>
  );
}

const ProfileLayout = styled.div`
  display: flex;
  height: 150px;
  padding: 20px 30px 40px 30px;
  gap: 20px;
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  & > h2 {
    font-size: 2.2rem;
    font-weight: 400;
    color: #343434;
  }
`;

const ProfileRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NameRow = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  & > h2 {
    font-size: 2.2rem;
    font-weight: 700;
  }
`;

const StateRow = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.color};
  gap: 3px;
  font-size: 1.2rem;
  font-weight: 500;
`;

const State = styled.div`
  width: 15px;
  height: 15px;
  background-color: ${(props) => props.color};
  border-radius: 100px;
`;

const ReviseBtn = styled.button`
  background-color: ${(props) => props.color};
  color: #ffffff;
  width: 90px;
  padding: 3px 0;
  border-radius: 10px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.14);
  cursor: pointer;

  &:hover {
    background-color: #8a8a8a;
  }
`;

const TardinessBtn = styled.button<{ state: string }>`
  display: ${(props) => (props.state === "out" ? "block" : "none")};
  background-color: #cc1414;
  color: #ffffff;
  padding: 5px 15px;
  border-radius: 10px;
  font-size: 1.4rem;
  white-space: nowrap;
  box-shadow: 5px 5px 20px rgba(15, 34, 182, 0.16);
  cursor: pointer;

  &:hover {
    background-color: #be1313;
  }
`;

export default Profile;
