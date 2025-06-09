import React from "react";
import styled from "styled-components";
import { useState, useRef } from "react";

const ReplyContainer = styled.div`
  display: flex;
  padding: 10px 20px 36px 20px;
  align-items: flex-start;
  gap: 6px;
  align-self: stretch;
  width: 402px;
  background-color: #ffffff;
  border-top: 1px solid #dddddd;
  position: fixed;
  bottom: 0px;
  z-index: 100;
`;

const ReplyInput = styled.input`
  height: 42px;
  padding: 8px 12px;
  width: 286px;
  border-radius: 4px;
  background: #f0f1f1;
  border: none;
  outline: none;
  font-size: 14px;
  color: var(--GRAY-GRAY600, #232428);
  caret-color: var(--BLUE-BLUE01, #4284ff);

  &::placeholder {
    color: var(--GRAY-GRAY300, #aeafb6);
  }
`;

const ReplyBtn = styled.button`
  display: flex;
  height: 42px;
  width: 70px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: var(--BLUE-BLUE01, #4284ff);
  height: fit-content;

  color: var(--WHITE, #fff);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: -0.4px;
  border: none;
`;

function Reply({ onSubmit }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue("");
    } else {
      alert("댓글을 입력해주세요.");
    }
  };

  return (
    <ReplyContainer>
      <ReplyInput
        placeholder="댓글을 입력해주세요."
        value={value}
        onChange={handleChange}
      />
      <ReplyBtn onClick={handleClick}>등록</ReplyBtn>
    </ReplyContainer>
  );
}

export default Reply;
