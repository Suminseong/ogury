import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

const Icon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CountText = styled.div`
  color: #797979;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
`;

const Current = styled.span`
  color: #426bff;
`;

const Total = styled.span`
  color: #797979;
`;

function ParticipantInfo({ current = 0, total = 0 }) {
  return (
    <Wrapper>
      <Icon>
        <img src="/participant.svg" alt="" />
      </Icon>
      <CountText>
        <Current>{current}</Current>
        <Total>/{total}</Total>
      </CountText>
    </Wrapper>
  );
}

export default ParticipantInfo;
