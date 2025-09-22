import React from "react";

const Sidebar = ({ setIsSidebar }) => {
    return (
        <div className="p-2 absolute top-10 right-72 bg-white border rounded-md shadow-sm z-50">
            <div className="w-[268px] pt-5">
                <div className="flex justify-between mx-4 mb-2">
                    <span className="font-bold">인기 검색어</span>
                    <button onClick={() => setIsSidebar(false)}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-4 h-4"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="m4.5 15.75 7.5-7.5 7.5 7.5"
                            />
                        </svg>
                    </button>
                </div>
                <ul>
                    <li className="flex items-center text-sm m-3">
                        <span className="font-bold px-2">1</span>
                        <span className="text-red-500 px-2">new</span>
                        <span className="px-2">미닫이수납장</span>
                    </li>
                    <li className="flex items-center text-sm m-3">
                        <span className="font-bold px-2">2</span>
                        <span className="text-red-500 px-2">new</span>
                        <span className="px-2">침대</span>
                    </li>
                    <li className="flex items-center text-sm m-3">
                        <span className="font-bold px-2">3</span>
                        <span className="text-red-500 px-2">new</span>
                        <span className="px-2">책상</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
