import styled from "styled-components";


const ImageContainer = styled.div`
  display: flex;
  height: 173px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  background-color: #e0e2e4;
`;

const StyledImage = styled.img`
  width: 291px;
  height: 173px;
  aspect-ratio: 291/173;
  position: absolute;
  left: -58px;
  top: 0px;
  object-fit: cover;

`;

export const ProductImage = ({ image, altText }) => {
  return (
    <ImageContainer>
      <StyledImage src={image} alt={altText} />
      
    </ImageContainer>
  );
};
