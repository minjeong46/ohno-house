import { ChevronUpIcon } from "@heroicons/react/24/outline";
import { useCallback, useEffect, useRef, useState } from "react";
import { useOutSideClick } from "../hooks/useOutSideClick";
import { createPortal } from "react-dom";

const Sidebar = ({ setIsSidebar, sidebarBtnRef }) => {
    const sidebarRef = useRef();
    const [position, setPosition] = useState({ top: 0, left: 0 });

    useOutSideClick(sidebarRef, () => setIsSidebar(false));

    const updatePosition = useCallback(() => {
        if (!sidebarBtnRef.current) return;
        const rect = sidebarBtnRef.current.getBoundingClientRect();
        setPosition({
            top: rect.top - 24,
            left: rect.left - 64,
        });
    }, [sidebarBtnRef]);

    useEffect(() => {
        updatePosition();

        window.addEventListener("resize", updatePosition);
        window.addEventListener("scroll", updatePosition);

        return () => {
            window.removeEventListener("resize", updatePosition);
            window.removeEventListener("scroll", updatePosition);
        };
    }, [updatePosition]);

    return createPortal(
        <div
            ref={sidebarRef}
            className="fixed bg-white border w-[268px] border-gray-200 rounded-md shadow-md z-[110] "
            style={{
                top: `${position.top}px`,
                left: `${position.left}px`,
            }}
        >
            <div className="pt-5">
                <div className="flex justify-between mx-4 mb-2 text-lg">
                    <span className="font-bold">인기 검색어</span>
                    <button onClick={() => setIsSidebar(false)}>
                        <ChevronUpIcon className="h-5 w-5" />
                    </button>
                </div>
                <ul>
                    <li className="flex items-center m-3">
                        <span className="font-bold px-2">1</span>
                        <span className="text-red-500 px-2">new</span>
                        <span className="px-2 text-gray-700">미닫이수납장</span>
                    </li>
                    <li className="flex items-center m-3">
                        <span className="font-bold px-2">2</span>
                        <span className="text-red-500 px-2">new</span>
                        <span className="px-2 text-gray-700">침대</span>
                    </li>
                    <li className="flex items-center m-3">
                        <span className="font-bold px-2">3</span>
                        <span className="text-red-500 px-2">new</span>
                        <span className="px-2 text-gray-700">책상</span>
                    </li>
                </ul>
            </div>
        </div>,
        document.body
    );
};

export default Sidebar;
