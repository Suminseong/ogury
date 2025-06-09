"use client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { db } from "../firebase"; // firebase 연동 필요
import { collection, getDocs } from "firebase/firestore";

import styled from "styled-components";
import SearchBar from "../atoms/SearchBar";
import CategoryTabs from "../molecules/CategoryTabs";
import GonguListSection from "../organisms/GonguListSection";
import BottomNav from "../organisms/BottomNav";

const categories = [
  "전체",
  "생수",
  "생필품",
  "식품",
  "의류/학잠",
  "도서",
  "문구",
  "건강식품",
  "뷰티",
  "기타",
];

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
const StickyWrap = styled.div`
  position: sticky;
  top: 50px;
  background-color: #fff;
`;

const SumListCount = styled.div`
  display: flex;
  padding: 24px 20px 12px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;

  color: #38414a;
  font-family: Pretendard;
  font-size: 14px;
  line-height: 100%; /* 14px */
  letter-spacing: -0.35px;
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

function GonguListPage() {
  const [search, setSearch] = useState("");
  const [activeCat, setActiveCat] = useState("전체");
  const [gonguList, setGonguList] = useState([]);
  const navigate = useNavigate();

  // firebase 연동
  useEffect(() => {
    const fetchGonguList = async () => {
      try {
        const snapshot = await getDocs(collection(db, "gongu"));
        const list = snapshot.docs
          .map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
          .sort((a, b) => (b.date ?? 0) - (a.date ?? 0)); // 최신순 정렬

        setGonguList(list);
      } catch (error) {
        console.error("공구 리스트 불러오기 실패:", error);
      }
    };

    fetchGonguList();
  }, []);

  // 카테고리로 필터링
  const filteredList = gonguList.filter((item) =>
    activeCat === "전체" ? true : item.category === activeCat
  );

  // 검색어로 필터링 - 제목과 내용에 대해 검색
  const searchFilteredList = filteredList.filter((item) => {
    if (!search.trim()) return true; // 검색어가 없으면 모든 항목 표시

    const searchTerm = search.toLowerCase().trim();
    const title = (item.title || "").toLowerCase();
    const content = (item.body || "").toLowerCase();

    return title.includes(searchTerm) || content.includes(searchTerm);
  });

  // 검색 실행 함수 - 페이지 새로고침 방지
  const handleSearch = (e) => {
    if (e) {
      e.preventDefault(); // form submit 방지
    }
    console.log("검색 실행:", search);
  };

  // 검색어 초기화 함수
  const handleClearSearch = () => {
    setSearch("");
    console.log("검색어 초기화");
  };

  // 검색어 입력 처리 - 실시간 검색
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <PageWrapper>
      <StatusBar>
        <img src="/StatusBar.png" alt="StatusBar"></img>
      </StatusBar>
      <StickyWrap>
        {/* 검색 입력란 */}
        <SearchBar
          value={search}
          onChange={handleSearchChange}
          placeholder="제목, 내용으로 검색하세요"
          onSearch={handleSearch} // 검색 실행 함수
          onClear={handleClearSearch} // 검색어 초기화 함수
        />
        {/* 카테고리 탭 */}
        <CategoryTabs
          categories={categories}
          // 카테고리 
          active={activeCat}
          onChange={setActiveCat}
        />
      </StickyWrap>

      <SumListCount>
        {search.trim() ? `"${search}" 검색결과` : activeCat} {searchFilteredList.length}개
      </SumListCount>

      <GonguListSection
        filter={{ search, category: activeCat }} // 필터링 정보 전달
        gonguList={searchFilteredList}
      />
      <FloatingButton onClick={() => navigate("/gongu/new")}>
        <img src="/plus.svg" alt="" />
      </FloatingButton>
      <BottomNav />
    </PageWrapper>
  );
}


export default GonguListPage;
