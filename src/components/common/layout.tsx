import React from "react";
import { styled } from "styled-components";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DefaultLayout>
      <Main>{children}</Main>
    </DefaultLayout>
  );
}

const DefaultLayout = styled.div`
  background-color: #ffffff;
  width: 100vw;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  background-color: #843c3c;
  max-width: 500px;
  margin: 0 auto;
`;

export default Layout;
