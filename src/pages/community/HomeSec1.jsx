import { communityImages, slide } from "../../data/community/HomeSec1Data.js";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CustomSwiperMore from "../../components/CustomSwiper/CustomSwiperMore.jsx";

const HomeSec1 = () => {
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
                    <CustomSwiperMore
                        slideItem={slide}
                        width={"269px"}
                        render={(item, index) => (
                            <a href="/">
                                <div className="overflow-hidden rounded-md relative">
                                    <img
                                        src={item}
                                        alt={`slide-${index} 이미지`}
                                        className="object-cover"
                                    />
                                </div>
                            </a>
                        )}
                    />
                </div>
            </div>
        </section>
    );
};

export default HomeSec1;
