import styled from "styled-components";

const Wrapper = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.4px;
`;

const Amount = styled.span`
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 24px */
  letter-spacing: -0.4px;
`;

const Unit = styled.span`
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
  letter-spacing: -0.4px;
`;

function PriceText({
  amount = "1,100원",
  unit = "/ 인",
  color = "#426bff", // 금액 색상
  unitColor = "#66686E", // 단위 색상
}) {
  return (
    <Wrapper>
      <Amount style={{ color }}>{`${amount?.toLocaleString()}원 `}</Amount>
      <Unit style={{ color: unitColor }}>{unit}</Unit>
    </Wrapper>
  );
}

export default PriceText;
