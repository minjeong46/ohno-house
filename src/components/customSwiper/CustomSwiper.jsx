import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { useRef, useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import CustomSwiperBtn from "./CustomSwiperBtn";

const CustomSwiper = ({
    PerView,
    PerGroup,
    spaceBetween,
    speed,
    slideItem,
    render,
    plusViewSlide,
}) => {
    const swiperInstance = useRef(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    return (
        <div className="w-full relative">
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                navigation={false}
                watchOverflow={true}
                slidesPerView={PerView}
                slidesPerGroup={PerGroup}
                spaceBetween={spaceBetween}
                speed={speed}
                onSwiper={(swiper) => (swiperInstance.current = swiper)}
                onActiveIndexChange={(swiper) => {
                    setIsBeginning(swiper.isBeginning);
                    setIsEnd(swiper.isEnd);
                }}
                className="relative"
            >
                {slideItem.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>{render(item, index)}</SwiperSlide>
                    );
                })}
                {plusViewSlide && <SwiperSlide>{plusViewSlide}</SwiperSlide>}
            </Swiper>
            <CustomSwiperBtn
                swiperInstance={swiperInstance}
                isBeginning={isBeginning}
                isEnd={isEnd}
            />
        </div>
    );
};

export default CustomSwiper;
