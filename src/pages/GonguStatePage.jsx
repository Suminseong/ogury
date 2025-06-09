import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";

import styled, { keyframes } from "styled-components";
import TitleHeader from "../molecules/TitleHeader";
import TabNavigation from "../molecules/TabNavigation ";
import GonguStateCard from "../molecules/GonguStateCard";
import BottomNav from "../organisms/BottomNav";

const StyledGonguStatePage = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  width: 402px;
  overflow-y: scroll;
  padding-bottom: 86px;

  &::-webkit-scrollbar {
    display: none;
  }
  font-family: Pretendard;
  background-color: #fff;
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

const GonguStateCardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px;
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 210px 0;
  color: #66686e;
  font-size: 14px;
  text-align: center;
  line-height: 1.5;
`;

const EmptyLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #4284ff;
  cursor: pointer;

  & > p {
    font-family: Pretendard;
    font-size: 14px;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: -0.35px;
  }

  & > span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

function GonguStatePage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("ongoing");
  const [gonguStateList, setGonguStateList] = useState([]); // 상태로 선언

  useEffect(() => {
    const fetchGonguState = async () => {
      const gonguCollection = collection(db, "gongu");
      const gonguSnapshot = await getDocs(gonguCollection);
      const list = [];
      const now = new Date();

      gonguSnapshot.forEach((doc) => {
        const data = doc.data();
        let deadlineDate;
        if (data.deadline?.seconds) {
          deadlineDate = new Date(data.deadline.seconds * 1000);
        } else {
          deadlineDate = new Date(data.deadline);
        }
        // isDone: true면 완료, false면 진행중
        const isDone = deadlineDate < now;
        list.push({ id: doc.id, ...data, isDone });
      });
      setGonguStateList(list);
    };
    fetchGonguState();
  }, []);

  return (
    <StyledGonguStatePage>
      <StatusBar>
        <img src="/StatusBar.png" alt="StatusBar"></img>
      </StatusBar>
      <TitleHeader state="Title" title="공구 현황" />
      {/* 탭네비 */}
      <TabNavigation
        activeKey={activeTab}
        onChange={setActiveTab}
        tabs={[
          { key: "ongoing", label: "진행중인 공구" },
          { key: "done", label: "완료된 공구" },
        ]}
      />
      {/* 카드 리스트 */}
      <GonguStateCardList>
        {gonguStateList.filter((gongu) =>
          activeTab === "ongoing" ? !gongu.isDone : gongu.isDone
        ).length === 0 ? (
          <EmptyState>
            <p>
              {activeTab === "ongoing"
                ? "진행중인 공구가 없어요."
                : "완료된 공구가 없어요."}
            </p>
            <EmptyLink onClick={() => navigate("/gongu/new")}>
              <p>새로운 공구 올리기</p>
              <span>
                <img src="/arrow-right-blue.svg" alt=">" />
              </span>
            </EmptyLink>
          </EmptyState>
        ) : (
          gonguStateList
            .filter((gongu) =>
              activeTab === "ongoing" ? !gongu.isDone : gongu.isDone
            )
            .map((gongu) => (
              <GonguStateCard key={gongu.id} gongu={gongu} />
            ))
        )}
      </GonguStateCardList>
      <BottomNav />
    </StyledGonguStatePage>
  );
}

export default GonguStatePage;
