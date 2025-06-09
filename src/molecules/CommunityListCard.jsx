"use client";
import React from 'react';
import styled from 'styled-components';
import StarRatng from './StarRating';
import Title from '../atoms/Title';

const CardWrapper = styled.div`
  display: flex;
  padding: 12px 0;
  border-bottom: 1px solid #F6F7F8;
  background-color: white;
  width: 100%;
  font-family: 'Pretendard', sans-serif;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const MainText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Description = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: #66686E;
`;

const Meta = styled.div`
  display: flex;
  gap: 4px;
  font-size: 12px;
  font-weight: 400;
  color: #AEAFB6;
`;

const Dot = styled.div`
  &::before {
    content: "⋅";
    margin: 0 4px;
  }
`;

const CommentInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

const CommentDot = styled.div`
  width: 9px;
  height: 9px;
  background-color: #AEAFB6;
  border-radius: 50%;
`;

const ImageThumb = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  background: #E0E2E4;
  overflow: hidden;
  margin-left: 12px;
  position: relative;

  img {
    position: absolute;
    left: -26px;
    top: 0.75px;
    width: 134px;
    height: 79.5px;
    object-fit: cover;
  }
`;

const CommunityListCard = ({
  rating = 4,
  title = "테무 토마토 공구",
  description = "테무에서 공구했는데 진짜 맛있었음ㅠ 진짜 토마토 맞아? 싶을 정도로 달고 과즙 터져서 감동함..",
  time = "9분 전",
  comments = 2,
  imageUrl = "https://placehold.co/80x80"
}) => {
  return (
    <CardWrapper>
      <Content>
        <MainText>
          <StarRatng rating={rating} />
          <Title title={title} />
          <Description>{description}</Description>
        </MainText>

        <Meta>
          <div>{time}</div>
          <Dot />
          <CommentInfo>
            <CommentDot />
            <div>댓글 {comments}개</div>
          </CommentInfo>
        </Meta>
      </Content>

      <ImageThumb>
        <img src={imageUrl} alt="썸네일" />
      </ImageThumb>
    </CardWrapper>
  );
};

export default CommunityListCard;
