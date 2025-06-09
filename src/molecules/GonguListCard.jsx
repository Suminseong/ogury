// molecules/GonguListCard.jsx
"use client";
import styled from "styled-components";
import PriceText from "../atoms/PriceText";
import ParticipantInfo from "../atoms/ParticipantInfo";
import DeadlineBadge from "../atoms/DeadlineBadge";
import Title from "../atoms/Title";
import Desc from "../atoms/Desc";

const CardContainer = styled.article`
  display: flex;
  padding: 12px 0;
  flex-direction: column;
  align-items: center;

  width: 100%;
  border-bottom: 1px solid #f6f7f8;
  background-color: #fff;
  cursor: pointer;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  gap: 10px;
`;

// 썸네일, 제목, 내용, 가격
const Thumbnail = styled.figure`
  min-width: 80px;
  height: 80px;
  border-radius: 8px;
  background-color: #dee0e3;
  background-image: url(${(props) => props.$image});
  background-size: cover;
  background-position: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  /* width: 100%; */
  flex: 1;
  height: 80px;
  margin-right: 10px;
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

function GonguListCard({
  title,
  body,
  price,
  deadline,
  current,
  total,
  onClick,
  image,
}) {
  return (
    <CardContainer onClick={onClick}>
      <CardHeader>
        <Thumbnail $image={image || ""} />
        <ContentWrapper>
          <TextContent>
            <Title title={title} />
            <Desc body={body} />
          </TextContent>
          <PriceText amount={price} />
        </ContentWrapper>
        <DeadlineBadge label={deadline} />
      </CardHeader>

      {/* <ParticipantInfo current={current} total={total} /> */}
      {/* 우측 정렬 해야되는데 안됨 */}
      <div style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
        <ParticipantInfo current={current} total={total} />
      </div>
    </CardContainer>
  );
}

export default GonguListCard;
