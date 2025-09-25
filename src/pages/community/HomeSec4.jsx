import React from "react";
import { todayHouse } from "./images";
import scrap from "../../assets/community/scrap.svg";

const HomeSec4 = () => {
    return (
        <section className="w-full px-[60px] mb-[40px]">
            <div className="flex justify-between items-center py-5">
                <div>
                    <strong className="text-xl hover:text-[#aaa]">
                        오늘의 추천 집들이 구경해보세요🧐
                    </strong>
                    {/* <p className="text-sm font-light">
                        좋아하실 만한 인테리어 콘텐츠를 추천해드려요
                    </p> */}
                </div>
                <div>
                    <span className="font-bold text-[#11A5FD]">
                        <a href="/">더보기</a>
                    </span>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-5">
                {todayHouse.map((item, index) => {
                    return (
                        <a href="/" className="flex flex-col" key={index}>
                            <div className="overflow-hidden rounded-md relative">
                                <img
                                    src={item.img}
                                    alt=""
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
