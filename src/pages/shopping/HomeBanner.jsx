// src/components/HomeBanner.jsx (간소화 버전)

import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { homeBanners, ArrowIcons } from '../shopping/images'; // 이미지 경로는 유지
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Swiper 기본 스타일 오버라이드: 기본 화살표와 텍스트를 숨기고, 페이지네이션 스타일링
const swiperStylesOverride = `
    /* Swiper 기본 버튼 DIV 및 텍스트 제거 */
    .swiper-button-prev, .swiper-button-next,
    .swiper-button-prev::after, .swiper-button-next::after {
        display: none !important;
        content: '';
    }
    
    /* 커스텀 페이지네이션 스타일링 */
    .swiper-pagination-fraction {
    display: flex;
    justify-content: center;
    align-items: center; 
        background: rgba(0, 0, 0, 0.4);
        font-size: 15px;
        color: rgba(255, 255, 255, 0.6); 
        font-weight: 700 !important;
        width: 60px;
        padding: 3px;
        border-radius: 20px;
        position: relative;
        top: 90%;
        left: 90%;
    }
    .swiper-pagination-current {
        color: white; 
        font-weight: 700;
    }
`;

function HomeBanner() {
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    const swiper = swiperRef.current;
    if (swiper && prevRef.current && nextRef.current) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, []);

  return (
    <>
      <style>{swiperStylesOverride}</style>
      <div className="h-96 group relative w-screen left-1/2 -translate-x-1/2 mt-[-30px]">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          // 💡 커스텀 네비게이션 사용을 알림 (필수!)
          navigation={{}}
          // 💡 커스텀 페이지네이션 설정
          pagination={{
            type: 'fraction',
            // 숫자를 '01/10' 형태로 포맷
            formatFractionCurrent: (number) =>
              number < 10 ? '0' + number : number,
            renderFraction: (currentClass, totalClass) =>
              `<span class="${currentClass}"></span>/<span class="${totalClass}"></span>`,
            // ⭐️ 페이지네이션 엘리먼트가 Swiper 내부가 아닌 외부에 있음을 명시
            el: '.custom-pagination',
            // Swiper가 페이지네이션 엘리먼트를 업데이트하도록 만듦
            clickable: false,
          }}
          loop={true}
          slidesPerView={1}
          className="w-full h-full cursor-pointer"
        >
          {homeBanners.map((banner, index) => (
            <SwiperSlide key={index}>
              <a
                // href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                <img
                  src={banner.src}
                  alt={`광고 배너 이미지 ${index + 1}`}
                  className="w-full h-full object-cover block"
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* 3. 중앙 정렬 및 컨트롤 컨테이너 */}
        <div className="absolute inset-0 max-w-7xl mx-auto pointer-events-none z-10">
          {/* 4. 페이지네이션: 오른쪽 하단에 고정 */}
          {/* Swiper의 `el` 속성과 일치하는 클래스명 부여 (`custom-pagination`) */}
          <div className="custom-pagination absolute right-0 bottom-0 pointer-events-auto z-20 mb-5 mr-5">
            {/* Swiper가 이 DIV 안에 실제 내용을 렌더링합니다. (내부 내용 비워둠) */}
          </div>

          {/* 5. 이전 버튼 (Ref 연결) */}
          <div
            ref={prevRef}
            className="
              absolute left-0 top-1/2 transform -translate-y-1/2 ml-4
              p-2 cursor-pointer pointer-events-auto z-20 
              opacity-0 group-hover:opacity-100 transition-opacity duration-300
              bg-black/10 hover:bg-black/40 rounded-full w-10 h-10 flex items-center justify-center
            "
          >
            <img src={ArrowIcons.left} alt="이전" className="w-7 h-7" />
          </div>

          {/* 6. 다음 버튼 (Ref 연결) */}
          <div
            ref={nextRef}
            className="
              absolute right-0 top-1/2 transform -translate-y-1/2 mr-6
              p-2 cursor-pointer pointer-events-auto z-20 
              opacity-0 group-hover:opacity-100 transition-opacity duration-300
              bg-black/10 hover:bg-black/40 rounded-full w-10 h-10 flex items-center justify-center
            "
          >
            <img src={ArrowIcons.right} alt="다음" className="w-7 h-7" />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeBanner;
