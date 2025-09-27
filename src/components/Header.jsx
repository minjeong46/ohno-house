import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Header = ({ setIsSidebar }) => {
    const [scroll, setScroll] = useState(false);
    const [searchList, setSearchList] = useState(false);
    const [searchInputRemove, setSearchInputRemove] = useState(false);
    const [isSearchIcon, setIsSearchIcon] = useState(false);
    const path = useLocation();
    const [pathShop, setPathShop] = useState(false);

    console.log(path);

    useEffect(() => {
        const on = () => {
            setScroll(window.scrollY >= 84);
        };
        window.addEventListener("scroll", on);
        return () => window.removeEventListener("scroll", on);
    }, []);

    useEffect(() => {
        if (path.pathname.indexOf("/shop") !== -1) {
            console.log(path.pathname.indexOf("/shop"));
            setPathShop(true);
        } else setPathShop(false);
    }, [path]);

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
        {
            path: "/none",
            name: "3D인테리어",
        },
    ];

    const tabShopLinkPath = [
        {
            path: "/shop",
            name: "쇼핑홈",
        },
        {
            path: "/none",
            name: "카테고리",
        },
        {
            path: "/none",
            name: "베스트",
        },
        {
            path: "/none",
            name: "오늘의딜",
        },
        {
            path: "/none",
            name: "단독상품",
        },
        {
            path: "/none",
            name: "오마트",
        },
        {
            path: "/none",
            name: "원하는날도착",
        },
        {
            path: "/none",
            name: "오!쇼룸",
        },
        {
            path: "/none",
            name: "기획전",
        },
    ];

    const searchClickHandler = () => {
        setSearchList(true);
    };

    const searchBlurHandler = () => {
        setSearchList(false);
    };

    const searchChangeHandler = (e) => {
        const value = e.target.value;
        if (value.trim().length >= 1) {
            setSearchInputRemove(true);
        } else {
            setSearchInputRemove(false);
        }
    };

    return (
        <header className="bg-white mx-auto group">
            {/* 상단 */}
            <div className="w-full fixed top-0 left-0 z-40 bg-white border-b">
                <div className="max-w-[1256px] mx-auto px-14 py-[0.625rem] flex items-center justify-between">
                    {/* 왼쪽 */}
                    <div className="flex items-center">
                        {/* 로고 */}
                        <div className="mr-5 p-1">
                            <a href="/">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="71"
                                    height="28"
                                    fill="none"
                                    class="css-40f4ru"
                                >
                                    <path
                                        fill="#2F3438"
                                        d="M19.711 7.307h10.226c.759 0 1.374-.606 1.374-1.355s-.615-1.356-1.374-1.356h-8.852v-3.24C21.085.607 20.47 0 19.71 0c-.759 0-1.374.607-1.374 1.356v4.596c0 .749.615 1.355 1.374 1.355Z"
                                    ></path>
                                    <path
                                        fill="#2F3438"
                                        fill-rule="evenodd"
                                        d="M13.804 8.877c0 4.711-2.261 7.638-5.9 7.638s-5.901-2.927-5.901-7.638V8.54c0-4.711 2.26-7.638 5.9-7.638s5.9 2.927 5.9 7.638zm-5.9-5.264c-1.178 0-3.153.64-3.153 4.927v.337c0 4.287 1.975 4.927 3.152 4.927s3.153-.64 3.153-4.927V8.54c0-4.287-1.975-4.927-3.153-4.927Z"
                                        clip-rule="evenodd"
                                    ></path>
                                    <path
                                        fill="#2F3438"
                                        d="M9.278 23.496h4.655c.76 0 1.374.607 1.374 1.356 0 .748-.615 1.355-1.374 1.355H1.873A1.365 1.365 0 0 1 .5 24.852c0-.75.615-1.356 1.374-1.356H6.53v-4.173c0-.748.615-1.355 1.374-1.355.758 0 1.374.607 1.374 1.355zm22.79-13.84H17.343c-.759 0-1.373.607-1.373 1.355 0 .75.614 1.356 1.373 1.356h14.725c.76 0 1.374-.607 1.374-1.356 0-.748-.615-1.355-1.374-1.355M21.009 24.362c.654.499 2.897 1.475 9.59-.24a1.376 1.376 0 0 1 1.675.97 1.354 1.354 0 0 1-.984 1.653c-2.745.704-5.095 1.055-7.035 1.056-2.15 0-3.797-.432-4.927-1.294-1.103-.843-1.686-2.063-1.686-3.532v-2.163c0-.748.614-1.356 1.373-1.356h9.703v-2.03h-9.703a1.365 1.365 0 0 1-1.373-1.355c0-.749.614-1.356 1.373-1.356h11.077c.759 0 1.373.607 1.373 1.356v4.741c0 .749-.614 1.356-1.373 1.356h-9.703v.807c0 .632.191 1.06.62 1.387M68.135 0a1.41 1.41 0 0 0-1.419 1.4v11.2c0 .773.636 1.4 1.42 1.4a1.41 1.41 0 0 0 1.418-1.4V1.4c0-.773-.635-1.4-1.419-1.4m-6.624 12.39a1.374 1.374 0 0 0 1.759.808 1.35 1.35 0 0 0 .823-1.737c-.045-.12-.944-2.5-3.191-4.195l3.49-3.83c.362-.398.454-.97.233-1.458a1.38 1.38 0 0 0-1.255-.804h-8.56c-.759 0-1.374.607-1.374 1.356 0 .748.615 1.355 1.374 1.355h5.477l-6.499 7.132a1.34 1.34 0 0 0 .103 1.914c.263.233.591.348.919.348.376 0 .75-.152 1.022-.45l3.224-3.538c1.706 1.19 2.437 3.054 2.454 3.1Z"
                                    ></path>
                                    <path
                                        fill="#2F3438"
                                        fill-rule="evenodd"
                                        d="M67.072 17.362c0-.749.615-1.356 1.374-1.356s1.374.607 1.374 1.356v6.627c0 1.914-1.579 3.471-3.519 3.471h-6.634c-1.94 0-3.519-1.557-3.519-3.471v-6.627c0-.749.615-1.356 1.374-1.356s1.374.607 1.374 1.356v2.095h8.176zm-7.405 7.387h6.634c.425 0 .771-.34.771-.76v-1.821h-8.176v1.82c0 .42.346.761.771.761m-18.999-8.935c1.664 0 3.052-.87 3.91-2.452.678-1.252 1.037-2.982 1.037-5.004s-.359-3.752-1.038-5.004C43.72 1.772 42.332.902 40.668.902s-3.052.87-3.91 2.452c-.678 1.252-1.037 2.982-1.037 5.004s.359 3.752 1.038 5.004c.857 1.581 2.245 2.452 3.909 2.452m0-12.201c2.093 0 2.2 3.952 2.2 4.745 0 .792-.107 4.745-2.2 4.745s-2.2-3.953-2.2-4.745.106-4.745 2.2-4.745"
                                        clip-rule="evenodd"
                                    ></path>
                                    <path
                                        fill="#2F3438"
                                        d="M47.746 1.81c0-.748.615-1.355 1.374-1.355s1.374.607 1.374 1.356V25.73c0 .749-.615 1.355-1.374 1.355a1.365 1.365 0 0 1-1.374-1.355v-4.514c-2.992.733-7.314.95-9.812.95h-2.091a1.365 1.365 0 0 1-1.374-1.355c0-.749.615-1.356 1.374-1.356h2.091c4.378 0 7.991-.493 9.812-1.052z"
                                    ></path>
                                </svg>
                            </a>
                        </div>
                        {/* nav */}
                        <nav>
                            <ul className="flex font-bold cursor-pointer whitespace-nowrap">
                                {navLinkPath.map((nav, index) => {
                                    return (
                                        <li
                                            className="mx-3 pt-5 pb-4 px-1"
                                            key={`${index}-${nav.name}`}
                                        >
                                            <NavLink
                                                to={nav.path}
                                                className={({ isActive }) =>
                                                    `hover:text-[#11A5FD] ${
                                                        isActive
                                                            ? "text-[#11A5FD] font-bold"
                                                            : "text-gray-700"
                                                    }`
                                                }
                                            >
                                                <span className="text-lg">
                                                    {nav.name}
                                                </span>
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
                        <div className="xl:w-80 w-52 border rounded-md px-3 py-2 xl:mr-4 mr-2 relative">
                            <div className="h-full flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-gray-400"
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
                                    className="w-full ml-2 outline-none text-[16px]"
                                    onClick={searchClickHandler}
                                    onBlur={searchBlurHandler}
                                    onChange={searchChangeHandler}
                                />
                                {searchInputRemove && (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="#bbb"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="white"
                                        className="w-8 h-8 cursor-pointer"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                        />
                                    </svg>
                                )}
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
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="w-4 h-4"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
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
                                <div className="flex">
                                    {isSearchIcon && (
                                        <a className="p-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-7 h-7 text-gray-600 hover:text-[#11A5FD] cursor-pointer"
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
                                        </a>
                                    )}

                                    <a className="p-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-7 h-7 text-gray-600 hover:text-[#11A5FD] cursor-pointer"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                                            />
                                        </svg>
                                    </a>
                                </div>
                                <div className="text-gray-600 text-sm flex items-center whitespace-nowrap cursor-pointer">
                                    <span className="px-2 border-r">
                                        로그인
                                    </span>
                                    <span className="px-2 border-r">
                                        회원가입
                                    </span>
                                    <span className="px-2">고객센터</span>
                                </div>
                            </div>
                            {/* <div className="flex">
                                <a href="/" className="p-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-7 h-7 hover:text-[#11A5FD]"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                                        />
                                    </svg>
                                </a>
                                <a href="/" className="p-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-7 h-7 hover:text-[#11A5FD]"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                                        />
                                    </svg>
                                </a>
                                <a href="/" className="p-2 relative">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-7 h-7 hover:text-[#11A5FD]"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                                        />
                                    </svg>
                                    <i className="absolute block w-4 h-4 rounded-lg bg-[#D48A84] top-1 right-1 before:content-['1'] before:absolute before:inset-0 before:flex before:items-center before:justify-center before:text-white before:text-[10px] before:translate-x-[-1px]"></i>
                                </a>
                            </div>
                            <div className="m-4">
                                <div className="w-9 h-9 rounded-2xl border"></div>
                            </div> */}
                        </div>
                        {/* 버튼 */}
                        <button className="h-[40px] bg-[#11A5FD] py-2 px-3 text-[14px] text-white rounded-md flex items-center hover:">
                            <span className="pr-1 whitespace-nowrap">
                                글쓰기
                            </span>
                            <i>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="w-5 h-5"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
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
                    fixed top-[84px] left-0 w-full z-30 bg-white border transition-transform duration-300
                     ${
                         scroll
                             ? "-translate-y-full group-hover:translate-y-0"
                             : "translate-y-0"
                     }
                `}
            >
                <div className="max-w-[1256px] px-10 mx-auto md:px-14 flex items-center justify-between sticky">
                    <nav className="flex flex-grow flex-shrink-0">
                        <div className="flex">
                            {pathShop
                                ? tabShopLinkPath.map((tab, index) => {
                                      return (
                                          <div
                                              className="flex items-center mx-1 relative"
                                              key={`${index}-${tab.name}`}
                                          >
                                              <NavLink
                                                  to={tab.path}
                                                  className={({ isActive }) =>
                                                      `py-3 px-[6px] hover:text-[#11A5FD] ${
                                                          isActive
                                                              ? "text-[#11A5FD] before:absolute before:w-full before:h-[2px] before:bg-[#11A5FD] before:bottom-0 before:right-0"
                                                              : "text-gray-700"
                                                      }`
                                                  }
                                              >
                                                  <span className="text-[16px] font-bold leading-5">
                                                      {tab.name}
                                                  </span>
                                              </NavLink>
                                          </div>
                                      );
                                  })
                                : tabLinkPath.map((tab, index) => {
                                      return (
                                          <div
                                              className="flex items-center h-full mx-1 relative"
                                              key={`${index}-${tab.name}`}
                                          >
                                              <NavLink
                                                  to={tab.path}
                                                  className={({ isActive }) =>
                                                      `py-3 px-[6px] hover:text-[#11A5FD] ${
                                                          isActive
                                                              ? "text-[#11A5FD] before:absolute before:w-full before:h-[2px] before:bg-[#11A5FD] before:bottom-0 before:right-0"
                                                              : "text-gray-700"
                                                      }`
                                                  }
                                              >
                                                  <span className="text-[16px] font-bold leading-5">
                                                      {tab.name}
                                                  </span>
                                              </NavLink>
                                          </div>
                                      );
                                  })}
                        </div>
                    </nav>
                    {/* 인기 검색어 */}
                    <div className="h-full flex flex-grow-0 flex-shrink-0 basis-auto cursor-pointer">
                        <div className="h-full w-full flex items-center text-md">
                            <span className="font-bold px-2">1</span>
                            <span className="text-red-500 px-2">new</span>
                            <span className="px-2">미닫이수납장</span>
                            <button onClick={() => setIsSidebar(true)}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="w-5 h-5"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
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
