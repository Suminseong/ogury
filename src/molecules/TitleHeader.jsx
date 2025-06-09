import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 402px;
  min-height: 48px;
  display: flex;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  font-family: Pretendard;

  position: sticky;
  top: 50px;
  z-index: 1000;
`;

const AlignContainer = styled.div`
  display: flex;
  gap: 12px;
  cursor: pointer;
`;

// 폰트
const Heading2 = styled.p`
  color: var(--GRAY-GRAY600, #232428);
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 133.333% */
  letter-spacing: -0.72px;
  cursor: pointer;
`;

const Body1 = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0%;
  color: #232428;
`;

const Btn1 = styled.button`
  width: 60px;
  padding: 0;
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 0%;
  /* color: #aeafb6; */
  color: ${({ disabled }) => (disabled ? "#AEAFB6" : "#4284FF")};
  border: 0;
  background-color: transparent;
  cursor: pointer;
`;
const Left = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 60px;
`;
const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 60px;
`;

// 아이콘
const BackIcon = ({ onClick }) => {
  return (
    <Left onClick={onClick} style={{ cursor: "pointer" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M15 18L9 12L15 6"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Left>
  );
};

const MoreIcon = () => {
  return (
    <Right style={{ cursor: "pointer" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </Right>
  );
};

const CancleIcon = ({ onClick }) => {
  return (
    <Left onClick={onClick} style={{ cursor: "pointer" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M18 6L6 18M6 6L18 18"
          stroke="#232428"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Left>
  );
};

const TitleHeader = (props) => {
  const state = props.state || "Title";
  const text = props.text || "텍스트";
  const title = props.title || "";
  const rightIcon = props.rightIcon || null;
  const iconType = props.iconType || "back";

  const navigate = useNavigate();

  if (state === "Title") {
    return (
      <Container>
        <Heading2>{title}</Heading2>
        <AlignContainer>{rightIcon}</AlignContainer>
      </Container>
    );
  } else if (state === "TextActionBar") {
    return (
      <Container>
        {iconType === "back" ? (
          <BackIcon onClick={() => navigate(-1)} />
        ) : (
          <CancleIcon onClick={() => navigate(-1)} />
        )}
        <Body1>{text}</Body1>
        <Btn1 disabled={props.disabled} onClick={props.onClick}>
          올리기
        </Btn1>
      </Container>
    );
  } else if (state === "IconActionBar") {
    return (
      <Container>
        {iconType === "back" ? (
          <BackIcon onClick={props.onClick} />
        ) : (
          <CancleIcon onClick={props.onClick} />
        )}
        {iconType === "back" && <MoreIcon />}
      </Container>
    );
  }
};

export default TitleHeader;
