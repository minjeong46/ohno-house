import React, { useState } from 'react';
import AD1 from '../../assets/shopping_1.avif';
import AD2 from '../../assets/shopping_2.avif';
import AD3 from '../../assets/shopping_3.avif';
import AD4 from '../../assets/shopping_4.avif';
import AD5 from '../../assets/shopping_5.avif';

const Home = () => {
  // AD1 변수만 사용하고, 렌더링할 때 배열을 만듭니다.
  // 동일한 이미지 파일을 재사용할 것이므로, 파일 import는 하나로 충분합니다.
  const imageSources = [
    { src: AD1, alt: 'Shopping AD 1' },
    { src: AD2, alt: 'Shopping AD 2' }, // 같은 이미지 파일을 다른 컨텐츠처럼 사용
    { src: AD3, alt: 'Shopping AD 3' },
    { src: AD4, alt: 'Shopping AD 4' },
    { src: AD5, alt: 'Shopping AD 5' },
  ];

  const [currentSlide, setCurrentSlide] = useState(0); // 현재 보이는 슬라이드 인덱스 (0부터 시작)

  const nextSlide = () => {
    // 다음 슬라이드로 이동 (마지막이면 처음(0)으로 부드럽게 이동)
    setCurrentSlide((prevSlide) => (prevSlide + 1) % imageSources.length);
  };

  const prevSlide = () => {
    // 이전 슬라이드로 이동 (처음이면 마지막으로 부드럽게 이동)
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + imageSources.length) % imageSources.length
    );
  };

  return (
    // 1. 가장 바깥쪽 컨테이너의 높이를 h-[380px]로 고정
    <div className="relative w-full max-w-screen-xl mx-auto overflow-hidden rounded-lg shadow-lg h-[380px]">
      {/* 슬라이더 이미지 컨테이너 */}
      <div
        className="h-full flex transition-transform duration-500 ease-in-out"
        // 슬라이드 이동 (가로 -currentSlide * 100% 이동)
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
          width: `${imageSources.length * 100}%`,
        }}
      >
        {/* 2. 배열을 map으로 순회하며 이미지를 올바르게 렌더링 */}
        {imageSources.map((image, index) => (
          <img
            // key 속성에는 인덱스 대신 고유 ID를 사용하는 것이 좋으나, 여기서는 간결성을 위해 인덱스 사용
            key={index}
            src={image.src} // AD1 변수의 실제 경로 값을 사용
            alt={image.alt}
            // 이미지가 컨테이너의 전체 너비와 높이를 꽉 채우도록 설정
            className="w-full h-full flex-shrink-0 object-cover"
            style={{ width: `${100 / imageSources.length}%` }} // 각 이미지가 전체 너비의 N분의 1을 차지하도록 설정
          />
        ))}
      </div>

      {/* 이전 버튼 */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 
                   bg-gray-800 bg-opacity-50 text-white p-3 rounded-full 
                   hover:bg-opacity-75 focus:outline-none transition-colors 
                   cursor-pointer text-2xl z-10"
      >
        &lt;
      </button>

      {/* 다음 버튼 */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 
                   bg-gray-800 bg-opacity-50 text-white p-3 rounded-full 
                   hover:bg-opacity-75 focus:outline-none transition-colors 
                   cursor-pointer text-2xl z-10"
      >
        &gt;
      </button>

      {/* 페이지네이션 (현재 슬라이드 번호) */}
      <div
        className="absolute bottom-4 right-4 bg-gray-800 bg-opacity-50 text-white 
                   px-3 py-1 rounded-full text-sm z-10"
      >
        {`${currentSlide + 1} / ${imageSources.length}`}
      </div>
    </div>
  );
};

export default Home;
