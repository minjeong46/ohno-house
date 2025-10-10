import { categoryProduct } from "../../data/community/HomeSec5Data.js";
import SectionHeader from "./SectionHeader.jsx";
import CustomSwiperBase from "../../components/CustomSwiper/CustomSwiperBase.jsx";

const HomeSec5 = () => {
    return (
        <section className="max-w-[1256px] mx-auto lg:px-[60px] px-[40px] mb-[40px]">
            <SectionHeader title={"카테고리별 상품 찾기"} />
            <CustomSwiperBase
                breakpoints={{
                    0: { slidesPerView: 6, slidesPerGroup: 13 },
                    640: { slidesPerView: 8, slidesPerGroup: 13 },
                    860: { slidesPerView: 10, slidesPerGroup: 13 },
                    1024: { slidesPerView: 13, slidesPerGroup: 13 },
                }}
                spaceBetween={12}
                speed={500}
                slideItem={categoryProduct}
                render={(item) => (
                    <a href="/" className="">
                        <div className="w-full overflow-hidden rounded-md relative">
                            <img
                                src={item.img}
                                alt={item.label}
                                className="h-[72px] object-cover hover:scale-105 transition-transform duration-300"
                            />

                            <span className="block text-sm text-center text-gray-600 whitespace-nowrap mt-2">
                                {item.label}
                            </span>
                        </div>
                    </a>
                )}
            />
        </section>
    );
};

export default HomeSec5;
