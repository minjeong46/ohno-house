import { communityImages, slide } from "./images.js";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { useRef, useState } from "react";

const HomeSec1 = () => {
    const [currentIndex, setCurrentIndex] = useState(1);

    const swiperInstance = useRef(null);

    return (
        <section className="w-full px-[60px]">
            <div className="flex w-full h-[508px]">
                <div className="flex flex-grow flex-shrink basis-[847px] relative">
                    <a href="/" className="w-full overflow-hidden rounded-md">
                        <img
                            src={communityImages.mainImg}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </a>
                    <div className="h-[150px] absolute bottom-0 left-0 flex flex-col justify-end px-7 py-7 text-white">
                        <span className="text-3xl font-bold">
                            광고미술감독이 반한 채광 맛집, 유니크한
                            스타일링까지!
                        </span>
                        <span className="flex items-center mt-2">
                            <div className="w-5 h-5 rounded-xl border mr-2 bg-white"></div>
                            <p>snowy03</p>
                        </span>
                    </div>
                </div>
                <div className="flex flex-grow flex-shrink basis-[270px] ml-5 relative group">
                    <Swiper
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            el: ".custom-page",
                            clickable: true,
                        }}
                        navigation={false}
                        modules={[Autoplay, Pagination, Navigation]}
                        loop={true}
                        onSwiper={(swiper) => (swiperInstance.current = swiper)}
                        onActiveIndexChange={(swiper) => {
                            setCurrentIndex(swiper.realIndex + 1);
                        }}
                        className="w-[269px]"
                    >
                        {slide.map((item, index) => {
                            return (
                                <SwiperSlide
                                    key={index}
                                    className="overflow-hidden rounded-md"
                                >
                                    <a href="/">
                                        <img
                                            src={item}
                                            alt=""
                                            className="object-cover"
                                        />
                                    </a>
                                </SwiperSlide>
                            );
                        })}

                        <div className="custom-pagination absolute bottom-3 right-3 flex justify-center items-center w-[4.5rem] h-6 z-10 bg-black bg-opacity-50 rounded-xl ">
                            <span className="text-white text-sm font-bold">
                                {`${currentIndex} / ${slide.length} +`}
                            </span>
                        </div>
                    </Swiper>
                        <button
                            onClick={() => swiperInstance.current.slidePrev()}
                            className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute top-1/2 -left-[1.75rem] z-10 bg-white w-12 h-12 rounded-full shadow-md"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-7 absolute top-[0.6rem] left-2 "
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
                            className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute top-1/2 -right-[1.75rem] z-10 bg-white w-12 h-12 rounded-full shadow-md"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-7 absolute top-[0.6rem] right-2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                                />
                            </svg>
                        </button>
                </div>
            </div>
        </section>
    );
};

export default HomeSec1;
