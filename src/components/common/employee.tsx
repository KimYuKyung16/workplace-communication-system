import React, { useEffect, useState } from "react";
import { styled } from "styled-components";

interface EmployeeProps {
  state: string;
  name: string;
  position: string;
}

function Employee({ state, name, position }: EmployeeProps) {
  let [color, setColor] = useState<string>();

  useEffect(() => {
    if (state === "in") {
      // 출근
      setColor("#14CC73");
    } else if (state === "outsideWork") {
      // 외근
      setColor("#D1EF17");
    } else if (state === "leave") {
      // 휴가
      setColor("#000000");
    } else if (state === "out") {
      // 회사에 없음
      setColor("#CC1414");
    }
  }, [state]);

  return (
    <EmployeeLayout>
      <Profile src="/강아지.jpg" alt="직원 프로필" />
      <Name>
        {name} ({position})
      </Name>
      <State color={color} />
    </EmployeeLayout>
  );
}

const EmployeeLayout = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  height: 65px;
  border-bottom: 1px solid #c6c6c6;
  padding: 10px 10px;
  position: relative;
  cursor: pointer;
`;

const Profile = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 5px;
`;

const Name = styled.p`
  font-size: 1.7rem;
  font-weight: 500;
  color: #000000;
  padding-left: 20px;
`;

const State = styled.div`
  background-color: ${(props) => props.color};
  width: 15px;
  height: 15px;
  border-radius: 100%;
  position: absolute;
  right: 15px;
`;

export default Employee;
