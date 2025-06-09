import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainDashboard from "./pages/MainDashboard";
import GonguListPage from "./pages/GonguListPage";
import GonguWrite from "./pages/GonguWrite";
import ReviewWrite from "./pages/ReviewWrite";
import GonguStatePage from "./pages/GonguStatePage";
import CommunityPage from "./pages/CommunityPage";
import GonguViewPage from "./pages/GonguViewPage";
import CommunityViewPage from "./pages/CommunityViewPage";
import SelectGongu from "./pages/SelectGongu";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainDashboard />} />
      {/* 공구 */}
      <Route path="/gongu" element={<GonguListPage />} />
      <Route path="/gongu/new" element={<GonguWrite />} />
      <Route path="/status" element={<GonguStatePage />} />
      <Route path="/gongu/:id" element={<GonguViewPage />} />
      {/* 커뮤니티 */}
      <Route path="/community" element={<CommunityPage />} />
      <Route path="/selectGongu" element={<SelectGongu />} />
      <Route path="/community/new" element={<ReviewWrite />} />
      <Route path="/community/:id" element={<CommunityViewPage />} />
      {/* gongu/ 데이터 값 id를 집어 넣어 상세 페이지로 진입 할 수 있게. 상세 페이지 컴포넌트는 GonguViewPage.jsx */}
      {/* <Route path="/gongu/edit" element={<GonguWrite />} /> */}
    </Routes>
  </BrowserRouter>
);

// Gongu List Data 예시
/*
  const [postData, setPostData] = useState({
    post: [
      {
        id: "param",
        images: [
          이미지 base64,
        ],
        rating: "3",
        title: "테무에서 토마토 공구 모아요",
        date: "timestamp",
        bodys: "박재민삽니다 사요",
        comment: [
          { id: "1", time: "1분 전", comment: "하이" },
          { id: "2", time: "3분 전", comment: "뭐야" },
          { id: "3", time: "10분 전", comment: "gdgdg~" },
        ]
      }
    ]
  });
*/

// gongu community data 예시

/*


  const [postData, setPostData] = useState({
    post: [
      {
        id: "1",
        images: [
          base64 이미지,
        ],
        category: "생수",
        title: "테무에서 토마토공구",
        date: 20250603,
        deadline: 20250613,
        finalnum: 20,
        price: 1000,
        bodys: "테무에서 공구했는데 진짜 맛있었음ㅠ 진짜 토마토 맞아? 싶을 정도로 달고 과즙 터져서 감동함.. 혼자 먹기 아쉬울 정도였음. 같이 공구했던 분람 있을까?? 나 또 하고 싶음",
        currentnum: 30,
        link: "https://www.naver.com"
      }
    ]
  });

*/
