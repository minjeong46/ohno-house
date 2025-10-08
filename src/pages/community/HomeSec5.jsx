import { categoryProduct } from "../../data/community/HomeSec5Data.js";
import SectionHeader from "./SectionHeader.jsx";
import CustomSwiper from "../../components/CustomSwiper/CustomSwiperBase.jsx";

const HomeSec5 = () => {
    return (
        <section className="w-full px-[60px] mb-[40px]">
            <SectionHeader title={"카테고리별 상품 찾기"} />
            <CustomSwiper
                PerView={13}
                PerGroup={13}
                spaceBetween={12}
                speed={500}
                slideItem={categoryProduct}
                render={(item) => (
                    <a href="/" className="w-[72px]">
                        <div className="overflow-hidden rounded-md relative">
                            <img
                                src={item.img}
                                alt={item.label}
                                className="object-cover hover:scale-105 transition-transform duration-300"
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
