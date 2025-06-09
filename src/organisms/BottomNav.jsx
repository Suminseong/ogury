"use client";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";

const NavWrapper = styled.nav`
  width: 100%;
  max-width: 402px;
  height: 86px;
  padding: 8px 4px 28px;
  background: white;
  border-top: 1px solid #e9e9e9;
  display: flex;

  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  z-index: 100;
`;

const NavItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${(props) => (props.$active ? "#232428" : "#AEAFB6")};
  font-size: 14px;
  text-align: center;

  cursor: pointer;
`;

function BottomNav() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const items = [
    {
      label: "홈",
      to: "/",
      iconActiveSrc: "/btmNav/home-active.svg",
      iconInactiveSrc: "/btmNav/home-inactive.svg",
    },
    {
      label: "공구",
      to: "/gongu",
      iconActiveSrc: "/btmNav/gongu-active.svg",
      iconInactiveSrc: "/btmNav/gongu-inactive.svg",
    },
    {
      label: "공구 현황",
      to: "/status",
      iconActiveSrc: "/btmNav/status-active.svg",
      iconInactiveSrc: "/btmNav/status-inactive.svg",
    },
    {
      label: "커뮤니티",
      to: "/community",
      iconActiveSrc: "/btmNav/community-active.svg",
      iconInactiveSrc: "/btmNav/community-inactive.svg",
    },
  ];

  return (
    <NavWrapper>
      {items.map(({ label, to, iconActiveSrc, iconInactiveSrc }) => {
        const isActive = pathname === to;
        return (
          <NavItem key={label} $active={isActive} onClick={() => navigate(to)}>
            <img src={isActive ? iconActiveSrc : iconInactiveSrc} alt={label} />
            {label}
          </NavItem>
        );
      })}
    </NavWrapper>
  );
}

export default BottomNav;
