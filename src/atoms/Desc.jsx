import styled from "styled-components";

const StyledDesc = styled.p`
  color: #878b91;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.35px;
  margin: 0;
  max-width: 100%;

  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

  overflow: hidden;
  text-overflow: ellipsis;
`;

function Desc({ body = "설명이 없습니다" }) {
  return <StyledDesc>{body}</StyledDesc>;
}

export default Desc;
