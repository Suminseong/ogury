"use client";
import React from "react";
import styled from "styled-components";
import CommentCard from "../molecules/ReviewCard";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../firebase.js";
import { collection, getDocs } from "firebase/firestore";

const Section = styled.section`
  display: flex;
  padding: 16px 0px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  background-color: #fff;
`;

const SectionHeader = styled.div`
  display: flex;
  padding: 8px 20px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

const Title = styled.h2`
  color: #232428;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.4px;
`;

const ViewAll = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  background: none;
  border: none;
  color: #66686e;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  padding: 0;

  & > span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const CommentsContainer = styled.div`
  display: flex;

  gap: 16px; /* 아이템 사이 간격 (선택사항) */
  padding: 0px 20px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
`;

const CommunitySection = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const snapshot = await getDocs(collection(db, "review"));
        const commentsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        .sort((a, b) => (b.date ?? 0) - (a.date ?? 0)); // 최신순 정렬

        setData(commentsData);
      } catch (error) {
        console.error("커뮤니티 데이터 불러오기 실패:", error);
      }
    };

    fetchComments();
  }, []);

  return (
    <Section>
      <SectionHeader>
        <Title>커뮤니티</Title>
        <ViewAll onClick={() => navigate("/community")}>
          <p>전체보기</p>
          <span>
            <img src="/arrow-right-16px.svg" alt="" />
          </span>
        </ViewAll>
      </SectionHeader>

      <CommentsContainer>
        {data.length === 0 ? (
          // 게시물 없을때 여기에 만들기
          <p style={{ color: "#999", fontSize: "14px" }}>게시물이 없어요</p>
        ) : (
          data
            .slice(0, 5)
            .map((item, idx) => (
              <CommentCard
                key={item.id || idx}
                {...item}
                onClick={() => navigate(`/community/${item.date}`)}
              />
            ))
        )}
      </CommentsContainer>
    </Section>
  );
};

export default CommunitySection;
