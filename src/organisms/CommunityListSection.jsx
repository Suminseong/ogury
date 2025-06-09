"use client";
import styled from "styled-components";
import CommentCard from "../molecules/ReviewCard.jsx";
import { useEffect, useState } from "react";
import { db } from "../firebase.js";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Section = styled.section`
  display: flex;
  padding: 12px 0 86px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  background-color: #fff;
`;

const CommentsContainer = styled.div`
  display: flex;
  padding: 0px 20px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
`;

const CommunityListSection = () => {
  const navigate = useNavigate();
  const handleCardClick = (item) => {
    navigate(`/community/${item.date}`, { state: { item } });
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const snapshot = await getDocs(collection(db, "review"));
        const commentsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        //최신순 정렬
        const sortedItems = commentsData.sort(
          (a, b) => (b.date ?? 0) - (a.date ?? 0)
        );

        setData(sortedItems);
      } catch (error) {
        console.error("커뮤니티 데이터 불러오기 실패:", error);
      }
    };

    fetchComments();
  }, []);

  return (
    <Section>
      <CommentsContainer>
        {data.map((item, idx) => (
          <CommentCard
            key={idx}
            {...item}
            onClick={() => handleCardClick(item)}
          />
        ))}
      </CommentsContainer>
    </Section>
  );
};

export default CommunityListSection;
