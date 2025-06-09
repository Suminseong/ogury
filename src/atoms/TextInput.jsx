import React, { useState } from "react";
import styled, { css } from "styled-components";

const StyledTextInput = styled.div`
  display: flex;
  flex-direction: column;
  position: relative; /* 카운터 배치용 */
`;

// 레이블
const Label = styled.label`
  color: var(--GRAY-GRAY400, #66686e);
  font-size: 14px;
  font-weight: 500;
  line-height: 150%;
  margin-bottom: 4px;
  padding: 0 2px;
`;
const FieldBox = styled.div`
  position: relative;
`;

// 공통 Input 스타일
const sharedInputStyle = css`
  width: 100%;
  padding: 12px;
  border: 1px solid #ebebeb;
  border-radius: 4px;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.4px;
  outline: none;
  transition: all 0.2s ease;
  font-family: Pretendard;

  &::placeholder {
    color: var(--GRAY-GRAY300, #aeafb6);
  }

  ${({ isFilled }) =>
    isFilled &&
    css`
      color: var(--GRAY-GRAY600, #232428);
    `}

  ${({ isFocused }) =>
    isFocused &&
    css`
      border: 1px solid var(--BLUE-BLUE01, #4284ff);
    `}
`;

const StyledInput = styled.input`
  ${sharedInputStyle};
`;
const StyledTextarea = styled.textarea`
  ${sharedInputStyle};
  resize: none;
  min-height: 120px;
  line-height: 24px;
`;

// 카운터
const Counter = styled.span`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  color: var(--GRAY-GRAY300, #aeafb6);
  font-family: Pretendard;
  font-size: 12px;
  line-height: 150%;
  pointer-events: none;
`;

function TextInput({
  label,
  placeholder,
  type = "text",
  textarea = false,
  charLimit,
  value = "",
  onChange,
}) {
  const [isFocused, setIsFocused] = useState(false);

  const inputProps = {
    placeholder,
    maxLength: charLimit,
    value,
    onChange,
    hasCounter: !!charLimit,
    isFocused,
    isFilled: value.length > 0,
    onFocus: () => setIsFocused(true),
    onBlur: () => setIsFocused(false),
  };

  return (
    <StyledTextInput>
      <Label>{label}</Label>
      <FieldBox>
        {textarea ? (
          <StyledTextarea {...inputProps} />
        ) : (
          <StyledInput type={type} {...inputProps} />
        )}
        {charLimit && (
          <Counter>
            {value.length}/{charLimit}
          </Counter>
        )}
      </FieldBox>
    </StyledTextInput>
  );
}

export default TextInput;
