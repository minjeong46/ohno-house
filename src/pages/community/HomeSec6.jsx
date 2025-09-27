import React from "react";
import { interiorReview } from "./images";

const HomeSec6 = () => {
    return (
        <section className="w-full px-[60px] mb-[40px]">
            <div className="flex justify-between items-center py-5">
                <div>
                    <strong className="text-xl hover:text-[#aaa]">
                        유저들의 인테리어 시공 리뷰
                    </strong>
                </div>
                <div>
                    <span className="font-bold text-[#11A5FD]">
                        <a href="/">더보기</a>
                    </span>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-5">
                {interiorReview.map((item, index) => {
                    return (
                        <a href="/" className="flex flex-col" key={index}>
                            <div className="overflow-hidden rounded-md">
                                <img
                                    src={item.img}
                                    alt=""
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
