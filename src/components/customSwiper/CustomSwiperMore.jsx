import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { useRef, useState } from "react";
import CustomSwiperBtn from "./CustomSwiperBtn";

const CustomSwiperMore = ({
    slideItem,
    speed = 500,
    loop = true,
    render,
    autoplay = { delay: 3000, disableOnInteraction: false },
    width,
}) => {
    const swiperInstance = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(1);

    return (
        <div className="w-full relative">
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                navigation={false}
                watchOverflow={true}
                loop={loop}
                speed={speed}
                onSwiper={(swiper) => (swiperInstance.current = swiper)}
                onActiveIndexChange={(swiper) => {
                    setCurrentIndex(swiper.realIndex + 1);
                }}
                autoplay={autoplay}
                className={`w-[${width}]`}
            >
                {slideItem.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            {render(item, index)}
                        </SwiperSlide>
                    );
                })}
                <div className="custom-pagination absolute bottom-3 right-3 flex justify-center items-center w-[4.5rem] h-6 z-10 bg-black bg-opacity-50 rounded-xl ">
                    <span className="text-white text-sm font-bold">
                        {`${currentIndex} / ${slideItem.length} +`}
                    </span>
                </div>
            </Swiper>

            <CustomSwiperBtn swiperInstance={swiperInstance} hover={true} />
        </div>
    );
};

export default CustomSwiperMore;
