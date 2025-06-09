import React from 'react';
import styled from 'styled-components';



const Align = styled.button`
  display:flex;
  gap:0px;
  align-items:center;
  border: none;
  background-color: transparent;
  margin:0;
  padding:0;
`;

const TitleName = styled.div`
color: var(--GRAY-GRAY600, #232428);
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 150%;
`


const BackIcon = () =>{
  return(
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
    <path d="M7.5 15.5L12.5 10.5L7.5 5.5" stroke="#797979" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
  )
}

function BaroGo(props) {
  return (
    <Align onClick={props.onClick}>
      <TitleName>{props.children}</TitleName>
      <BackIcon></BackIcon>
    </Align>
  );
}

export default BaroGo;
