import React, { useEffect } from "react";
import styled from "styled-components";
import { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import DeadlineBadge from "../atoms/DeadlineBadge";

import TitleHeader from "../molecules/TitleHeader";
import Profile from "../molecules/Profile";
import Info from "../molecules/Info";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase"; // firebase 설정 파일 import
import { collection, getDocs } from "firebase/firestore";
import { doc, updateDoc } from "firebase/firestore";

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
  width: 402px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0px;
  font-family: "Pretendard", -apple-system, Roboto, Helvetica, sans-serif;
  background-color: #ffffff;
`;

const BodyContainer = styled.div`
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
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
  scroll-snap-stop: always; /* 이 부분 추가! */
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
  margin: 24px 0 28px 0;
`;
const TitleVertical = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const TitleName = styled.h1`
  color: var(--GRAY-GRAY600, #232428);
  font-size: 20px;
  font-weight: 700;
  line-height: 130%; /* 26px */
  letter-spacing: -0.5px;
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 12px;
`;

// 프로그레스 바 부분

const CurrentState = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 0px;
  width: 100%;
  margin-bottom: 160px;
`;
const CurrentTitle = styled.div`
  color: var(--GRAY-GRAY600, #232428);
  margin-bottom: 18px;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 27px */
`;
const ProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const CurrentText = styled.p`
  color: #3d3b3b;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.64px;
`;
const CompleteTag = styled.div`
  display: flex;
  padding: 6px 8px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 4px;
  background: var(--BLUE-BLUE02, #ebf2ff);

  color: var(--BLUE-BLUE01, #4284ff);
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.35px;
`;

const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Middle = styled.div`
  display: flex;
`;
const ProgressBar = styled.div`
  position: relative;
  width: 100%;
  background-color: #e6e6e6;
  height: 10px;
  border-radius: 100px;
  overflow: hidden;
`;
const BlueBar = styled.div`
  width: ${(props) => props.width}%;
  background-color: #4284ff;
  height: 10px;
  border-radius: 100px;
  position: absolute;
`;
const Bottom = styled.div`
  display: flex;
`;
const ProfileContainer = styled.div`
  display: flex;
  margin-left: 4px;
  margin-right: 8px;
`;
const WithAlign = styled.div`
  display: flex;
  margin-left: 0px;
  align-items: center;
`;
const NameText = styled.p`
  color: var(--BLUE-BLUE01, #4284ff);
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.35px;
`;
const OtherText = styled.p`
  color: var(--GRAY-GRAY400, #66686e);
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.35px;
`;

const PaddingL = styled.div`
  margin-left: -4px;
  height: 24px;
`;

const Link = styled.div`
  background: var(--BLUE-BLUE03, #f3f7ff);
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;

  color: var(--BLUE-BLUE01, #4284ff);
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
`;

const BottomFix = styled.div`
  position: fixed;
  bottom: 0px;
  z-index: 100;
`;

const BottomContainer = styled.div`
  display: flex;
  padding: 10px 20px 36px 20px;
  align-items: flex-start;
  gap: 6px;
  align-self: stretch;
  width: 402px;
  background-color: #ffffff;
  border-top: 1px solid #dddddd;
`;

const ReplyBtn = styled.button`
  display: flex;
  height: 42px;
  width: fit-content;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: ${(props) =>
    props.$disabledstyle
      ? "var(--GRAY-GRAY100, #F7F7F7)"
      : "var(--BLUE-BLUE01, #4284FF)"};
  color: ${(props) =>
    props.$disabledstyle
      ? "var(--GRAY-GRAY300, #AEAFB6)"
      : "var(--WHITE, #FFF)"};

  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: -0.4px;
  border: none;
`;
const PriceContainer = styled.div`
  display: flex;
  align-items: center;
`;
const AlignContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  padding-left: 10px;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #d9d9d9;
  padding-right: 10px;
  height: 42px;
`;
const PriceText = styled.div`
  color: var(--GRAY-GRAY600, #232428);
  font-size: 20px;
  font-weight: 600;
  line-height: 24px; /* 120% */
  letter-spacing: -0.5px;
`;
const NumText = styled.div`
  color: var(--GRAY-GRAY400, #66686e);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: 2px;
  margin-left: 2px;
`;

const SaveIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M5 7.8C5 6.11984 5 5.27976 5.32698 4.63803C5.6146 4.07354 6.07354 3.6146 6.63803 3.32698C7.27976 3 8.11984 3 9.8 3H14.2C15.8802 3 16.7202 3 17.362 3.32698C17.9265 3.6146 18.3854 4.07354 18.673 4.63803C19 5.27976 19 6.11984 19 7.8V21L12 17L5 21V7.8Z"
        fill="#E0E2E4"
        stroke="#E0E2E4"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const GoIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M9 6L15 12L9 18"
        stroke="#4284FF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const PersonIcon = () => {
  return (
    <PaddingL>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <g clipPath="url(#clip0_692_3150)">
          <rect width="24" height="24" rx="12" fill="#D0D5DA" />
          <path
            d="M12.0898 4.35815C14.7672 4.35815 16.9382 6.52848 16.9385 9.20581C16.9385 10.8573 16.1117 12.3148 14.8506 13.1902C18.1842 14.1938 20.5586 16.7833 20.5586 19.8201C20.5584 23.7276 16.6276 26.8952 11.7793 26.8953C6.93088 26.8953 3.00021 23.7277 3 19.8201C3 16.6486 5.58885 13.9641 9.15625 13.0652C7.99328 12.1796 7.24219 10.7804 7.24219 9.20581C7.24245 6.52864 9.41267 4.35842 12.0898 4.35815Z"
            fill="#F8F8F8"
          />
        </g>
        <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" stroke="white" />
        <defs>
          <clipPath id="clip0_692_3150">
            <rect width="24" height="24" rx="12" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </PaddingL>
  );
};

function GonguViewPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageContainerRef = useRef(null);
  const { id } = useParams(); // URL 파라미터에서 id 추출

  const handleScroll = () => {
    const scrollLeft = imageContainerRef.current.scrollLeft;
    const index = Math.round(scrollLeft / 402);
    setCurrentIndex(index);
  };

  const [postData, setPostData] = useState({ post: [] });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "gongu"));
        const posts = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setPostData({ post: posts });

      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  // posts 변수 수정: id가 일치하는 게시글만 찾기
  const posts =
    postData.post && postData.post.length > 0
      ? postData.post.find((p) => String(p.id) === String(id))
      : null;
  const navigate = useNavigate();

  const handleBack = () => {
    // 이게 뒤로가기
    navigate(-1);
    // window.history.back();
    console.log("뒤로가기 버튼 눌렸음!");
  };

  const handleClick = async () => {
    alert("참여완료");

    const newParticipant = "공구킹 영재_123456";

    // 현재 보고 있는 게시글의 id와 일치하는 post를 찾음
    const currentPost = postData.post.find((p) => String(p.id) === String(id));
    const postId = currentPost?.id;

    if (!postId) {
      console.error("문서 ID가 없습니다.");
      return;
    }

    const updatedParticipants = [
      ...(Array.isArray(currentPost.participant) ? currentPost.participant : []),
      newParticipant,
    ];

    try {
      const postRef = doc(db, "gongu", String(postId)); //string으로 하는 이유는 doc의 세번째 인자가 string이기 때문
      await updateDoc(postRef, {
        participant: updatedParticipants,
      });

      console.log("참여자 목록 업데이트 성공");

      // 상태도 함께 업데이트
      setPostData((prev) => ({
        post: prev.post.map((p) =>
          String(p.id) === String(postId)
            ? { ...p, participant: updatedParticipants }
            : p
        ),
      }));
    } catch (error) {
      console.error("참여자 목록 업데이트 실패: ", error);
    }
  };



  const handleLink = () => {
    // link 데이터
    window.open(posts.link, "_blank");
    console.log("링크 버튼 눌렸음!");
    // 디버깅 로그 필요

  };

  return (
    <DashboardContainer>
      <StatusBar>
        <img src="/StatusBar.png" alt="StatusBar"></img>
      </StatusBar>
      <TitleHeader state="IconActionBar" onClick={handleBack} />

      {posts ? (
        <>
          <ImageWrapper>
            <ImageContainer ref={imageContainerRef} onScroll={handleScroll}>
              {/* images 데이터 */}
              {posts.images &&
                posts.images.map((src, index) => (
                  <ImageSlide key={index} src={src} alt={`이미지${index}번`} />
                ))}
            </ImageContainer>

            <PaginationWrapper>
              {posts.images &&
                posts.images.map((_, index) => (
                  <Dot key={index} $active={index === currentIndex} />
                ))}
            </PaginationWrapper>
          </ImageWrapper>

          <BodyContainer>
            <TitleVertical>
              {/* dday 데이터 */}
              <DeadlineBadge label={posts.deadline} />

              <TitleName>{posts.title}</TitleName>
            </TitleVertical>
            {/* date, time데이터 */}
            <Profile
              owner={
                posts.owner
                  ? posts.owner.split("_")[0]
                  : ""
              }
              //posts.date: 1749475362463 형태로 등록되어있음
              date={new Date(posts.date / 1).toLocaleDateString("ko-KR", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })}
            />
            <InfoContainer>
              {/* deadline,finalnum,price 데이터 */}
              {/* <Info state="1" caption={posts.deadline}></Info> */}
              <Info
                state="1"
                caption={new Date(posts.deadline).toLocaleDateString("ko-KR", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })}></Info>
              <Info state="2" caption={posts.finalnum?.toLocaleString()}></Info>
              <Info state="3" caption={posts.price?.toLocaleString()}></Info>
            </InfoContainer>

            <BodyContents>
              {/* body 데이터 */}
              {posts.body ? (
                posts.body.split("\n").map((line, index) => (
                  <p key={index}>{line}</p>
                ))
              ) : (
                <p>내용이 없습니다.</p>
              )}
            </BodyContents>
          </BodyContainer>

          <CurrentState>
            <CurrentTitle>참여현황</CurrentTitle>

            <ProgressContainer>
              <Top>
                <CurrentText>
                  총 {posts.finalnum?.toLocaleString()}명 모집 중
                </CurrentText>
                <CompleteTag>
                  {posts.finalnum
                    ? parseInt(((posts.participant ?? []).length / posts.finalnum) * 100)
                    : 0}
                  % 달성
                </CompleteTag>
              </Top>
              <Middle>
                <ProgressBar>
                  <BlueBar
                    width={Math.min(
                      100,
                      posts.finalnum
                        ? parseInt(((posts.participant ?? []).length / posts.finalnum) * 100)
                        : 0
                    )}
                  />
                </ProgressBar>
              </Middle>

              <Bottom>
                {/* participant?.length데이터 */}
                {(posts.participant ?? []).length !== 0 && (
                  <ProfileContainer>
                    {Array(Math.min((posts.participant ?? []).length, 3))
                      .fill(0)
                      .map((_, index) => (
                        <PersonIcon key={index} />
                      ))}
                  </ProfileContainer>
                )}

                <WithAlign>
                  {(posts.participant ?? []).length === 0 ? (
                    <OtherText>처음으로 참여해보세요!</OtherText>
                  ) : (
                    <>
                      {/* NameText 내용물은 participant array의 첫번째 내용물의 '-' 이전까지 텍스트 parsing으로 수정해야 함. */}
                      <NameText>
                        {(posts.participant ?? [])[0]?.split("_")[0] || "아직 아무도 없어요..."}
                      </NameText>

                      <OtherText>
                        외 {(posts.participant ?? []).length - 1}명이 함께하고 있어요
                      </OtherText>
                    </>
                  )}
                </WithAlign>
              </Bottom>
            </ProgressContainer>
          </CurrentState>

          {/* 바텀 UI */}
          <BottomFix>
            <Link onClick={handleLink}>
              판매처 보러가기
              <GoIcon></GoIcon>
            </Link>

            <BottomContainer>
              <IconContainer>
                <SaveIcon />
              </IconContainer>

              <AlignContainer>
                <PriceContainer>
                  {/* price데이터 */}
                  <PriceText>{posts.price?.toLocaleString()}원</PriceText>
                  <NumText>/인</NumText>
                </PriceContainer>
                <ReplyBtn
                  onClick={handleClick}
                  // disabledStyle={posts.participant === "이영재"}
                  // disabled={posts.participant === "이영재"}
                  $disabledstyle={
                    (posts.participant ?? []).includes("공구킹 영재_123456") ||
                    posts.owner === "공구킹 영재_123456"
                  }
                  disabled={
                    (posts.participant ?? []).includes("공구킹 영재_123456") ||
                    posts.owner === "공구킹 영재_123456" // 현재 로그인 한 사용자의 가상 이름
                  }
                >
                  {/* {posts.participant === "이영재" ? "참여완료" : "참여하기"} */}
                  {(posts.participant ?? []).includes("공구킹 영재_123456") ||
                    posts.owner === "공구킹 영재_123456"
                    ? "참여완료"
                    : "참여하기"}
                  {/* firebase DB에서 participant array 내에 공구킹 영재_123456가 있다면 참여 완료 상태로. */}

                </ReplyBtn>
              </AlignContainer>
            </BottomContainer>
          </BottomFix>
        </>
      ) : (
        <div style={{ padding: "32px", width: "100%", textAlign: "center" }}>
          로딩 중...
        </div>
      )}
    </DashboardContainer>
  );
}

export default GonguViewPage;

