import React from 'react';
import styled from 'styled-components';



const Horizonal = styled.div`
  display:flex;
  gap:8px;
  align-items:center;
`;
const TimeHorizonal = styled.div`
  display:flex;
  gap:8px;
  align-items:center;
`;

const Vertical = styled.div`
  display:flex;
  flex-direction: column;
  gap:0px;
`;

const ProfileImg = styled.div`
  width:36px;
  height:36px;
  border-radius: 100px;
  background-image : url('https://i.postimg.cc/m2vj6D36/ezgif-1c89c5ecb842ad.gif');
  background-position:center;
  background-size:cover;
`
const Caption1 = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #66686E;
`
const Btn2 = styled.p`
  font-size:16px;
  font-weight: 600;
  color: #232428;
`


function Profile(props) {
  // props로 owner, date, time를 받아와야 함

  return (
    <Horizonal>
      <ProfileImg></ProfileImg>
      <Vertical>
        <Btn2>{props.owner}</Btn2>
        <TimeHorizonal>
          {/* date={new Date(posts.date).toLocaleDateString("ko-KR", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })}
              time={new Date(posts.date).toLocaleTimeString("ko-KR", {
                hour: "2-digit",
                minute: "2-digit",
              })} 
              로 불러오는 데이터를 props로 받아야 함
               */}
          <Caption1>{props.date}</Caption1>
          <Caption1>{props.time}</Caption1>
        </TimeHorizonal>
      </Vertical>
    </Horizonal>
  );
}

export default Profile;
