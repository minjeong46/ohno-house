import { navLinkPath } from "../../data/navData.js";
import logo from "../../../public/logo.svg";
import { Link, NavLink } from "react-router-dom";
import SearchInput from "./SearchInput.jsx";
import {
    MagnifyingGlassIcon,
    ShoppingCartIcon,
    ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../store/authThunks.js";

const HeaderTop = ({
    searchInputRef,
    dispatchSearch,
    searchState,
    clearClickHandler,
    path,
}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cart = useSelector((state) => state.user.cart);
    const user = useSelector((state) => state.user.userData);
    const isLoggedIn = !!user;
    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logoutUser());
        navigate("/");
    };

    return (
        <div className="w-full h-header-top fixed top-0 left-0 z-40 bg-white border-b">
            <div className="max-w-[1256px] mx-auto px-10 lg:px-14 py-[0.625rem] flex items-center justify-between">
                {/* 왼쪽 */}
                <div className="flex items-center">
                    {/* 로고 */}
                    <div className="mr-5 p-1">
                        <a href="/">
                            <img
                                src={logo}
                                alt="로고"
                                className="w-[71px] h-[28px]"
                            />
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
                                            className={() => {
                                                const isCommunity =
                                                    path.pathname === "/" ||
                                                    path.pathname.startsWith(
                                                        "/home"
                                                    );
                                                const isShop =
                                                    path.pathname === "/shop" ||
                                                    path.pathname.startsWith(
                                                        "/shop/"
                                                    );

                                                const active =
                                                    (nav.path === "/" &&
                                                        isCommunity) ||
                                                    (nav.path === "/shop" &&
                                                        isShop);

                                                return `hover:text-primary ${
                                                    active
                                                        ? "text-primary font-bold"
                                                        : "text-gray-700"
                                                }`;
                                            }}
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
                    <SearchInput
                        searchInputRef={searchInputRef}
                        dispatchSearch={dispatchSearch}
                        searchState={searchState}
                        clearClickHandler={clearClickHandler}
                    />
                    <div className="flex items-center pr-4">
                        <div className="flex">
                            <div className="flex">
                                <a className="p-2 block lg:hidden">
                                    <MagnifyingGlassIcon className="w-6 h-6 text-gray-700 hover:text-primary cursor-pointer" />
                                </a>
                                <Link to="/cart" className="p-2 relative">
                                    <ShoppingCartIcon className="w-6 h-6 text-gray-700 hover:text-primary cursor-pointer" />
                                    {cart.length > 0 && (
                                        <span className="absolute top-1 right-1 w-4 h-4 bg-[#D48A84] text-[10px] text-white flex items-center justify-center rounded-full">
                                            {cart.length}
                                        </span>
                                    )}
                                </Link>
                            </div>
                            {!isLoggedIn ? (
                                <div className="text-gray-600 text-sm flex items-center whitespace-nowrap cursor-pointer">
                                    <span className="px-2 border-r">
                                        <Link to="/login">로그인</Link>
                                    </span>
                                    <span className="px-2 border-0 xl:border-r">
                                        <Link to="/sign">회원가입</Link>
                                    </span>
                                    <span className="px-2 hidden xl:block">
                                        <Link to="/">고객센터</Link>
                                    </span>
                                </div>
                            ) : (
                                // 로그인되었을 때: 마이페이지/로그아웃 링크
                                <div className="text-gray-600 text-sm flex items-center whitespace-nowrap cursor-pointer">
                                    <span className="px-2 border-r font-bold text-gray-800">
                                        {user.nickname || "회원"}님
                                    </span>
                                    <span className="px-2 hidden xl:block">
                                        <a href="#" onClick={handleLogout}>
                                            로그아웃
                                        </a>
                                    </span>
                                </div>
                            )}
                        </div>
                        {/* 로그인 시 아이콘 변동 */}
                    </div>
                    <button className="bg-primary py-2 px-4 text-[14px] text-white rounded-md flex items-center hover:bg-hoverPrimary">
                        <span className="pr-1 whitespace-nowrap">글쓰기</span>
                        <i>
                            <ChevronDownIcon className="h-5 w-5 text-white hidden lg:block" />
                        </i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;
