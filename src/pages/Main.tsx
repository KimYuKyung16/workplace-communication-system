/* eslint-disable react/jsx-pascal-case */
import React, { useState } from "react";
import { styled } from "styled-components";
import Layout from "../components/common/layout";
import Employee from "../components/common/employee";

function Main_() {
  let [filter, setFilter] = useState<string>("total"); // total: 전체, team: 팀

  return (
    <Layout>
      <Main>
        <MainSearch>
          <input type="text" placeholder="이름을 입력해주세요" />
          <img src="/search_icon.svg" alt="검색" />
        </MainSearch>
        <EmployeeFilter>
          <FilterSpan_Total filter={filter} onClick={() => setFilter("total")}>
            전체
          </FilterSpan_Total>{" "}
          /{" "}
          <FilterSpan_Team filter={filter} onClick={() => setFilter("team")}>
            팀
          </FilterSpan_Team>
        </EmployeeFilter>
        <MainEmployeeList>
          {new Array(8).fill(0).map(() => (
            <Employee name="홍길동" state="in" position="대리" />
          ))}
        </MainEmployeeList>
      </Main>
    </Layout>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 60px);
  background-color: #1c3150;
`;

const MainSearch = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  width: 90%;
  height: 60px;
  background-color: #ffffff;
  gap: 10px;
  margin: 10px 0;
  padding: 0 10px;
  border-radius: 10px;
  overflow: hidden;

  & > input {
    // 검색창
    width: 100%;
    height: 100%;
    font-size: 2rem;
    color: #7a7a7a;

    &::placeholder {
      color: #bebebe;
      font-size: 1.5rem;
    }
  }

  & > img {
    width: 30px;
  }
`;

const EmployeeFilter = styled.p`
  align-self: self-end;
  color: #ffffff;
  font-size: 1.5rem;
  padding: 0 25px 10px 0px;
`;

interface filterProps {
  filter: string;
}

// 필터링: 전체
const FilterSpan_Total = styled.span<filterProps>`
  font-weight: ${(props) => (props.filter === "total" ? "bold" : "normal")};
`;
// 필터링: 팀
const FilterSpan_Team = styled.span<filterProps>`
  font-weight: ${(props) => (props.filter === "team" ? "bold" : "normal")};
`;

const MainEmployeeList = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 100%;
  background-color: #ffffff;
`;

export default Main_;
