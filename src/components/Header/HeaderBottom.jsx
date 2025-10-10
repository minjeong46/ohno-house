import { useRef } from "react";
import { tabLinkPath, tabShopLinkPath } from "../../data/navData.js";
import Sidebar from "../Sidebar.jsx";
import TabNav from "./TabNav.jsx";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const HeaderBottom = ({ pathShop, setIsSidebar, isSidebar, scroll }) => {
    const sidebarBtnRef = useRef(null);


    return (
        <div
            className={`fixed top-header-top left-0 w-full z-30 bg-white border-b transition-transform duration-300 ${
                scroll
                    ? "-translate-y-full group-hover:translate-y-0"
                    : "translate-y-0"
            }
                    `}
        >
            <div className="max-w-[1256px] mx-auto px-10 lg:px-14 flex items-center justify-between sticky max-[950px]:overflow-x-scroll overflow-auto ">
                <nav className="flex flex-grow flex-shrink-0">
                    <TabNav
                        tabList={pathShop ? tabShopLinkPath : tabLinkPath}
                    />
                </nav>
                {/* 인기 검색어 */}
                <div
                    ref={sidebarBtnRef}
                    className="my-auto flex flex-grow-0 flex-shrink-0 basis-auto cursor-pointer relative"
                >
                    <div className="h-full w-full flex items-center text-md">
                        <span className="font-bold px-2">1</span>
                        <span className="text-red-500 px-2">new</span>
                        <span className="px-2">미닫이수납장</span>
                        <button onClick={() => setIsSidebar((prev) => !prev)}>
                            <ChevronDownIcon className="h-5 w-5" />
                        </button>
                    </div>
                    {isSidebar && <Sidebar setIsSidebar={setIsSidebar} sidebarBtnRef={sidebarBtnRef} />}
                </div>
            </div>
        </div>
    );
};

export default HeaderBottom;
