import React from "react";
import { todayHouse } from "../../data/community/HomeSec4Data.js";
import scrap from "../../assets/community/scrap.svg";
import SectionHeader from "../../pages/community/SectionHeader.jsx";

const HomeSec4 = () => {
    return (
        <section className="w-full px-[60px] mb-[40px]">
            <SectionHeader title={"오늘의 추천 집들이 구경해보세요🧐"} />
            <div className="grid grid-cols-4 gap-5">
                {todayHouse.map((item, index) => {
                    return (
                        <a href="/" className="flex flex-col" key={index}>
                            <div className="overflow-hidden rounded-md relative">
                                <img
                                    src={item.img}
                                    alt={`집들이이미지${index}`}
                                    className="h-fit object-cover hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute right-2 bottom-2">
                                    {/* 스크랩 */}
                                    <button className="translate-y-2">
                                        <img
                                            src={scrap}
                                            className="w-fit h-fit"
                                        ></img>
                                    </button>
                                </div>
                            </div>
                            <span className="text-[16px] mt-2 text-gray-600 line-clamp-2 break-words break-keep">
                                {item.text}
                            </span>
                        </a>
                    );
                })}
            </div>
        </section>
    );
};

export default HomeSec4;
