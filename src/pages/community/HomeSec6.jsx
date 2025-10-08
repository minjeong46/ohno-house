import { interiorReview } from "../../data/community/HomeSec6Data.js";
import SectionHeader from "../../pages/community/SectionHeader.jsx";

const HomeSec6 = () => {
    return (
        <section className="w-full px-[60px] mb-[40px]">
            <SectionHeader title={"유저들의 인테리어 시공 리뷰"} />
            <div className="grid grid-cols-3 gap-5">
                {interiorReview.map((item, index) => {
                    return (
                        <a href="/" className="flex flex-col" key={index}>
                            <div className="overflow-hidden rounded-md">
                                <img
                                    src={item.img}
                                    alt={item.label}
                                    className="w-full h-[224px] object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="text-[16px] mt-2">
                                <span className="font-bold">{item.label}</span>
                                <span className="text-[16px] mt-1 text-gray-600 line-clamp-3">
                                    {item.text}
                                </span>
                            </div>
                        </a>
                    );
                })}
            </div>
        </section>
    );
};

export default HomeSec6;
