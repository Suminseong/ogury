import styled from "styled-components";
import PriceText from "../atoms/PriceText";
import ParticipantInfo from "../atoms/ParticipantInfo";
import DeadlineBadge from "../atoms/DeadlineBadge";
import Title from "../atoms/Title";

const CardContainer = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: "Pretendard", sans-serif;
  background-color: #fff;
  border-radius: 12px;
`;

const Thumbnail = styled.figure`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  background-color: #dee0e3;
  background-image: url(${(props) => props.$image});
  background-size: cover;
  border-radius: 8px;
  margin: 0;
  overflow: hidden;
  margin-bottom: 10px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  margin: 4px 0 12px;
`;

function GonguCardVertical({
  title,
  price,
  deadline,
  current,
  finalnum,
  onClick,
  images,
}) {
  // images가 배열이면 첫 번째 값만 사용
  const imageSrc = Array.isArray(images) ? images[0] : images;

  return (
    <CardContainer onClick={onClick}>
      <Thumbnail $image={imageSrc}></Thumbnail>
      <DeadlineBadge label={deadline} />
      <ContentWrapper>
        <Title title={title} />
        <PriceText amount={parseInt(price / finalnum)} />
      </ContentWrapper>
      <ParticipantInfo current={current} total={finalnum} />
    </CardContainer>
  );
}

export default GonguCardVertical;
