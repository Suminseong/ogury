import styled from "styled-components";

const TabWrapper = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid var(--GRAY-GRAY200, #e0e2e4);
  background: #fff;
  padding: 0px 20px;
`;

const TabMenu = styled.button`
  width: 100%;
  padding: 10px 0;

  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.64px;
  text-align: center;
  color: ${(props) => (props.$isActive ? "#4284ff" : "#A0A0A0")};

  border: none;
  border-bottom: solid 2px
    ${(props) => (props.$isActive ? "#3A8EFF" : "transparent")};
  background: #fff;
  cursor: pointer;
`;

function TabNavigation(props) {
  const { tabs, activeKey, onChange } = props;

  return (
    <TabWrapper>
      {tabs.map((tab) => (
        <TabMenu
          key={tab.key}
          $isActive={activeKey == tab.key}
          onClick={() => onChange(tab.key)}
        >
          {tab.label}
        </TabMenu>
      ))}
    </TabWrapper>
  );
}

export default TabNavigation;
