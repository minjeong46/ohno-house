import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { useRef, useState } from "react";
import CustomSwiperBtn from "./CustomSwiperBtn";

const CustomSwiperBase = ({
    PerView,
    PerGroup,
    spaceBetween,
    speed,
    slideItem,
    render,
    plusViewSlide,
    breakpoints,
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
                spaceBetween={spaceBetween}
                speed={speed}
                onSwiper={(swiper) => (swiperInstance.current = swiper)}
                onActiveIndexChange={(swiper) => {
                    setIsBeginning(swiper.isBeginning);
                    setIsEnd(swiper.isEnd);
                }}
                breakpoints={breakpoints}
                className="relative"
            >
                {slideItem.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            {render(item, index)}
                        </SwiperSlide>
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

export default CustomSwiperBase;
