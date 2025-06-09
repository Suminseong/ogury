"use client";
import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  width: 402px;
  flex-direction: column;
  gap: 20px;
  position: relative;
  background-color: #fff;
`;

const HeaderContent = styled.div`
  width: 100%;
  padding: 0 20px;
`;

const HeaderInner = styled.div`
  display: flex;
  height: 48px;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  color: #5792ff;
  font-family: "PpuingPpuing", -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 24px;
  font-weight: 900;
  line-height: 24px;
`;

const NotificationIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderDashboard = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderInner>
          <Logo>
            <img src="/Logo.svg" alt="" />
          </Logo>
          <NotificationIcon>
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.3"
                d="M16.651 19.0501C16.651 17.0336 15.0163 15.3989 12.9999 15.3989C10.9834 15.3989 9.34875 17.0336 9.34875 19.0501C9.34875 21.0665 10.9834 22.7012 12.9999 22.7012C15.0163 22.7012 16.651 21.0665 16.651 19.0501Z"
                fill="#66686E"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.9062 14.9206H21.9779C23.122 14.9206 24.0495 15.8482 24.0495 16.9923C24.0495 18.1364 23.122 19.0639 21.9779 19.0639H4.02353C2.87939 19.0639 1.95188 18.1364 1.95188 16.9923C1.95188 15.8482 2.87939 14.9206 4.02353 14.9206H6.09518L6.86622 7.98134C7.21353 4.85552 9.85564 2.49072 13.0007 2.49072C16.1457 2.49072 18.7879 4.85552 19.1352 7.98134L19.9062 14.9206Z"
                fill="#CACACF"
              />
              <path
                d="M22.4256 4.90391C22.4256 3.30929 21.1329 2.0166 19.5383 2.0166C17.9437 2.0166 16.651 3.30929 16.651 4.90391C16.651 6.49853 17.9437 7.79122 19.5383 7.79122C21.1329 7.79122 22.4256 6.49853 22.4256 4.90391Z"
                fill="#4284FF"
              />
            </svg>
          </NotificationIcon>
        </HeaderInner>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default HeaderDashboard;
