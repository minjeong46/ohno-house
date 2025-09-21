import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Header = ({ setIsSidebar }) => {
    const [scroll, setScroll] = useState(false);
    const [searchList, setSearchList] = useState(false);

    useEffect(() => {
        const on = () => {
            setScroll(window.scrollY >= 81);
        };
        window.addEventListener("scroll", on);
        return () => window.removeEventListener("scroll", on);
    }, []);

    const navLinkPath = [
        {
            path: "/",
            name: "커뮤니티",
        },
        {
            path: "/shop",
            name: "쇼핑",
        },
        {
            path: "/none",
            name: "인테리어/생활",
        },
    ];

    const tabLinkPath = [
        {
            path: "/",
            name: "홈",
        },
        {
            path: "/none",
            name: "인기",
        },
        {
            path: "/none",
            name: "쇼핑수다",
        },
        {
            path: "/none",
            name: "집꾸미기",
        },
        {
            path: "/none",
            name: "취미/일상",
        },
        {
            path: "/none",
            name: "오집소식",
        },
        {
            path: "/none",
            name: "추천",
        },
        {
            path: "/none",
            name: "집들이",
        },
        {
            path: "/none",
            name: "집사진",
        },
    ];

    const searchClickHandler = () => {
        setSearchList(true);
    };

    const searchBlurHandler = () => {
        setSearchList(false);
    };

    return (
        <header className="w-full max-w-[1905px] bg-white mx-auto group">
            {/* 상단 */}
            <div className="w-full fixed top-0 left-0 z-50 bg-white border-b">
                <div className="h-[80px] max-w-[1256px] mx-auto px-14 py-3 flex items-center justify-between">
                    {/* 왼쪽 */}
                    <div className="flex items-center pr-14">
                        {/* 로고 */}
                        <div className="mr-5 p-1">
                            <a href="/">
                                <img src="../../public/logo.svg" />
                            </a>
                        </div>
                        {/* nav */}
                        <nav>
                            <ul className="flex font-bold cursor-pointer">
                                {navLinkPath.map((nav) => {
                                    return (
                                        <li className="mx-3 pt-5 pb-4 px-1">
                                            <NavLink
                                                to={nav.path}
                                                className={({ isActive }) =>
                                                    isActive
                                                        ? "text-[#11A5FD] font-bold hover:text-[#11A5FD]"
                                                        : "text-gray-700 hover:text-[#11A5FD]"
                                                }
                                            >
                                                {nav.name}
                                            </NavLink>
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>
                    </div>
                    {/* 오른쪽 */}
                    <div className="flex items-center justify-end">
                        {/* 검색창 */}
                        <div className="flex items-center border rounded-md px-3 h-10 w-72 mr-7 relative">
                            <div className="flex">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="m21 21-5.2-5.2M16 10.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
                                    />
                                </svg>
                                <input
                                    type="text"
                                    placeholder="통합검색"
                                    className="ml-2 outline-none text-sm"
                                    onClick={searchClickHandler}
                                    onBlur={searchBlurHandler}
                                />
                            </div>
                            {searchList && (
                                <div className="w-full absolute top-[42px] left-0 border py-1 rounded-md bg-white">
                                    <div className="py-2 px-4 flex justify-between">
                                        <span className="text-xs">
                                            최근 검색어
                                        </span>
                                        <button className="text-xs text-gray-400">
                                            전체 삭제
                                        </button>
                                    </div>
                                    <ul className="w-full">
                                        <li className="py-2 px-4 w-full flex justify-between items-center bg-[#fbfbfb] cursor-pointer">
                                            <div className="flex items-center">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="18"
                                                    height="18"
                                                >
                                                    <path
                                                        fill="#aaa"
                                                        fill-rule="evenodd"
                                                        d="M9 3.05a5.95 5.95 0 1 0 0 11.9 5.95 5.95 0 0 0 0-11.9M1.45 9a7.55 7.55 0 1 1 15.1 0 7.55 7.55 0 0 1-15.1 0m7.175-5.3a.8.8 0 0 1 .8.8v3.75a.7.7 0 0 0 .7.7h2.25a.8.8 0 0 1 0 1.6h-2.25a2.3 2.3 0 0 1-2.3-2.3V4.5a.8.8 0 0 1 .8-.8"
                                                        clip-rule="evenodd"
                                                    ></path>
                                                </svg>
                                                <span className="text-sm ml-2">
                                                    서랍장
                                                </span>
                                            </div>
                                            <button>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke-width="1.5"
                                                    stroke="currentColor"
                                                    className="w-4 h-4"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="M6 18 18 6M6 6l12 12"
                                                    />
                                                </svg>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* 아이콘 */}
                        <div className="flex items-center pr-4">
                            <div className="flex">
                                <a href="/" className="p-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 hover:text-[#11A5FD]"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                                        />
                                    </svg>
                                </a>
                                <a href="/" className="p-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 hover:text-[#11A5FD]"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                                        />
                                    </svg>
                                </a>
                                <a href="/" className="p-2 relative">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 hover:text-[#11A5FD]"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                                        />
                                    </svg>
                                    <i className="absolute block w-4 h-4 rounded-lg bg-[#D48A84] top-1 right-1 before:content-['1'] before:absolute before:inset-0 before:flex before:items-center before:justify-center before:text-white before:text-[10px]"></i>
                                </a>
                            </div>
                            <div className="m-4">
                                <div className="w-8 h-8 rounded-2xl border"></div>
                            </div>
                        </div>
                        {/* 버튼 */}
                        <button className="bg-[#11A5FD] py-2 px-4 text-sm text-white rounded-md flex">
                            <span>글쓰기</span>
                            <i>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="w-5 h-5"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                    />
                                </svg>
                            </i>
                        </button>
                    </div>
                </div>
            </div>
            {/* 하단 */}
            <div
                className={`
                    fixed top-[80px] left-0 w-full z-40 bg-white shadow transition-transform duration-300
                     ${
                         scroll
                             ? "-translate-y-full group-hover:translate-y-0"
                             : "translate-y-0"
                     }
                `}
            >
                <div className="max-w-[1256px] mx-auto px-14 flex items-center justify-between sticky">
                    <nav className="h-[51px] flex items-center flex-grow flex-shrink-0">
                        <div className="h-full flex items-center flex-1 text-[15px] font-bold">
                            {tabLinkPath.map((tab) => {
                                return (
                                    <NavLink
                                        to={tab.path}
                                        className={({ isActive }) =>
                                            isActive
                                                ? "py-3 px-1 mx-2 text-[#11A5FD] font-bold border-b-2 border-[#11A5FD] hover:text-[#11A5FD]"
                                                : "py-3 px-1 mx-2 text-gray-700 hover:text-[#11A5FD]"
                                        }
                                    >
                                        <span>{tab.name}</span>
                                    </NavLink>
                                );
                            })}
                        </div>
                    </nav>
                    {/* 인기 검색어 */}
                    <div className="cursor-pointer">
                        <div className="flex items-center text-sm">
                            <span className="font-bold px-2">1</span>
                            <span className="text-red-500 px-2">new</span>
                            <span className="px-2">미닫이수납장</span>
                            <button onClick={() => setIsSidebar(true)}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="w-5 h-5"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
