import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainDashboard from "./pages/MainDashboard";
import GonguListPage from './pages/GonguListPage';
import GonguWrite from './pages/GonguWrite';
import GonguStatePage from "./pages/GonguStatePage";
import CommunityPage from "./pages/CommunityPage";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainDashboard />} />
      <Route path="/gongu" element={<GonguListPage />} />
      <Route path="/gongu/new" element={<GonguWrite />} />
      <Route path="/status" element={<GonguStatePage />} />
      <Route path="/community" element={<CommunityPage />} />
      <Route path="gongu/:postid" element={<GonguViewPage />} />
    </Routes>
  </BrowserRouter>
);
