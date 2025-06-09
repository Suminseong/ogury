"use client";
import styled from "styled-components";

import TitleHeader from "../molecules/TitleHeader";
import OngoingGroupBuys from "../organisms/OngoingGroupBuys";
import RecentGroupBuys from "../organisms/RecentGroupBuysSection";
import CommunitySection from "../organisms/CommunitySection";
import Welcome from "../molecules/Welcome";
import BottomNav from "../organisms/BottomNav";

// StatusBar
const StatusBar = styled.div`
  width: 402px;
  height: 50px;
  background: #fff;

  position: sticky;
  top: 0;
  z-index: 10;

  & > img {
    width: 100%;
  }
`;

const DashboardContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 402px;
  height: 100vh;

  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  align-items: center;
  font-family: "Pretendard", -apple-system, Roboto, Helvetica, sans-serif;
  background-color: #f3f4f8;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

const HighGroup = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: #fff;
  gap: 24px;
  padding: 20px 20px 24px;
`;
const Dashboard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const MainDashboard = () => {
  return (
    <DashboardContainer>
      {/* StatusBar */}
      <StatusBar>
        <img src="/StatusBar.png" alt="StatusBar"></img>
      </StatusBar>
      {/* 헤더 */}
      <TitleHeader
        state="Title"
        title={<img src="/Logo.svg" alt="logo" />}
        rightIcon={<img src="/alert.svg" alt="alert" />}
      />
      <HighGroup>
        <Dashboard>
          <Welcome />
          <OngoingGroupBuys />
        </Dashboard>
      </HighGroup>
      <MainContent>
        <RecentGroupBuys />
        <CommunitySection />
      </MainContent>
      {/* 일단 스크롤용 */}
      <div
        style={{ background: "#fff", width: "100%", minHeight: "86px" }}
      ></div>
      {/* 바텀네비 */}
      <BottomNav />
    </DashboardContainer>
  );
};

export default MainDashboard;
