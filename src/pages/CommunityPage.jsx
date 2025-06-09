import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import BottomNav from "../organisms/BottomNav";
import CommunityListSection from "../organisms/CommunityListSection";
import TabNavigation from "../molecules/TabNavigation ";
import TitleHeader from "../molecules/TitleHeader";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 402px;
  height: 100vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  font-family: Pretendard;
  background-color: #fff;

  position: relative;
`;

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

const FloatingButton = styled.button`
  display: flex;
  width: 52px;
  height: 52px;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 1000px;
  background: var(--BLUE-BLUE01, #4284ff);

  position: fixed;
  bottom: 106px;
  right: 50%;
  transform: translateX(181px);

  cursor: pointer;
`;

function CommunityPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("review");

  return (
    <PageWrapper>
      <StatusBar>
        <img src="/StatusBar.png" alt="StatusBar"></img>
      </StatusBar>
      <TitleHeader
        state="Title"
        title="커뮤니티"
        rightIcon={<img src="/search.svg" alt="search" />}
      />
      {/* 탭네비 */}
      <TabNavigation
        activeKey={activeTab}
        onChange={setActiveTab}
        tabs={[
          { key: "review", label: "후기" },
          { key: "question", label: "질문" },
        ]}
      />
      <CommunityListSection />
      <FloatingButton onClick={() => navigate("/selectGongu")}>
        <img src="/plus.svg" alt="" />
      </FloatingButton>
      <BottomNav />
    </PageWrapper>
  );
}

export default CommunityPage;
