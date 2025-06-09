"use client";
import styled from "styled-components";

const StepsWrapper = styled.div`
  width: 100%;
  padding: 0 4px; // 카드와 너무 붙지 않게 약간의 여백만
  box-sizing: border-box;
`;

const ProgressBarContainer = styled.div`
  position: relative;
  height: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 8px; // 카드와 너무 붙지 않게 약간의 여백만
`;

const Step = styled.div`
  z-index: 2;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: #dfdfe1;
  border: 2px solid white;
  box-shadow: 0 0 0 1px #dfdfe1;

  ${(props) =>
    props.$active &&
    `
    background-color: #4284ff;
    box-shadow: 0 0 0 1px #4284ff;
  `}
`;

const ProgressBackground = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 4px;
  background-color: #f4f4f4;
  transform: translateY(-50%);
  z-index: 0;
  padding: 0 8px; // 카드와 너무 붙지 않게 약간의 여백만
`;

const ProgressFill = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  height: 4px;
  background-color: #4284ff;
  transform: translateY(-50%);
  width: ${(props) => props.$progress}%;
  z-index: 1;
  transition: width 0.3s ease;
  padding: 0 8px; // 카드와 너무 붙지 않게 약간의 여백만
`;

const Labels = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  font-size: 12px;
  color: #aeafb6;
  width: 100%;
`;

const ProgressSteps = ({ currentStep = 0 }) => {
  const totalSteps = 4;
  const stepLabels = ["모집중", "모집완료", "결제대기", "배송중"];
  const progress = (currentStep / (totalSteps - 1)) * 100;

  return (
    <StepsWrapper>
      <ProgressBarContainer>
        <ProgressBackground />
        <ProgressFill $progress={progress} />
        {[...Array(totalSteps)].map((_, i) => (
          <Step key={i} $active={i <= currentStep} />
        ))}
      </ProgressBarContainer>
      <Labels>
        {stepLabels.map((label) => (
          <div key={label}>{label}</div>
        ))}
      </Labels>
    </StepsWrapper>
  );
};

export default ProgressSteps;
