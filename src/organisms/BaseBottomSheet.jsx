import styled from "styled-components";

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 402px;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1000;
`;

const Sheet = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 402px;
  background: #fff;
  border-radius: 20px 20px 0px 0px;
  padding: 14px 20px 36px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Handle = styled.div`
  width: 44px;
  height: 6px;
  border-radius: 1000px;
  background: #e0e5ee;
  margin-bottom: 16px;
`;

function BaseBottomSheet({ onClose, children }) {
  return (
    <Backdrop onClick={onClose}>
      <Sheet onClick={(e) => e.stopPropagation()}>
        <Handle />
        {children}
      </Sheet>
    </Backdrop>
  );
}

export default BaseBottomSheet;
