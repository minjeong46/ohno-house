import { useEffect, useReducer, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import HeaderTop from "./Header/HeaderTop.jsx";
import HeaderBottom from "./Header/HeaderBottom.jsx";

const initialSearchState = {
    isOpen: false,
    hasInput: false,
};

const searchReducer = (state, action) => {
    switch (action.type) {
        case "OPEN":
            return { ...state, isOpen: true };
        case "CLOSE":
            return { ...state, isOpen: false };
        case "INPUT_VALID":
            return { ...state, hasInput: action.value.trim().length > 0 };
        case "INPUT_CLEAR":
            return { ...state, hasInput: false };
        default:
            return state;
    }
};

const Header = ({ setIsSidebar }) => {
    const searchInputRef = useRef();
    const [scroll, setScroll] = useState(false);
    const path = useLocation();
    const [pathShop, setPathShop] = useState(false);

    const [searchState, dispatchSearch] = useReducer(
        searchReducer,
        initialSearchState
    );

    const clearClickHandler = () => {
        if (searchInputRef.current) {
            searchInputRef.current.value = "";
        }
        dispatchSearch({ type: "INPUT_CLEAR" });
    };

    useEffect(() => {
        if (path.pathname !== "/cart") {
            const on = () => {
                setScroll(window.scrollY >= 84);
            };

            window.addEventListener("scroll", on);
            return () => window.removeEventListener("scroll", on);
        } else {
            const on = () => {
                setScroll(window.scrollY >= 28);
            };

            window.addEventListener("scroll", on);
            return () => window.removeEventListener("scroll", on);
        }
    }, []);

    useEffect(() => {
        if (path.pathname.indexOf("/shop") !== -1) {
            console.log(path.pathname.indexOf("/shop"));
            setPathShop(true);
        } else setPathShop(false);
    }, [path]);

    return (
        <header className="h-header-total w-full relative bg-white group">
            {/* 상단 */}
            <HeaderTop
                searchInputRef={searchInputRef}
                dispatchSearch={dispatchSearch}
                searchState={searchState}
                clearClickHandler={clearClickHandler}
            />
            {/* 하단 */}
            <HeaderBottom
                pathShop={pathShop}
                setIsSidebar={setIsSidebar}
                scroll={scroll}
            />
        </header>
    );
};

export default Header;
