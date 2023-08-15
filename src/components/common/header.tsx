import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

function Header({ profile = true }: { profile?: boolean }) {
  const navigate = useNavigate();

  return (
    <HeaderLayout>
      <h1 onClick={() => navigate("/", { replace: true })}>Network 회사</h1>
      {profile && <Profile src="/강아지.jpg" alt="내 프로필" />}
    </HeaderLayout>
  );
}

const HeaderLayout = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1c3150;
  width: 100%;
  height: 60px;
  padding: 0 15px;
  color: #ffffff;
  position: relative;
`;

const Profile = styled.img`
  position: absolute;
  bottom: 5px;
  right: 15px;
  width: 40px;
  height: 40px;
  border-radius: 5px;
`;

export default Header;
