import { communityImages, slide } from "../../data/community/HomeSec1Data.js";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CustomSwiperMore from "../../components/CustomSwiper/CustomSwiperMore.jsx";

const HomeSec1 = () => {
    return (
        <section className="max-w-[1256px] mx-auto lg:px-[60px] px-[40px]">
            <div className="flex items-stretch w-full gap-5">
                <div className="flex-[3] min-w-[498px] relative ">
                    <a
                        href="/"
                        className="block w-full h-full overflow-hidden rounded-md"
                    >
                        <img
                            src={communityImages.mainImg}
                            alt="메인이미지"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </a>
                    <div className="absolute bottom-0 left-0 flex flex-col justify-end px-7 py-7 text-white">
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
                <div className="flex-[1] min-w-[158px] h-full relative group">
                    <CustomSwiperMore
                        slideItem={slide}
                        render={(item, index) => (
                            <a href="/" className="block w-full h-full">
                                <div className="w-fit h-full overflow-hidden rounded-md relative">
                                    <img
                                        src={item}
                                        alt={`slide-${index} 이미지`}
                                        className="w-full h-full object-cover"
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
