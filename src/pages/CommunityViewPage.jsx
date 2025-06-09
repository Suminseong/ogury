import React from "react";
import styled from "styled-components";
import { useState, useRef } from "react";
import { useEffect } from "react";
import { db } from "../firebase.js";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { updateDoc, arrayUnion } from "firebase/firestore";

import StarRating from "../molecules/StarRating";
import TitleHeader from "../molecules/TitleHeader";
import BaroGo from "../molecules/BaroGo";
import Profile from "../molecules/Profile";
import Comment from "../molecules/Comment";
import Reply from "../molecules/Reply";

//페이지 크기가 깨지는 문제가 있음. GonguStatePage는 멀쩡한데...이상하네.
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
  width: 100%;
  max-width: 402px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0px;
  font-family: "Pretendard", -apple-system, Roboto, Helvetica, sans-serif;
  background-color: #ffffff;
  height: 100vh;
`;

const BodyContainer = styled.div`
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const CommentContainer = styled.div`
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 0px;
  width: 100%;
  background-color: #ffffff;
`;
const ImageContainer = styled.div`
  width: 402px;
  height: 352px;
  overflow-x: scroll;
  display: flex;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ImageSlide = styled.img`
  width: 402px;
  height: 352px;
  flex-shrink: 0;
  object-fit: cover;
  scroll-snap-align: start;
  scroll-snap-stop: always;
`;

const PaginationWrapper = styled.div`
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
`;

const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "#4284FF" : "#FFFFFF")};
  transition: background-color 0.3s;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 402px;
  height: 352px;
`;

const BodyContents = styled.div`
  color: var(--GRAY-GRAY400, #66686e);
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.4px;
`;
const Vertical = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
const Horizon = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2px;
`;

function getRelativeTime(timestamp) {
  const now = Date.now();
  const diff = now - timestamp;
  const seconds = diff / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;
  const weeks = days / 7;

  if (seconds < 60) return "방금전";
  if (minutes < 60) return `${Math.floor(minutes)} 분전`;
  if (hours < 24) return `${Math.floor(hours)} 시간전`;
  if (days < 7) return `${Math.floor(days)} 일전`;
  return `${Math.floor(weeks)} 주전`;
}

function CommunityViewPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageContainerRef = useRef(null);
  const navigate = useNavigate();
  const postId = useParams().id;

  const [post, setPost] = useState(null);
  // firebase 9.0 이상 버전 대응 하려면 db.collection 대신 getDocs(collection(db, "review")) 사용

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const docRef = doc(db, "review", postId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setPost({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log("문서가 존재하지 않습니다.");
        }
      } catch (error) {
        console.error("문서 불러오기 실패:", error);
      }
    };

    fetchPost();
  }, [postId]);

  const handleScroll = () => {
    const scrollLeft = imageContainerRef.current.scrollLeft;
    const index = Math.round(scrollLeft / 402);
    setCurrentIndex(index);
  };

  const handleBack = () => {
    // 여기에 뒤로가기 기능 넣기
    navigate(-1);
  };

  const handleBaroGo = () => {
    // 여기에 바로가기 기능 넣기. 해당 공구 글로 이동해야 함
    navigate(`/gongu/${post.id}`, { state: { item: post } });
  };

  // 댓글을 작성했을때 저장되는 데이터
  const AddComment = async (data) => {
    const now = new Date();
    const newCommentData = {
      id: Date.now(),
      time: Date.now(),
      comments: data,
    };

    try {
      const docRef = doc(db, "review", postId);
      await updateDoc(docRef, {
        comment: arrayUnion(newCommentData),
      });

      setPost((prev) => ({
        ...prev,
        comment: [...prev.comment, newCommentData],
      }));
    } catch (error) {
      console.error("댓글 작성 실패:", error);
    }
  };

  if (!post) return <div>불러오는 중...</div>;
  //여기에 스켈레톤 애니메이션 넣을수 있음.

  const rawDate = new Date(Number(post.date));

  const year = rawDate.getFullYear();
  const month = String(rawDate.getMonth() + 1).padStart(2, "0");
  const day = String(rawDate.getDate()).padStart(2, "0");

  const hours = String(rawDate.getHours()).padStart(2, "0");
  const minutes = String(rawDate.getMinutes()).padStart(2, "0");

  const formattedDate = `${year}.${month}.${day}`;
  const formattedTime = `${hours}:${minutes}`;

  return (
    <DashboardContainer>
      <StatusBar>
        <img src="/StatusBar.png" alt="StatusBar"></img>
      </StatusBar>
      <TitleHeader state="IconActionBar" onClick={handleBack} />

      {post.images && post.images.length > 0 && (
        <ImageWrapper>
          <ImageContainer ref={imageContainerRef} onScroll={handleScroll}>
            {post.images.map((img, index) => (
              <ImageSlide key={index} src={img.src} alt={`이미지${index}번`} />
            ))}
          </ImageContainer>

          <PaginationWrapper>
            {post.images.map((_, index) => (
              <Dot key={index} active={index === currentIndex} />
            ))}
          </PaginationWrapper>
        </ImageWrapper>
      )}

      <BodyContainer>
        <Vertical>
          <StarRating rating={post.rating} />
          <BaroGo onClick={handleBaroGo}>{post.title}</BaroGo>
        </Vertical>

        <Profile date={formattedDate} time={formattedTime} />
        <BodyContents>{post.bodys}</BodyContents>
      </BodyContainer>

      <CommentContainer>
        <Horizon>
          <p className="gray400">댓글</p>
          <p className="blue01">{post.comment.length}</p>
        </Horizon>
        {post.comment.map((item, index) => (
          <Comment
            key={item.id}
            ago={getRelativeTime(item.time)}
            text={item.comments}
            alt={`댓글${index}번`}
          />
        ))}
      </CommentContainer>
      <Reply onSubmit={AddComment} />
    </DashboardContainer>
  );
}

export default CommunityViewPage;
