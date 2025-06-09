"use client";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

import TitleHeader from "../molecules/TitleHeader";
import { db } from "../firebase.js";
import { collection, getDocs } from "firebase/firestore";

const PageWrapper = styled.div`
  background: white;
  width: 402px;
  min-height: 100vh;
  font-family: Pretendard;
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
const ContentWrap = styled.div`
  display: flex;
  width: 402px;
  padding: 16px 20px;
  flex-direction: column;
  gap: 28px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #333;
  line-height: 30px;
  white-space: pre-line;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const GonguItem = styled.div`
  display: flex;
  padding: 12px;
  border-radius: 10px;
  background: #fff;
  border: 1px solid #fff;
  height: 72px;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;
`;

const GonguInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
  flex: 1;
`;

const ImagePlaceholder = styled.div`
  width: 48px;
  height: 48px;
  background: ${(props) =>
    props.image ? `url(${props.image}) center/cover no-repeat` : "#F7F7F7"};
  border-radius: 8px;
`;

const GonguText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const GonguTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #232428;
  line-height: 23.4px;
`;

const GonguDate = styled.div`
  font-size: 14px;
  color: #66686e;
  line-height: 18.2px;
`;

const CTA = styled.button`
  bottom: 26px;
  left: 20px;
  right: 20px;
  width: 100%;

  background: #f7f7f7;
  border-radius: 8px;
  border: none;
  padding: 16px 8px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: #aeafb6;

  cursor: pointer;
`; // 활성화 시 색상 변경 및 커서 변경

const SelectGongu = (props) => {
  const items = Array(5).fill({
    title: "테무 토마토 공구",
    date: "2025.05.10",
  });
  const navigate = useNavigate();
  const [selectedIdx, setSelectedIdx] = useState(null);

  const handleNext = () => {
    if (selectedIdx !== null) {
      const selectedItem = data.find((item) => item.id === selectedIdx);
      navigate("/community/new", { state: selectedItem }); // 선택한 아이템 전달
      console.log(selectedItem);
    }
  };

  const [data, setData] = useState([]);

  // firebase 9.0 이상 버전 대응 하려면 db.collection 대신 getDocs(collection(db, "gongu")) 사용
  // 공동 구매 데이터 중 isReviewed가 false인 데이터만 가져오기
  // 추후 participants 배열 필드의 길이와 finalnum 필드의 값이 일치하는지 확인하는 로직 추가 필요
  useEffect(() => {
    const fetchGonguData = async () => {
      try {
        const snapshot = await getDocs(collection(db, "gongu"));
        const allData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // isReviewed가 false인 데이터만 필터링
        const unreviewedList = allData.filter(
          (item) => item.isReviewed === false
        );

        const particpantsCompletedArray = unreviewedList.filter(
          (item) =>
            item.participant &&
            item.participant.length === item.finalnum
        );
        setData(particpantsCompletedArray);

        console.log("공동구매 참여 완료된 데이터:", unreviewedList);
        console.log("공동구매 참여 완료 + 인원 꽉:", particpantsCompletedArray);
        // 추후 이 데이터를 사용하여 참여 완료된 공동구매에 대한 리뷰 작성 페이지로 이동할 수 있음
      } catch (error) {
        console.error("공동구매 데이터 불러오기 실패:", error);
      }
    };

    fetchGonguData();
  }, []);

  
  const formattedDate = (data) => {
    const rawDate = new Date(Number(data));
    const year = rawDate.getFullYear();
    const month = String(rawDate.getMonth() + 1).padStart(2, "0");
    const day = String(rawDate.getDate()).padStart(2, "0");

    return `${year}.${month}.${day}`;
  };

  return (
    <PageWrapper>
      {/* StatusBar */}
      <StatusBar>
        <img src="/StatusBar.png" alt="StatusBar"></img>
      </StatusBar>
      {/* 헤더 */}
      <TitleHeader
        state="IconActionBar"
        iconType="close"
        onClick={() => navigate(-1)}
      />
      <ContentWrap>
        <Title>
          어떤 공동구매에 대한
          {"\n"}리뷰를 남겨볼까요?
        </Title>

        <ListContainer>
          {data.map((item) => (
            <GonguItem
              key={item.id}
              onClick={() => setSelectedIdx(item.id)}
              style={{
                border:
                  selectedIdx === item.id
                    ? "1px solid #4F8FFF"
                    : "1px solid #fff",
                background: selectedIdx === item.id ? "#eaf2ff" : "#fff",
              }}
            >
              <GonguInfo>
                <ImagePlaceholder image={item.images[0]} />
                <GonguText>
                  <GonguTitle>{item.title}</GonguTitle>
                  <GonguDate>참여일: {formattedDate(item.date)}</GonguDate>
                </GonguText>
              </GonguInfo>
            </GonguItem>
          ))}
        </ListContainer>
      </ContentWrap>
      <CTA
        onClick={handleNext}
        disabled={selectedIdx === null}
        style={{
          background: selectedIdx === null ? "#f7f7f7" : "#4F8FFF",
          color: selectedIdx === null ? "#aeafb6" : "#fff",
          cursor: selectedIdx === null ? "not-allowed" : "pointer",
        }}
      >
        다음
      </CTA>{" "}
      {/* GonguItem 중 하나 선택되면 활성화 되고, 그렇지 않으면 비활성화 가능하게*/}
    </PageWrapper>
  );
};

export default SelectGongu;
