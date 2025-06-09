"use client";
import * as React from "react";
import styled from "styled-components";
import { ProductImage } from "./ProductImage";
import { ProductInfo } from "./ProductInfo";
import { ParticipantCounter } from "./ParticipantCounter";

const ProductCard = ({ item }) => {
  const {
    title,
    price,
    deadline,
    current,
    total,
  } = item;

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Pretendard:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <CardContainer>
        <ProductImage image="https://cdn.builder.io/api/v1/image/assets/TEMP/3c3dd826b18989817e5fdde1e187a5bac4ac3ddf?placeholderIfAbsent=true" altText={title} />
        <ProductInfo
          title={title}
          price={price}
          deadline={deadline}
        />
        <ParticipantCounter
          currentParticipants={current}
          maxParticipants={total}
        />
      </CardContainer>
    </>
  );
};

const CardContainer = styled.article`
  max-width: none;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  flex: 1 0 0;
  position: relative;
  font-family: "Pretendard", -apple-system, Roboto, Helvetica, sans-serif;
  background-color: #fff;

  @media (max-width: 991px) {
    max-width: 991px;
    gap: 6px;
  }

  @media (max-width: 640px) {
    max-width: 640px;
    gap: 4px;
  }
`;

export default ProductCard;
