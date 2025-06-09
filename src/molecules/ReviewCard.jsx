"use client";
import React from "react";
import styled from "styled-components";
import StarRating from "./StarRating";

const CardContainer = styled.article`
  width: 100%;
  display: flex;
  padding: 12px 0px;
  align-items: flex-start;
  align-self: stretch;
  border-bottom: 1px solid #f6f7f8;
  background-color: #fff;
  cursor: pointer;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  flex: 1 0 0;
  align-self: stretch;
`;

const Header = styled.div`
  display: flex;
  padding-right: 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
`;

const HeaderTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
`;

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  align-self: stretch;
`;

const Title = styled.h3`
  color: #232428;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.4px;
  margin: 0;
`;

const ExpandIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
`;

const Description = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
  align-self: stretch;
  color: #66686e;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.35px;
`;

const Footer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4px;
`;

const TimeStamp = styled.span`
  color: #aeafb6;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.24px;
`;

const Dot = styled.span`
  color: #aeafb6;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.24px;
`;

const CommentCount = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  color: #aeafb6;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.24px;
`;

const CommentIcon = styled.div`
  display: flex;
  align-items: center;
`;

const Thumbnail = styled.div`
  display: flex;
  width: 80px;
  height: 80px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  position: relative;
  background-color: #e0e2e4;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
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
  if (minutes < 60) return `${Math.floor(minutes)}분전`;
  if (hours < 24) return `${Math.floor(hours)}시간전`;
  if (days < 7) return `${Math.floor(days)}일전`;
  return `${Math.floor(weeks)}주전`;
}

const CommentCard = ({
  title,
  bodys,
  rating,
  date,
  comment,
  images,
  onClick,
}) => {
  const timeAgo = getRelativeTime(date); // 여기서 ago 문자열 생성

  return (
    <CardContainer onClick={onClick}>
      <CardContent>
        <Header>
          <HeaderTop>
            <StarRating rating={rating} />
            <TitleRow>
              <Title>{title}</Title>
              <ExpandIcon>
                <img src="/arrow-right-20px.svg" alt="" />
              </ExpandIcon>
            </TitleRow>
          </HeaderTop>
          <Description>{bodys}</Description>
        </Header>
        <Footer>
          <TimeStamp>{timeAgo}</TimeStamp>
          <Dot>⋅</Dot>
          <CommentCount>
            <CommentIcon>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5 5.9917C10.5 8.47698 8.48528 10.4917 6 10.4917C5.40143 10.4917 4.83015 10.3748 4.30775 10.1627C4.20776 10.1221 4.15777 10.1018 4.11736 10.0927C4.07783 10.0838 4.04858 10.0806 4.00807 10.0806C3.96665 10.0806 3.92154 10.0881 3.83133 10.1031L2.05238 10.3996C1.86609 10.4307 1.77295 10.4462 1.70559 10.4173C1.64664 10.392 1.59966 10.3451 1.57438 10.2861C1.54549 10.2188 1.56102 10.1256 1.59206 9.93932L1.88855 8.16037C1.90359 8.07016 1.91111 8.02505 1.9111 7.98363C1.9111 7.94312 1.90786 7.91387 1.899 7.87434C1.88994 7.83393 1.86964 7.78394 1.82903 7.68395C1.61687 7.16155 1.5 6.59027 1.5 5.9917C1.5 3.50642 3.51472 1.4917 6 1.4917C8.48528 1.4917 10.5 3.50642 10.5 5.9917Z"
                  fill="#AEAFB6"
                />
              </svg>
            </CommentIcon>
            <span>댓글 {comment.length}개</span>
          </CommentCount>
        </Footer>
      </CardContent>
      {images?.[0]?.src && (
        <Thumbnail>
          <img src={images[0].src} alt="thumbnail" />
        </Thumbnail>
      )}
    </CardContainer>
  );
};

export default CommentCard;
