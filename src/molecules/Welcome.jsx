import react from "react";
import styled from "styled-components";

const WelcomeSection = styled.section`
  width: 100%;
`;

const WelcomeText = styled.div`
  color: #232428;
  font-size: 24px;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: -0.6px;

  @media (max-width: 640px) {
    font-size: 20px;
    line-height: 120%;
  }
`;

const HighlightedText = styled.span`
  font-weight: 700;
  color: #4284ff;
`;

const QuestionText = styled.span`
  font-weight: 400;
  color: #232428;
`;

const Welcome = () => {
  return (
    <WelcomeSection>
      <WelcomeText>
        <HighlightedText>공구킹 영재</HighlightedText>
        <span>님,</span>
        <br />
        <QuestionText>오늘은 어떤 공구를 해볼까요?</QuestionText>
      </WelcomeText>
    </WelcomeSection>
  );
};

export default Welcome;
