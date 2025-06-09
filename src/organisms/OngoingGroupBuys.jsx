"use client";
import React from "react";
import styled from "styled-components";
import ProgressSteps from "../molecules/ProgressSteps";
import ParticipantInfo from "../atoms/ParticipantInfo";
import PriceText from "../atoms/PriceText";
import DeadlineBadge from "../atoms/DeadlineBadge";
import Title from "../atoms/Title";

import { useState } from "react";
import { useEffect } from "react";
import { db } from "../firebase"; // firebase 연동 필요
import { collection, getDocs } from "firebase/firestore";
import { useRef } from "react";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
`;

const SectionHeader = styled.div`
  display: flex;
  padding: 0px 2px;
  align-items: center;
  gap: 2px;
`;

const OnTitle = styled.h2`
  color: #555;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.35px;
`;

const Count = styled.span`
  color: #4284ff;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.35px;
`;

const GroupBuyCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 100%;
  max-width: 362px;
`;

const CardContent = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  border-radius: 10px;
  border: 1px solid #f0f5ff;
  box-shadow: 0px 0px 20px 0px rgba(96, 99, 106, 0.08);
  background-color: #fff;
`;

const ProductSection = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
`;

const ImageContainer = styled.div`
  display: flex;
  width: 90px;
  height: 90px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #eaeaea;
  position: relative;
  background-color: #fff;
`;

const ProductImage = styled.img`
  width: 97px;
  height: 92px;
  position: absolute;
  left: -3px;
  top: -1px;
  object-fit: cover;
`;

const ProductInfo = styled.div`
  display: flex;
  padding: 6px 0px;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  height: 100%;
`;

const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const PriceRow = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

const ParticipantsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  justify-content: flex-start; 
`;

const ParticipantIcon = styled.div`
  display: flex;
  align-items: center;
`;

const ParticipantCount = styled.div`
  display: flex;
  color: #797979;
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: -0.35px;
`;
const ProgressDots = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 100px;
  background-color: #dfdfe1;
`;

const OngoingGroupBuys = () => {
  const [groupBuys, setGroupBuys] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  // Fetch group buys from Firestore
  useEffect(() => {
    const fetchGroupBuys = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "gongu"));
        const buys = [];
        querySnapshot.forEach((doc) => {
          buys.push({ id: doc.id, ...doc.data() });
        });
        console.log("파이어베이스 들고 옴", buys);
        setGroupBuys(buys);
      } catch (error) {
        console.error("Error fetching group buys:", error);
      }
    };
    fetchGroupBuys();
  }, []);

  // 최신 3개만, 일단 예시 보여주기 좋은 놈들만 뽑았음(날짜마감+참여자꽉, 참여자꽉, 진행중)
  const latestGroupBuys = [...groupBuys]
    .sort((a, b) => (a.createdAt?.seconds || 0) - (b.createdAt?.seconds || 0))
    .slice(3, 7);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? latestGroupBuys.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === latestGroupBuys.length - 1 ? 0 : prev + 1));
  };

  // 터치 스와이프 지원
  const touchStartX = useRef(null);
  const mouseStartX = useRef(null);
  const isDragging = useRef(false);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  // 마우스 이벤트 추가
  const handleMouseDown = (e) => {
    isDragging.current = true;
    mouseStartX.current = e.clientX;
  };

  const handleMouseUp = (e) => {
    if (!isDragging.current || mouseStartX.current === null) return;
    const mouseEndX = e.clientX;
    const diff = mouseStartX.current - mouseEndX;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    isDragging.current = false;
    mouseStartX.current = null;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
    mouseStartX.current = null;
  };

  // 기존 styled component로 구현된 부분을 atoms 컴포넌트로 대체
  // PriceText, ParticipantInfo, DeadlineBadge 사용

  return (
    <Section>
      <SectionHeader>
        <OnTitle>진행중인 공구</OnTitle>
        <Count>{latestGroupBuys.length}</Count>
      </SectionHeader>
      {latestGroupBuys.length === 0 ? (
        <div style={{ width: "100%", textAlign: "center", padding: "32px 0" }}>
          진행중인 공구가 없습니다.
        </div>
      ) : (
        <div
          style={{
            width: "100%",
            overflow: "hidden",
            position: "relative",
          }}
          ref={carouselRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          <div
            style={{
              display: "flex",
              transition: "transform 0.4s cubic-bezier(.4,0,.2,1)",
              transform: `translateX(-${currentIndex * 100}%)`,
              width: `${latestGroupBuys.length * 100}%`,
            }}
          >
            {latestGroupBuys.map((buy, idx) => (
              <div key={buy.id || idx} style={{ flex: "0 0 100%", maxWidth: "100%" }}>
                <GroupBuyCard>
                  <CardContent>
                    <ProductSection>
                      <ImageContainer>
                        <ProductImage
                          src={
                            Array.isArray(buy.images) && buy.images[0]
                              ? buy.images[0]
                              : "/placeholder.png"
                          }
                          alt={buy.title || "product"}
                        />
                      </ImageContainer>
                      <ProductInfo>
                        <TitleRow>
                          <Title title={buy.title} />
                          <DeadlineBadge
                            label={
                              buy.deadline?.seconds
                                ? new Date(buy.deadline.seconds * 1000)
                                : buy.deadline // 이미 문자열이면 그대로 전달
                            }
                          />
                        </TitleRow>
                        <PriceRow>
                          <PriceText
                            amount={
                              buy.price && buy.finalnum
                                ? Math.floor(buy.price / buy.finalnum)
                                : 0
                            }
                          />
                        </PriceRow>
                        <ParticipantsRow>
                          <ParticipantInfo
                            current={Array.isArray(buy.participant) ? buy.participant.length : 0}
                            total={buy.finalnum || 0}
                          />
                        </ParticipantsRow>
                      </ProductInfo>
                    </ProductSection>
                    <ProgressSteps
                      currentStep={
                        (() => {
                          const participantCount = Array.isArray(buy.participant) ? buy.participant.length : 0;
                          const finalnum = buy.finalnum || 0;
                          let deadlineDate;
                          if (buy.deadline?.seconds) {
                            deadlineDate = new Date(buy.deadline.seconds * 1000);
                          } else if (typeof buy.deadline === "string" || typeof buy.deadline === "number") {
                            deadlineDate = new Date(buy.deadline);
                          }
                          const now = new Date();

                          if (participantCount >= finalnum && deadlineDate && now > deadlineDate) {
                            return 3;
                          } else if (participantCount >= finalnum) {
                            return 1;
                          } else {
                            return 0;
                          }
                        })()
                      }
                      steps={buy.steps}
                    />
                  </CardContent>
                </GroupBuyCard>
              </div>
            ))}
          </div>
        </div>
      )}
      <ProgressDots style={{ justifyContent: "center", margin: "12px auto 0" }}>
        {[...Array(3)].map((_, idx) => (
          <Dot
            key={idx}
            style={{
              backgroundColor: idx === currentIndex ? "#4284ff" : "#dfdfe1",
              transition: "background 0.2s",
            }}
          />
        ))}
      </ProgressDots>
    </Section>
  );
};

export default OngoingGroupBuys;
