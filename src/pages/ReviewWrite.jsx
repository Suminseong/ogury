import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useLocation } from "react-router-dom";
import { collection, doc, setDoc, updateDoc } from "firebase/firestore";

import TitleHeader from "../molecules/TitleHeader";
import TextInput from "../atoms/TextInput";
import GetstarRating from "../molecules/GetstarRating";
import { db } from "../firebase.js";

const StyledReviewWrite = styled.div`
  display: flex;
  flex-direction: column;
  width: 402px;
  height: 100vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  font-family: Pretendard;
  background-color: #fff;
`;

// StatusBar
const StatusBar = styled.div`
  width: 402px;
  height: 50px;
  background: #fff;

  position: sticky;
  top: 0;
  z-index: 10;

  & > img {
    width: 100%;
  }
`;

const ReviewWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 28px 20px;
`;

const GonguTitle = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  & > p {
    color: #333;
    font-family: Pretendard;
    font-size: 20px;
    font-weight: 600;
    line-height: 150%; /* 30px */
  }

  & > span {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const ReviewItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StarRatingWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  & > label {
    color: var(--GRAY-GRAY400, #66686e);
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    padding: 0 2px;
  }
`;

// 이미지
const ImgWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  & > label {
    color: var(--GRAY-GRAY400, #66686e);
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    padding: 0 2px;
  }
`;

const ImgItem = styled.div`
  display: flex;
  gap: 8px;

  overflow-x: auto;
  overflow-y: hidden;
  flex-wrap: nowrap;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const UploadBtn = styled.label`
  flex: 0 0 110px;
  display: flex;
  width: 110px;
  height: 110px;
  padding: 12px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;
  border-radius: 12px;
  border: 1px solid #f1f1f1;
  background: #f4f5f8;

  color: #aeafb6;
  font-size: 32px;
  cursor: pointer;

  & > span.img-icon {
    display: flex;
    width: 24px;
    height: 24px;
  }

  & > span.img-length {
    color: var(--GRAY-GRAY400, #66686e);
    text-align: center;
    font-family: Pretendard;
    font-size: 14px;
    line-height: 150%; /* 21px */
  }
`;

const Thumb = styled.div`
  flex: 0 0 110px;
  position: relative;
  width: 110px;
  height: 110px;
  border-radius: 12px;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }

  & > button {
    position: absolute;
    top: 8px;
    right: 8px;

    width: 24px;
    height: 24px;

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1000px;
    border: none;
    background: rgba(255, 255, 255, 0.8);
    cursor: pointer;
  }
`;

function ReviewWrite(props) {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  // ---- 입력값 상태 ----
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);
  const fileInputRef = useRef(null);

  const location = useLocation();
  const selectedItem = location.state; // 🔥 전달받은 데이터

  const title = selectedItem.title;

  // db

  // useEffect(() => {
  //   db.collection('review').doc(timestamp).set().then()

  // }, []);

  function getDday() {
    const now = new Date();
    const targetDate = new Date(posts.deadline);

    const diffTime = targetDate - now;

    if (diffTime <= 0) {
      return "D-Day";
    }

    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return `D-${diffDays}`;
  }

  const save = async () => {
    const timestamp = new Date().getTime().toString();
    const reviewRef = doc(collection(db, "review"), timestamp);

    try {
      await setDoc(reviewRef, {
        id: selectedItem.date,
        images: images,
        rating: rating,
        title: title,
        date: timestamp,
        bodys: content,
        comment: [],
      });

      // 2. gongu 문서의 isReviewed를 true로 업데이트
      const gonguRef = doc(db, "gongu", selectedItem.id); // selectedItem.id는 문서의 id여야 함
      await updateDoc(gonguRef, {
        isReviewed: true,
      });

      alert("리뷰가 작성되었습니다.");
      navigate("/community");
    } catch (error) {
      console.error("리뷰 작성 실패 또는 gongu 업데이트 실패:", error);
    }
  };
  // ---- 작성 완료 여부 ----
  const isFormValid = content.trim();

  // ---- 이미지 업로드 ----
  const MAX = 5;
  const handleAddImages = (e) => {
    const remain = MAX - images.length;
    const files = Array.from(e.target.files).slice(0, remain);

    const readers = files.map(
      (f) =>
        new Promise((res) => {
          const r = new FileReader();
          r.onload = (ev) => res({ name: f.name, src: ev.target.result });
          r.readAsDataURL(f);
        })
    );
    Promise.all(readers).then((list) =>
      setImages((prev) => [...prev, ...list])
    );
  };

  const handleRemoveImage = (idx) =>
    setImages(images.filter((_, i) => i !== idx));

  return (
    <StyledReviewWrite>
      <StatusBar>
        <img src="/StatusBar.png" alt="StatusBar"></img>
      </StatusBar>

      {/* 헤더 */}
      <TitleHeader
        state="TextActionBar"
        text="후기 작성"
        disabled={!isFormValid}
        onClick={save}
      />

      {/* 리뷰 글 쓰기 */}
      <ReviewWrap>
        <GonguTitle>
          <p>{title}</p>
          <span>
            <img src="/arrow-right.svg" alt="" />
          </span>
        </GonguTitle>
        <ReviewItem>
          {/* 평점 */}
          <StarRatingWrap>
            <label>평점</label>
            <GetstarRating rating={rating} onChange={setRating} />
          </StarRatingWrap>
          {/* 내용 */}
          <TextInput
            label="내용"
            placeholder="공동구매한 상품에 대한 리뷰를 남겨주세요."
            textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          {/* 사진 */}
          <ImgWrap>
            <label>사진</label>
            <ImgItem>
              {/* 업로드 버튼 */}
              <UploadBtn onClick={() => fileInputRef.current.click()}>
                <span className="img-icon">
                  <img src="/image.svg" alt="" />
                </span>
                <span className="img-length">
                  {images.length}/{MAX}
                </span>
              </UploadBtn>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                style={{ display: "none" }}
                onChange={handleAddImages}
              />
              {/* 추가된 이미지 리스트 */}
              {images.map((img, idx) => (
                <Thumb key={idx}>
                  <img src={img.src} alt={img.name} />
                  <button onClick={() => handleRemoveImage(idx)}>
                    <img src="/delete.svg" alt="삭제" />
                  </button>
                </Thumb>
              ))}
            </ImgItem>
          </ImgWrap>
        </ReviewItem>
      </ReviewWrap>
    </StyledReviewWrite>
  );
}

export default ReviewWrite;

// 입력한 데이터 DB 연동되게 추후 수정 필요
