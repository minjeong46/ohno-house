// src/components/HomeBanner.jsx

import React, { useRef, useEffect } from 'react'; // 💡 useEffect import 필수
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
import { homeBanners, ArrowIcons } from '../shopping/images';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiperStylesOverride = `
    /* Swiper가 기본적으로 생성한 DIV를 완전히 숨김 (작동 중복 및 시각적 문제 해결) */
    .swiper-button-prev, .swiper-button-next {
        display: none !important;
    }

    /* Swiper가 기본적으로 생성하는 텍스트 화살표(가상 요소) 제거 */
    .swiper-button-prev::after, .swiper-button-next::after {
        content: '';
    }
    
    /* 💡 페이지네이션 폭 문제 해결 및 스타일링 */
    .swiper-pagination-fraction {
        background: rgba(0, 0, 0, 0.4);
        font-size: 15px;
        color: rgba(255, 255, 255, 0.6); 
        font-weight: 700 !important;
        width: 60px;
        padding: 0px 2px 0px 2px;
        border-radius: 20px;
        margin-left: auto;
        margin-right: 0;
        position: absolute;
        right: 50px;
        padding: 3px 3px 3px 3px;
    }

    .swiper-pagination-current {
        color: white; 
        font-weight: 700
    }
`;

function HomeBanner() {
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // 💡 useEffect를 사용하여 DOM 렌더링 후 Ref 연결을 보장 (작동 문제 최종 해결)
  useEffect(() => {
    // Swiper 인스턴스가 존재하고, 화살표 Ref가 모두 존재할 때만 실행
    if (swiperRef.current && prevRef.current && nextRef.current) {
      const swiper = swiperRef.current;

      // Ref 연결 로직
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;

      // Swiper 네비게이션을 업데이트하여 Ref를 인식시키고 활성화
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiperRef, prevRef, nextRef]);

  return (
    <>
      <style>{swiperStylesOverride}</style>

      {/* 1. 최상위 DIV: Full Width */}
      <div
        className="
                    h-96 group relative 
                    w-screen 
                    left-1/2 -translate-x-1/2 mt-0 
                "
      >
        <Swiper
          onSwiper={(swiper) => {
            // Swiper 인스턴스를 저장하여 useEffect에서 사용
            swiperRef.current = swiper;
          }}
          // onInit은 제거하고 useEffect로 대체했습니다.
          modules={[Navigation, Pagination, Autoplay, A11y]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          // 💡 이 속성은 필수: 커스텀 버튼 사용을 알리고 기본 버튼 생성을 억제합니다.
          navigation={{}}
          pagination={{
            type: 'fraction',

            formatFractionCurrent: function (number) {
              return number < 10 ? '0' + number : number;
            },

            renderFraction: function (currentClass, totalClass) {
              return (
                `<span class="${currentClass}"></span>` +
                '/' +
                `<span class="${totalClass}"></span>`
              );
            },
          }}
          loop={true}
          spaceBetween={0}
          slidesPerView={1}
          allowTouchMove={true}
          className="w-full h-full cursor-pointer"
        >
          {homeBanners.map((banner, index) => (
            <SwiperSlide key={index}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full cursor-pointer"
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

        {/* 2. 중앙 정렬 컨테이너: 화살표와 페이지네이션을 여기에 배치 */}
        <div className="absolute inset-0 max-w-7xl mx-auto pointer-events-none z-10">
          {/* 3. 페이지네이션: 오른쪽 하단에 고정 */}
          <div className="absolute right-0 bottom-0 pointer-events-auto z-20 mb-5 mr-5">
            <div className="swiper-pagination-fraction"></div>
          </div>

          {/* 4. 이전 버튼 (Ref 연결) */}
          <div
            ref={prevRef}
            className="
                            absolute left-0 top-1/2 transform -translate-y-1/2 
                            p-2 cursor-pointer pointer-events-auto 
                            z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                            ml-4 bg-black/10
                            hover:bg-black/40 rounded-full w-12 h-12 flex items-center justify-center text-white
                        "
          >
            <img src={ArrowIcons.left} alt="이전" className="w-7 h-7 " />
          </div>

          {/* 5. 다음 버튼 (Ref 연결) */}
          <div
            ref={nextRef}
            className="
                            absolute right-0 top-1/2 transform -translate-y-1/2 
                            p-2 cursor-pointer pointer-events-auto 
                            z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                            mr-6 bg-black/10
                            hover:bg-black/40 rounded-full w-12 h-12 flex items-center justify-center text-white
                        "
          >
            <img src={ArrowIcons.right} alt="다음" className="w-7 h-7 " />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeBanner;
