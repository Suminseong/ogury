"use client";
import React from "react";
import styled from "styled-components";

const InputBox = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 12px;
  margin: 12px 20px;
  background: #f0f1f1;
  border-radius: 4px;

  & > input {
    width: 100%;
    background-color: transparent;
    border: none;
    padding: 8px 12px;

    color: var(--GRAY-GRAY300, #393a3d);
    font-family: Pretendard;
    font-size: 14px;
    line-height: 150%; /* 21px */
  }
  & > input:focus {
    outline: none;
  }

  & > input::placeholder {
    color: var(--GRAY-GRAY300, #aeafb6);
  }
`;

const SearchIcon = styled.svg`
  width: 16px;
  height: 16px;
  stroke: #66686e;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  margin-right: 8px;
  flex-shrink: 0;
  cursor: pointer;
  `;

function SearchBar({
  value,
  onChange,
  placeholder = "검색어를 입력하세요",
  onSearch = () => {},
}) {
  return (
    <InputBox onSubmit={(e) => { e.preventDefault(); onSearch(); }}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <SearchIcon
        xmlns="http://www.w3.org/2000/svg"
        onClick={onSearch}
        viewBox="0 0 24 24"
        fill="none"
        stroke="#66686e"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-search"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </SearchIcon>
    </InputBox>
  );
}

export default SearchBar;
