"use client";
import React, { useRef } from 'react';
import styled from 'styled-components';

const TapsWrapper = styled.div`
  width: 100%;
  padding: 0 20px;
  background: white;
  border-bottom: 1px solid #EAEAEA;
  display: flex;
  gap: 16px;
  position: relative;
  overflow-x: auto;
scrollbar-width: none;
::-webkit-scrollbar { display: none; } 
`;

const Tab = styled.button`
  padding: 8px 4px;
  background: none;
  border: none;
  border-bottom: ${props => props.$active ? '2px solid #4284FF' : '1px solid #E0E2E4'};
  color: ${props => props.$active ? '#3B3E4B' : '#AEAFB6'};
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  flex: 1 1 0;
  cursor: pointer;
`;

function CommunityTabs({ categories, active, onChange}) {
  const wrapperRef = useRef(null);

  return (
    <TapsWrapper
      ref={wrapperRef}
    >
      {categories.map(cat => (
        <Tab
          key={cat}
          $active={cat === active}
          onClick={() => onChange(cat)}
        >
          {cat}
        </Tab>
      ))}
    </TapsWrapper>
  );
}

export default CommunityTabs;
