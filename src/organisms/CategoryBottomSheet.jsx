import React from "react";
import styled from "styled-components";
import BaseBottomSheet from "./BaseBottomSheet";

const categories = [
  { name: "생수", icon: "/category_icons/water.svg" },
  { name: "생필품", icon: "/category_icons/cleaning.svg" },
  { name: "식품", icon: "/category_icons/food.svg" },
  { name: "의류/학잠", icon: "/category_icons/clothes.svg" },
  { name: "도서", icon: "/category_icons/book.svg" },
  { name: "문구", icon: "/category_icons/stationery.svg" },
  { name: "건강약품", icon: "/category_icons/health.svg" },
  { name: "뷰티", icon: "/category_icons/beauty.svg" },
  { name: "기타", icon: "/category_icons/etc.svg" },
];

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
`;

const CategoryButton = styled.button`
  width: 100%;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 8px;
`;

const Label = styled.span`
  color: #55575d;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 500;
  line-height: 150%;
`;

function CategoryBottomSheet({ onClose, onSelect }) {
  return (
    <BaseBottomSheet onClose={onClose}>
      <Grid>
        {categories.map((cat) => (
          <CategoryButton
            key={cat.name}
            onClick={() => {
              onSelect(cat.name);
              onClose();
            }}
          >
            <Icon src={cat.icon} alt={cat.name} />
            <Label>{cat.name}</Label>
          </CategoryButton>
        ))}
      </Grid>
    </BaseBottomSheet>
  );
}

export default CategoryBottomSheet;
