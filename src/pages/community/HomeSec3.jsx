import React, { useState } from "react";
import { interiorSlide } from "./images";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { useRef } from "react";
import scrap from "../../assets/community/scrap.svg";

const HomeSec3 = () => {
    const swiperInstance = useRef(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    return (
        <section className="w-full px-[60px] mb-[40px]">
            <div className="flex justify-between items-center py-5">
                <div>
                    <strong className="text-xl hover:text-[#aaa]">
                        이런 사진 찾고 있나요?
                    </strong>
                    <p className="text-sm font-light">
                        좋아하실 만한 인테리어 콘텐츠를 추천해드려요
                    </p>
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
                    slidesPerView={6}
                    slidesPerGroup={6}
                    spaceBetween={20}
                    speed={500}
                    onSwiper={(swiper) => (swiperInstance.current = swiper)}
                    onActiveIndexChange={(swiper) => {
                        setIsBeginning(swiper.isBeginning);
                        setIsEnd(swiper.isEnd);
                    }}
                    className="relative"
                >
                    {interiorSlide.map((item, index) => {
                        return (
                            <SwiperSlide
                                key={index}
                                className="w-[calc(16.6667% - 16.6667px)] overflow-hidden rounded-md relative"
                            >
                                <a href="/">
                                    <img
                                        src={item}
                                        alt=""
                                        className="h-[230px] object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </a>
                                <div className="absolute bottom-2 w-full flex justify-between px-2">
                                    <div>
                                        <span className="flex items-center mt-2">
                                            <div className="w-5 h-5 rounded-xl border mr-2 bg-white"></div>
                                            <p className="text-xs text-white">
                                                snowy03
                                            </p>
                                        </span>
                                    </div>
                                    {/* 스크랩 */}
                                    <button className="translate-y-1">
                                        <img
                                            src={scrap}
                                            className="w-fit h-fit"
                                        ></img>
                                    </button>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                    <SwiperSlide>
                        <div className="w-[calc(16.6667% - 16.6667px)] h-[230px] flex flex-col items-center justify-center">
                            <a
                                href="/"
                                className="bg-[#eee] hover:bg-[#ddd] w-10 h-10 rounded-full shadow-sm flex"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-4 relative left-[calc(50%-0.5rem)]"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                                    />
                                </svg>
                            </a>
                            <span>더보기</span>
                        </div>
                    </SwiperSlide>
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

export default HomeSec3;
