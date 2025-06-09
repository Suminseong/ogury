"use client";
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import GonguCardVertical from "../molecules/GonguCardVertical";
import { db } from "../firebase"; // firebase 연동 필요
import { collection, getDocs } from "firebase/firestore"; // firebase 연동 필요

const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: 16px 0;
  width: 100%;
  background-color: #fff;
  margin-top: 12px;

  font-family: Pretendard;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 20px;
`;

const SectionTitle = styled.h2`
  color: #232428;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  margin: 0;
`;

const ViewAll = styled.button`
  display: flex;
  align-items: center;
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 16px;
  flex-wrap: wrap;
  padding: 8px 20px;

  & > div {
    cursor: pointer;
  }
`;

const RecentGroupBuysSection = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = React.useState([]);
  const postsCollectionRef = collection(db, "gongu");
  React.useEffect(() => {
    const fetchPosts = async () => {
      try {
        const snapshot = await getDocs(postsCollectionRef);
        const postsData = snapshot.docs
          .map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
          .sort((a, b) => (b.date ?? 0) - (a.date ?? 0)); // 최신순 정렬

        setPosts(postsData);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <Section>
      <Header>
        <SectionTitle>최근 올라온 공구</SectionTitle>
        <ViewAll onClick={() => navigate("/gongu", { state: { posts } })}>
          <p>전체보기</p>
          <span>
            <img src="/arrow-right-16px.svg" alt="" />
          </span>
        </ViewAll>
      </Header>

      {/*  Grid에 들어가는 카드 수는 최대 4개가 되게 수정. */}
      <Grid>
        {posts.slice(0, 4).map((post) => (
          <div
            key={post.id}
            onClick={() => navigate(`/gongu/${post.id}`, { state: { post } })}
          >
            <GonguCardVertical
              {...post}
              current={(post.participant ?? []).length}
            />
          </div>
        ))}
      </Grid>
    </Section>
  );
};

export default RecentGroupBuysSection;
