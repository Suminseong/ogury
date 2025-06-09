import styled from "styled-components";

const Badge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 2px 8px;
  border-radius: 4px;
  background: var(--BLUE-BLUE02, #ebf2ff);

  color: #426bff;
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.3px;

  width: fit-content;
`;

function DeadlineBadge({ label }) {
  // 밀리초 데이터를 받아오기 때문에 오늘 날짜를 기준으로 D-값을 계산
  const today = new Date();
  const deadlineDate = new Date(label);
  let numDeadline = `${Math.ceil((deadlineDate - today) / (1000 * 60 * 60 * 24))}`;
  if (numDeadline < 0) {
    numDeadline = "마감됨"; // 마감일이 지난 경우 D-0으로 표시
  }
  else if (numDeadline > 0) {
    numDeadline = `D-${numDeadline}`; // D-값으로 표시
  }
  else {
    numDeadline = "D-Day"; // D-Day로 표시
  }
  return (
    <Badge>{numDeadline}</Badge>
  );
}

export default DeadlineBadge;
