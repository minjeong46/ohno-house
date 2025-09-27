import React from "react";
import { categoryIcon } from "./images.js";

const HomeSec2 = () => {



    return (
        <section className="w-full px-[60px] mb-[40px]">
            <ul className="flex justify-between mt-[30px]">
                {categoryIcon.map((item, index) => {
                    return (
                        <li key={`${index}-${item}`}>
                            <a href="/" className="flex flex-col">
                                <img src={item.img} alt="" className="max-w-[88px] mb-3" />
                                <span className="text-center font-light">{item.label}</span>
                            </a>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default HomeSec2;
