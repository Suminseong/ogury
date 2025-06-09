
"use client";
import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1 0 0;
  background-color: #fff;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 173px;
  background-color: #e0e2e4;
  border-radius: 8px;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 173px;
    width: auto;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 4px 0;
`;

const Badge = styled.div`
  display: inline-flex;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: #ebf2ff;
  border: 1px solid #4284ff;
  color: #4284ff;
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
`;

const Title = styled.div`
  color: #333;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;

const PriceRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2px;
`;

const Price = styled.span`
  color: #4284ff;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
`;

const PriceUnit = styled.span`
  color: #66686e;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
`;

const ParticipantsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const ParticipantIcon = styled.div`
  display: flex;
  align-items: center;
`;

const ParticipantCount = styled.div`
  display: flex;
  align-items: baseline;
  gap: 2px;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;

  .current { color: #4284ff; }
  .total   { color: #797979; }
`;

const GroupBuyCard = ({
  imageUrl,
  badgeLabel,
  title,
  price,
  unit,
  currentCount,
  totalCount,
}) => (
  <CardContainer>
    <ImageContainer>
      {imageUrl && <img src={imageUrl} alt={title} />}
    </ImageContainer>
    <Content>
      <Badge>{badgeLabel}</Badge>
      <Title>{title}</Title>
      <PriceRow>
        <Price>{price}</Price>
        <PriceUnit>{unit}</PriceUnit>
      </PriceRow>
    </Content>
    <ParticipantsRow>
      <ParticipantIcon>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.9996 7.33333C6.52684 7.33333 5.33294 6.13943 5.33294 4.66667C5.33294 3.19391 6.52684 2 7.9996 2C9.47236 2 10.6663 3.19391 10.6663 4.66667C10.6663 6.13943 9.47236 7.33333 7.9996 7.33333Z" fill="#A0A4B3"/>
          <path d="M2.0004 13.4652C2.2588 10.2834 4.8412 8.66577 7.9889 8.66577C11.1808 8.66577 13.8033 10.1946 13.9986 13.4658C14.0064 13.5961 13.9986 13.9991 13.4978 13.9991C11.0274 13.9991 7.3565 13.9991 2.485 13.9991C2.3178 13.9991 1.9864 13.6386 2.0004 13.4652Z" fill="#A0A4B3"/>
        </svg>
      </ParticipantIcon>
      <ParticipantCount>
        <span className="current">{currentCount}</span>
        <span className="total">/{totalCount}</span>
      </ParticipantCount>
    </ParticipantsRow>
  </CardContainer>
);

export default GroupBuyCard;
