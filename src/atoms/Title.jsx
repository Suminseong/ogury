import styled from "styled-components";

const StyledTitle = styled.h2`
  color: #333;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  letter-spacing: -0.4px;
`;

function Title({ title = "제목 없음" }) {
  return <StyledTitle>{title}</StyledTitle>;
}

export default Title;
