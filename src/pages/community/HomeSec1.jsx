import { communityImages, slide } from "../../data/community/HomeSec1Data.js";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { useRef, useState } from "react";
import CustomSwiperBtn from "../../components/customSwiper/CustomSwiperBtn.jsx";

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
                            alt="메인이미지"
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
                                            alt={`slide-${index} 이미지`}
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
                    <CustomSwiperBtn
                        swiperInstance={swiperInstance}
                        hover={true}
                    />
                </div>
            </div>
        </section>
    );
};

export default HomeSec1;
