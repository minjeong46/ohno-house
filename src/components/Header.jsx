import React from "react";

const Header = () => {
    return (
        <header className="w-screen">
            <div className="relative z-100">
                <div className="h-[80px] max-w-[1256px] mx-auto py-3 px-14 flex justify-between">
                    <div className="flex items-center">
                        <a href="/" className="mr-9">
                            <img src="../../public/logo.svg" className="p-1 " />
                        </a>
                    </div>
                    <ul className="flex">
                        <li className="flex-1 mx-2 pt-5 pb-4 px-4 font-bold">
                            <a>커뮤니티</a>
                        </li>
                        <li className="flex-1 mx-2 pt-5 pb-4 px-4 font-bold">
                            <a>쇼핑</a>
                        </li>
                        <li className="flex-1 mx-2 pt-5 pb-4 px-4 font-bold">
                            <a>인테리어/생활</a>
                        </li>
                    </ul>
                    <div className="flex items-center">
                        <div className="h-[40px] px-4 flex items-center border">
                            <div className="flex">
                                <i className="w-5 pt-[2px]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="#aaa"
                                        className="size-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                        />
                                    </svg>
                                </i>
                                <input
                                    type="text"
                                    className=""
                                    placeholder="통합검색"
                                ></input>
                            </div>
                        </div>
                        <ul className="flex">
                            <li>
                                <a href="/" className="w-6 block">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="size-6"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                                        />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="/" className="w-6 block">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="size-6"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                                        />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="/" className="w-6 block">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="size-6"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                                        />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                        <div>
                            <div></div>
                            <button></button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
