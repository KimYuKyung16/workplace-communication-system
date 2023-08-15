import React from "react";
import { styled } from "styled-components";
import Header from "./header";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DefaultLayout>
      <Main>
        <Header />
        <Content>{children}</Content>
      </Main>
    </DefaultLayout>
  );
}

const DefaultLayout = styled.div`
  background-color: #ffffff;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  height: 100vh;
  margin: 0 auto;
`;

const Content = styled.div`
  height: calc(100vh - 60px);
`;

export default Layout;
