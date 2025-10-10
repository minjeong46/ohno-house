import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import HeaderTop from "./HeaderTop.jsx";
import HeaderBottom from "./HeaderBottom.jsx";

const Header = ({ isSidebar, setIsSidebar }) => {
    const [scroll, setScroll] = useState(false);
    const path = useLocation();
    const [pathShop, setPathShop] = useState(false);

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
        <header className="h-header-total w-full relative bg-white group z-[100]">
            {/* 상단 */}
            <HeaderTop />
            {/* 하단 */}
            <HeaderBottom
                pathShop={pathShop}
                setIsSidebar={setIsSidebar}
                scroll={scroll}
                isSidebar={isSidebar}
            />
        </header>
    );
};

export default Header;
