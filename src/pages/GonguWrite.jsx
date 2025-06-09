import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";

import TitleHeader from "../molecules/TitleHeader";
import TextInput from "../atoms/TextInput";
import CategoryBottomSheet from "../organisms/CategoryBottomSheet";
import CalendarBottomSheet from "../organisms/CalendarBottomSheet";

const StyledGonguWrite = styled.div`
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

// 글 작성
const PostWrite = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0px 20px;
  margin: 28px 0;

  & > .title {
    color: var(--GRAY-GRAY600, #232428);
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
  }
`;

const PostWriteItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
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

// 공동구매 진행 정보
const GonguInfoWrite = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0px 20px;
  margin-bottom: 28px;

  & > .title {
    color: var(--GRAY-GRAY600, #232428);
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
  }
`;

const GonguInfoWriteItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

/* 가격 원 기호 */
const PriceBox = styled.div`
  position: relative;

  /* 가격 값이 있을 때, 원 기호 있을 자리 여백 늘리기 */
  input {
    ${({ hasValue }) => hasValue && "padding-left: 30px;"}
  }

  /* 가격 값이 있을 때, 원 기호 출력 */
  &::after {
    content: ${({ hasValue }) => (hasValue ? '"₩"' : '""')};
    position: absolute;
    top: calc(50% + 12.5px);
    left: 12px;
    transform: translateY(-50%);
    font-size: 16px;
    font-weight: 600;
    line-height: 150%;
    color: var(--GRAY-GRAY400, #66686e);

    pointer-events: none;
  }
`;

// 인원 & 1인당 가격 묶은 섹션
const PeopleAndPriceSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

//1인당 가격, 키프레임 애니메이션
const fadeSlideIn = keyframes`
  0%   { opacity: 0; transform: translateY(-4px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const PerPersonInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  padding: 12px;
  border-radius: 4px;

  background: var(--BLUE-BLUE03, #f3f7ff);
  color: var(--BLUE-BLUE01, #4284ff);
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 500;
  line-height: 150%;

  animation: ${fadeSlideIn} 0.4s ease-out;

  & > span:first-child {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 20px;
    height: 20px;
  }
`;

const PriceHighlight = styled.span`
  font-weight: 700;
`;

// 카테고리
const CategoryWrap = styled.div`
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

const CategorySelector = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 12px;

  font-size: 16px;
  line-height: 150%;
  color: ${({ selected }) => (selected ? "#333" : "#aeafb6")};

  cursor: pointer;

  & > span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

// 마감기한
const DeadlineWrap = styled.div`
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

const DeadlineSelector = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 12px;
  font-size: 16px;
  line-height: 150%;
  color: ${({ selected }) => (selected ? "#333" : "#aeafb6")};
  cursor: pointer;

  & > span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

function GonguWrite(props) {
  const navigate = useNavigate();

  // ---- 입력값 상태 ----
  const [selectedCategory, setSelectedCategory] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [deadline, setDeadline] = useState("");
  const [price, setPrice] = useState("");
  const [people, setPeople] = useState("");
  const [link, setLink] = useState("");
  const [images, setImages] = useState([]);
  const fileInputRef = useRef(null);

  // ---- 작성 완료 여부 ----
  const isFormValid =
    selectedCategory &&
    title.trim() &&
    content.trim() &&
    deadline &&
    price &&
    people &&
    link &&
    images.length > 0;

  // 가격 세자리 콤마 로직
  // "30,000" → "30000"
  const stripComma = (v) => v.replace(/[^\d]/g, "");
  // 30000 → "30,000"
  const addComma = (n) => (n ? Number(n).toLocaleString("ko-KR") : "");

  // ---- 1인당 금액 계산 로직 ----
  const perPerson =
    Number(price) > 0 && Number(people) > 0
      ? Math.floor(Number(price) / Number(people))
      : null;

  // ---- 카테고리 바텀시트 ----
  const [showCategorySheet, setShowCategorySheet] = useState(false);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setShowCategorySheet(false);
  };

  // ---- 캘린더 바텀시트 ----
  const [showCalendarSheet, setShowCalendarSheet] = useState(false);

  // 캘린더 인풋 날짜 포맷: YYYY년 MM월 DD일
  const formatDate = (date) =>
    `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;

  const handleSelectDeadline = (date) => {
    setDeadline(formatDate(date));
    setShowCalendarSheet(false);
  };

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

  // ------------------- firebase 연동 ----------------------------
  const handleSubmit = async () => {
    if (!isFormValid) return;

    try {
      // const newDocRef = doc(db, "gongu", String(timestamp));
      // const newDocRef = doc(collection(db, "gongu")); // 랜덤 ID 생성
      // let timestamp = new Date().getTime().toString();

      const timestamp = Date.now().toString(); // 현재 시간을 문자열로
      const newDocRef = doc(db, "gongu", timestamp); // 타임스탬프를 ID로 지정

      await setDoc(newDocRef, {
        id: timestamp,
        postid: timestamp,
        title: title.trim(),
        body: content.trim(),
        category: selectedCategory,
        images: images.map((img) => img.src),
        price: Number(stripComma(price)),
        deadline: new Date(
          deadline.replace(/년|월/g, "-").replace(/일/g, "")
        ).getTime(),
        date: timestamp,
        finalnum: Number(people),
        currentnum: 0,
        participant: ["공구킹 영재_123456"], // owner를 자동으로 첫 참여자로 추가
        link: link.trim(),
        owner: "공구킹 영재_123456",
        isReviewed: false,
      });

      alert("공동구매 글이 등록되었습니다.");
      navigate(-1);
    } catch (err) {
      alert("등록에 실패했습니다.");
      console.error(err);
    }
  };

  return (
    <StyledGonguWrite>
      <StatusBar>
        <img src="/StatusBar.png" alt="StatusBar"></img>
      </StatusBar>

      {/* 헤더 */}
      <TitleHeader
        state="TextActionBar"
        text="공동구매 글 작성"
        iconType="x"
        disabled={!isFormValid}
        onClick={handleSubmit}
      />

      {/* 글 작성 */}
      <PostWrite>
        <p className="title">글 작성</p>
        <PostWriteItem>
          {/* 카테고리 */}
          <CategoryWrap>
            <label>카테고리</label>
            <CategorySelector
              selected={!!selectedCategory}
              onClick={() => setShowCategorySheet(true)}
            >
              {selectedCategory || "카테고리를 선택해주세요."}
              <span>
                <img src="/arrow-down.svg" alt="" />
              </span>
            </CategorySelector>
          </CategoryWrap>
          {/* 제목 */}
          <TextInput
            label="제목"
            placeholder="제목을 입력해주세요"
            charLimit={18}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {/* 내용 */}
          <TextInput
            label="내용"
            placeholder="공구할 상품에 대한 설명을 입력해주세요"
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
        </PostWriteItem>
      </PostWrite>

      {/* 공동구매 진행 정보 */}
      <GonguInfoWrite>
        <p className="title">공동구매 진행 정보</p>
        <GonguInfoWriteItem>
          {/* 마감기한 */}
          <DeadlineWrap>
            <label>마감기한</label>
            <DeadlineSelector
              selected={!!deadline}
              onClick={() => setShowCalendarSheet(true)}
            >
              {deadline || "마감 기한을 선택해주세요"}
              <span>
                <img src="/calendar.svg" alt="" />
              </span>
            </DeadlineSelector>
          </DeadlineWrap>
          {/* 가격 */}
          <PriceBox hasValue={price !== ""}>
            <TextInput
              label="가격"
              placeholder="상품의 가격을 입력해주세요"
              value={addComma(price)}
              onChange={(e) => {
                const raw = stripComma(e.target.value);
                setPrice(raw);
              }}
            />
          </PriceBox>

          <PeopleAndPriceSection>
            {/* 모집인원 */}
            <TextInput
              label="모집인원"
              placeholder="공동구매할 인원을 입력해주세요"
              value={people}
              onChange={(e) => setPeople(e.target.value)}
            />
            {/* 1인당 가격 알림 */}
            {perPerson !== null && (
              <PerPersonInfo>
                <img src="/price.svg" alt="" />
                <span>
                  1인당{" "}
                  <PriceHighlight>{perPerson.toLocaleString()}</PriceHighlight>
                  원이에요!
                </span>
              </PerPersonInfo>
            )}
          </PeopleAndPriceSection>

          {/* 상품링크 */}
          <TextInput
            label="상품링크"
            placeholder="상품 링크를 입력해주세요"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </GonguInfoWriteItem>
      </GonguInfoWrite>

      {/* 카테고리 바텀시트 */}
      {showCategorySheet && (
        <CategoryBottomSheet
          onClose={() => setShowCategorySheet(false)}
          onSelect={handleSelectCategory}
        />
      )}

      {/* 캘린더 바텀시트 */}
      {showCalendarSheet && (
        <CalendarBottomSheet
          onClose={() => setShowCalendarSheet(false)}
          onSelectDate={handleSelectDeadline}
        />
      )}
    </StyledGonguWrite>
  );
}

export default GonguWrite;
