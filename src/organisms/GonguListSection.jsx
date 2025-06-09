"use client";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

import GonguListCard from "../molecules/GonguListCard";

// Styled Components
const PageContainer = styled.main`
  width: 100%;
  padding: 0 20px 86px;
  background-color: #fff;
  font-family: "Pretendard", sans-serif;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
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

// 컴포넌트
// 변경: filter prop을 받아 구조분해
// GonguListSection 컴포넌트
// 기본값 설정: filter는 빈 객체로, gonguList는 빈 배열로 초기화
const GonguListSection = ({ filter = {}, gonguList = [] }) => { // 기본값 설정
  // prop으로 전달받는 filter와 gonguList를 구조분해 할당
  // filter에서 search와 category 추출
  // search: 검색어, category: 카테고리 필터
  // 구조분해 할당을 통해 간편하게 사용
  // filter는 외부에서 전달받는 prop으로, 초기값은 빈 객체
  // gonguList는 외부에서 전달받는 prop으로, 초기값은 빈 배열
  // 이 컴포넌트는 공구 리스트를 보여주는 역할을 함
  const { search, category } = filter;
  // 상태 관리: gonguItems는 공구 아이템 리스트를 저장
  // 초기값은 빈 배열로 설정

  const [gonguItems, setGonguItems] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();

  // 더미 데이터 (fallback용 빈배열)
  const tempItems = [];

  useEffect(() => {
    if (gonguList.length > 0) {
      setGonguItems(gonguList);
    } else if (location.state?.items) {
      setGonguItems(location.state.items);
    } else {
      const fetchFromFirestore = async () => {
        try {
          const snapshot = await getDocs(collection(db, "gongu"));
          const fetchedItems = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          //최신순 정렬
          const sortedItems = fetchedItems.sort(
            (a, b) => (b.date ?? 0) - (a.date ?? 0)
          );

          setGonguItems(sortedItems);
        } catch (err) {
          console.error("공구 리스트 불러오기 실패:", err);
          setGonguItems([]); // 실패 시 fallback
        }
      };
      fetchFromFirestore();
    }
  }, [gonguList, location.state]);

  // 상세 페이지 이동 핸들러
  const handleCardClick = (item) => {
    navigate(`/gongu/${item.id}`, { state: { item } });
  };

  // 필터링 로직
  let filtered = gonguItems;
  if (category && category !== "전체") {
    filtered = filtered.filter((item) => item.category === category);
  }
  if (search) {
    const keyword = search.toLowerCase();
    filtered = filtered.filter(
      (item) =>
        item.title?.toLowerCase().includes(keyword) ||
        item.desc?.toLowerCase().includes(keyword)
    );
  }

  return (
    <PageContainer>
      {filtered.length > 0 ? (
        <List>
          {filtered.map((item, idx) => (
            <GonguListCard
              key={item.id || idx}
              title={item.title}
              body={item.body}
              price={parseInt(item.price / item.finalnum)}
              deadline={item.deadline}
              current={item.participant?.length || 0}
              total={item.finalnum}
              image={item.images?.[0]}
              onClick={() => handleCardClick(item)}
            />
          ))}
        </List>
      ) : (
        <EmptyState>
          <p>진행중인 공구가 없어요.</p>
          <EmptyLink onClick={() => navigate("/gongu/new")}>
            <p>새로운 공구 올리기</p>
            <span>
              <img src="/arrow-right-blue.svg" alt=">" />
            </span>
          </EmptyLink>
        </EmptyState>
      )}
    </PageContainer>
  );
};

export default GonguListSection;
