import React, { useState } from "react";
import { categoryProduct } from "./images";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { useRef } from "react";

const HomeSec5 = () => {
    const swiperInstance = useRef(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    return (
        <section className="w-full px-[60px] mb-[40px]">
            <div className="flex justify-between items-center py-5">
                <div>
                    <strong className="text-xl">
                        카테고리별 상품 찾기
                    </strong>
                </div>
                <div>
                    <span className="font-bold text-[#11A5FD]">
                        <a href="/">더보기</a>
                    </span>
                </div>
            </div>
            <div className="w-full relative">
                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    navigation={false}
                    watchOverflow={true}
                    slidesPerView={13}
                    slidesPerGroup={13}
                    spaceBetween={12}
                    speed={500}
                    onSwiper={(swiper) => (swiperInstance.current = swiper)}
                    onActiveIndexChange={(swiper) => {
                        setIsBeginning(swiper.isBeginning);
                        setIsEnd(swiper.isEnd);
                    }}
                    className="relative"
                >
                    {categoryProduct.map((item, index) => {
                        return (
                            <SwiperSlide
                                key={index}
                                className="w-[72px] overflow-hidden rounded-md relative"
                            >
                                <a href="/" className="w-full flex flex-col">
                                    <img
                                        src={item.img}
                                        alt=""
                                        className="object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </a>
                                <span className="block text-sm text-center text-gray-600 whitespace-nowrap mt-2">{item.label}</span>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
                <button
                    onClick={() => swiperInstance.current.slidePrev()}
                    className={`${
                        isBeginning
                            ? "opacity-0 pointer-events-none"
                            : "opacity-100"
                    } absolute top-[calc(50%-1.75rem)] -left-[1.75rem] z-10 bg-white w-12 h-12 rounded-full shadow-md`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-7 absolute top-[0.7rem] left-2 "
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 19.5 8.25 12l7.5-7.5"
                        />
                    </svg>
                </button>

                <button
                    onClick={() => swiperInstance.current.slideNext()}
                    className={`${
                        isEnd ? "opacity-0 pointer-events-none" : "opacity-100"
                    } absolute top-[calc(50%-1.75rem)] -right-[1.75rem] z-10 bg-white w-12 h-12 rounded-full shadow-md`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-7 absolute top-[0.7rem] right-2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                    </svg>
                </button>
            </div>
        </section>
    );
};

export default HomeSec5;
