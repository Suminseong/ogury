import styled from "styled-components";
import React from "react";
import DeadlineBadge from "../atoms/DeadlineBadge";
import { useNavigate } from "react-router-dom";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0px 0px 16px 0px rgba(73, 74, 79, 0.1);
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
`;

const StatusArea = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const StatusText = styled.p`
  color: var(--GRAY-GRAY400, #66686e);
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.35px;
`;

const ParticipantArea = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  & > span:nth-child(2) {
    color: var(--BLUE-BLUE01, #6c7181);
    font-family: Pretendard;
    font-size: 14px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: -0.35px;
  }
`;

const CardContent = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 24px;
  cursor: pointer;
`;

const Thumbnail = styled.div`
  display: flex;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  border: 1px solid #efefef;
`;

const Title = styled.div`
  display: flex;
  align-items: center;

  & > p {
    color: var(--GRAY-GRAY600, #232428);
    font-family: Pretendard;
    font-size: 16px;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: -0.4px;
  }

  & > span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ChatButton = styled.button`
  display: flex;
  height: 44px;
  justify-content: center;
  align-items: center;
  border: solid 1px #f3f7ff;
  border-radius: 8px;
  background: var(--BLUE-BLUE03, #f3f7ff);
  color: var(--BLUE-BLUE01, #4284ff);
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.35px;
  cursor: pointer;
`;

const statusMap = {
  ongoing: "진행중",
  ended: "종료됨",
};

const formatDaysLeft = (days) => {
  if (days > 0) return days;
  if (days === 0) return "D-Day";
  return "종료됨";
};

function GonguStateCard({ gongu }) {
  const navigate = useNavigate();
  const deadlineDate = new Date(gongu.deadline);
  if (!gongu) return null;

  // daysLeft 계산 (deadline이 Date 또는 ISO 문자열이라고 가정)
  let daysLeft = gongu.daysLeft;
  if (daysLeft === undefined && gongu.deadline) {
    const today = new Date();
    daysLeft = Math.ceil((deadlineDate - today) / (1000 * 60 * 60 * 24));
  }

  // status 자동 계산 (예: 마감일이 지났으면 ended)
  let status = gongu.status;
  if (!status) {
    status = daysLeft < 0 ? "ended" : "ongoing";
  }

  // 이미지 처리 (images 배열 또는 image 필드)
  let imageSrc = "/placeholder.png";

  // 이미지 배열이 있고, 문자열이며, 비어있지 않은지 체크
  if (
    Array.isArray(gongu.images) &&
    typeof gongu.images[0] === "string" &&
    gongu.images[0].trim() !== ""
  ) {
    const img = gongu.images[0].trim();

    // HTTP 또는 절대경로로 시작하는 경우
    if (img.startsWith("http") || img.startsWith("/")) {
      imageSrc = img;

      // Base64인데 접두사 없는 경우
    } else if (!img.startsWith("data:image")) {
      imageSrc = `data:image/png;base64,${img}`;

      // 접두사 포함된 data URL
    } else {
      imageSrc = img;
    }
  }

  // 참여자 처리
  const currentParticipants = Array.isArray(gongu.participant)
    ? gongu.participant.length
    : gongu.currentParticipants || 0;
  const totalParticipants = gongu.finalnum || gongu.totalParticipants || 0;

  return (
    <CardWrapper>
      <CardHeader>
        <StatusArea>
          <StatusText>
            {statusMap[status] || "진행중"}
          </StatusText>
          {/* 남은 날짜가 0 이상일 때만 Badge 표시 */}
          {daysLeft >= 0 ? (
            <DeadlineBadge
              label={deadlineDate.toISOString()}
              formatDaysLeft={formatDaysLeft}
              status={status}
            />
          ) : null}
        </StatusArea>
        <ParticipantArea>
          <span>
            <img src="/participant.svg" alt="참여자 아이콘" />
          </span>
          <span>
            {currentParticipants}/{totalParticipants}
          </span>
        </ParticipantArea>
      </CardHeader>

      <CardContent onClick={() => navigate(`/gongu/${gongu.id}`)}>
        <Thumbnail>
          <img src={imageSrc} alt="썸네일" />
        </Thumbnail>
        <Title>
          <p>{gongu.title}</p>
          <span>
            <img src="/arrow-right-18px.svg" alt="이동 아이콘" />
          </span>
        </Title>
      </CardContent>

      <ChatButton onClick={gongu.onChatClick}>채팅방 입장하기</ChatButton>
    </CardWrapper>
  );
}

export default GonguStateCard;
