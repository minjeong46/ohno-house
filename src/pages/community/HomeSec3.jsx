import { interiorSlide } from "../../data/community/HomeSec3Data.js";
import scrap from "../../assets/community/scrap.svg";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import SectionHeader from "./SectionHeader.jsx";
import CustomSwiper from "../../components/CustomSwiper/CustomSwiperBase.jsx";

const HomeSec3 = () => {
    return (
        <section className="w-full px-[60px] mb-[40px]">
            <SectionHeader
                title={"이런 사진 찾고 있나요?"}
                subTitle={"좋아하실 만한 인테리어 콘텐츠를 추천해드려요"}
            />
            <CustomSwiper
                PerView={6}
                PerGroup={6}
                spaceBetween={20}
                speed={500}
                slideItem={interiorSlide}
                render={(item) => (
                    <a href="/" className="w-[calc(16.6667% - 16.6667px)] ">
                        <div className="overflow-hidden rounded-md relative">
                            <img
                                src={item.img}
                                alt={`${item.nickname} 인테리어 이미지`}
                                className="h-[230px] object-cover hover:scale-105 transition-transform duration-300"
                            />

                            <div className="absolute bottom-2 w-full flex justify-between px-2">
                                <div>
                                    <span className="flex items-center mt-2">
                                        <div className="w-5 h-5 rounded-xl border mr-2 bg-white"></div>
                                        <p className="text-xs text-white">
                                            {item.nickname}
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
                        </div>
                    </a>
                )}
                plusViewSlide={
                    <div className="w-[calc(16.6667% - 16.6667px)] h-[230px] flex flex-col items-center justify-center">
                        <a
                            href="/"
                            className="bg-[#eee] hover:bg-[#ddd] w-10 h-10 rounded-full shadow-sm flex justify-center items-center"
                        >
                            <ArrowRightIcon className="h-5 w-5 text-gray-800" />
                        </a>
                        <span className="text-sm mt-1">더보기</span>
                    </div>
                }
            />
        </section>
    );
};

export default HomeSec3;
