import { tabLinkPath, tabShopLinkPath } from "../../data/navData.js";
import TabNav from "../Header/TabNav.jsx";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const HeaderBottom = ({ pathShop, setIsSidebar, scroll }) => {
    return (
        <div
            className={`fixed top-header-top left-0 w-full z-30 bg-white border-b transition-transform duration-300 ${scroll
                             ? "-translate-y-full group-hover:translate-y-0"
                             : "translate-y-0"
                     }
                `}
        >
            <div className="max-w-[1256px] mx-auto px-10 lg:px-14 flex items-center justify-between sticky">
                <nav className="flex flex-grow flex-shrink-0">
                    <TabNav
                        tabList={pathShop ? tabShopLinkPath : tabLinkPath}
                    />
                </nav>
                {/* 인기 검색어 */}
                <div className="h-full flex flex-grow-0 flex-shrink-0 basis-auto cursor-pointer">
                    <div className="h-full w-full flex items-center text-md">
                        <span className="font-bold px-2">1</span>
                        <span className="text-red-500 px-2">new</span>
                        <span className="px-2">미닫이수납장</span>
                        <button onClick={() => setIsSidebar(true)}>
                            <ChevronDownIcon className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderBottom;
