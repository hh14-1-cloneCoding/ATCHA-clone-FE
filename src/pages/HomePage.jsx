import React from "react";
import { styled } from "styled-components";
import Header from "../components/Layout/Header";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Layout/Sidebar";

function HomePage() {
  return (
    <>
      <HomeWrap>
        <Sidebar />
        <ContentsArea>
          {/* 작업시작 */}
          <Container>
            <Outlet />
          </Container>
        </ContentsArea>
      </HomeWrap>
    </>
  );
}
export default HomePage;

const HomeWrap = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  align-items: center;
  align-items: flex-start;
  margin-top: 72px;
`;

// // const SidebarArea = styled.div`
// //   display: flex;
// //   overflow: auto;
// //   background: yellow;
// //   flex: 1;
// //   max-width: 240px;
// //   height: 100vh;
// // `;

const ContentsArea = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100vh;
`;

const Container = styled.main`
  position: relative;
  overflow-x: hidden;
  display: block;
  top: 25px;
  left: 240px;
  padding: 0 calc(3.5vw + 6px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
