"use client";
import React, { useRef } from "react";
import styled from "styled-components";

const TabContainer = styled.div`
  display: flex;
  position: relative;
`;

const TapsWrapper = styled.div`
  width: 100%;
  padding: 0 20px;
  background: white;
  border-bottom: 1px solid #eaeaea;
  display: flex;
  gap: 16px;

  overflow-x: auto;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Tab = styled.button`
  padding: 8px 4px;
  background: none;
  border: none;
  border-bottom: ${(props) =>
    props.$active ? "2px solid #4284FF" : "2px solid transparent"};
  color: ${(props) => (props.$active ? "#3B3E4B" : "#AEAFB6")};
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;
  font-family: Pretendard;
`;

const FadeRight = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 62px;
  height: 100%;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #fff 100%);
  pointer-events: none;

  z-index: 1;
`;

function CategoryTabs({ categories, active, onChange }) {
  const wrapperRef = useRef(null);
  let isDragging = false;
  let startX = 0;
  let scrollLeft = 0;

  const onMouseDown = (e) => {
    isDragging = true;
    startX = e.pageX - wrapperRef.current.offsetLeft;
    scrollLeft = wrapperRef.current.scrollLeft;
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - wrapperRef.current.offsetLeft;
    const walk = (x - startX) * 1; // scroll speed
    wrapperRef.current.scrollLeft = scrollLeft - walk;
  };

  const onMouseUpOrLeave = () => {
    isDragging = false;
  };

  return (
    <TabContainer>
      <TapsWrapper
        ref={wrapperRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUpOrLeave}
        onMouseLeave={onMouseUpOrLeave}
      >
        {categories.map((cat) => (
          <Tab key={cat} $active={cat === active} onClick={() => onChange(cat)}>
            {cat}
          </Tab>
        ))}
      </TapsWrapper>
      <FadeRight />
    </TabContainer>
  );
}

export default CategoryTabs;
