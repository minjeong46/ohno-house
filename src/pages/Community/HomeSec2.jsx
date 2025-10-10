import { categoryIcon } from "../../data/community/HomeSec2Data.js";

const HomeSec2 = () => {

    return (
        <section className="max-w-[1256px] mx-auto lg:px-[60px] px-[40px] mb-[40px]">
            <ul className="flex justify-between mt-[30px]">
                {categoryIcon.map((item, index) => {
                    return (
                        <li key={`${index}-${item}`}>
                            <a href="/" className="flex flex-col">
                                <img src={item.img} alt={item.label} className="min-w-[67px] mb-3" />
                                <span className="text-center text-gray-600 lg:text-base text-xs">{item.label}</span>
                            </a>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default HomeSec2;
