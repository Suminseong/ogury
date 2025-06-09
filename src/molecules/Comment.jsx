import React from 'react';
import styled from 'styled-components';



const Horizonal = styled.div`
  display:flex;
  gap:8px;
  padding: 16px 0;
  border-bottom: 1px solid #E9E9E9;
`;

const Horizonalmore = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
`;

const HorizonalName = styled.div`
  display:flex;
  gap:6px;
  align-items:center;
`;

const Vertical = styled.div`
  display:flex;
  flex-direction: column;
  gap:4px;
`;

const ProfileImg = styled.div`
  width:28px;
  height:28px;
  border-radius: 100px;
  background-color: gray;
`
const Ago = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #66686E;
`
const Name = styled.p`
  font-size:14px;
  font-weight: 600;
  color: #232428;
`
const CommentContents = styled.p`
  color: var(--GRAY-GRAY400, #66686E);
  font-size: 16px;
  font-weight: 400;
  line-height: 150%; /* 24px */
  width:326px;
  
`
const MoreIcon = () =>{
  return(
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M8.00004 8.66675C8.36823 8.66675 8.66671 8.36827 8.66671 8.00008C8.66671 7.63189 8.36823 7.33341 8.00004 7.33341C7.63185 7.33341 7.33337 7.63189 7.33337 8.00008C7.33337 8.36827 7.63185 8.66675 8.00004 8.66675Z" stroke="#66686E" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8.00004 4.00008C8.36823 4.00008 8.66671 3.7016 8.66671 3.33341C8.66671 2.96522 8.36823 2.66675 8.00004 2.66675C7.63185 2.66675 7.33337 2.96522 7.33337 3.33341C7.33337 3.7016 7.63185 4.00008 8.00004 4.00008Z" stroke="#66686E" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8.00004 13.3334C8.36823 13.3334 8.66671 13.0349 8.66671 12.6667C8.66671 12.2986 8.36823 12.0001 8.00004 12.0001C7.63185 12.0001 7.33337 12.2986 7.33337 12.6667C7.33337 13.0349 7.63185 13.3334 8.00004 13.3334Z" stroke="#66686E" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  )
}

function Comment(props) {
  return (
    <Horizonal>
       <ProfileImg></ProfileImg>

        <Vertical>
          <Horizonalmore>
            <HorizonalName>
              <Name>이영재</Name>
              <Ago>{props.ago|| '10분전'}</Ago>
            </HorizonalName>
              <MoreIcon></MoreIcon>
          </Horizonalmore>
          
          <CommentContents>{props.text}</CommentContents>
        </Vertical>

    </Horizonal>
  );
}
export default Comment;
