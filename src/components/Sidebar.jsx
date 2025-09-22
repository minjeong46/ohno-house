import { createPortal } from "react-dom";

const Sidebar = ({ setIsSidebar }) => {
    return createPortal(
        <div className="p-2 fixed top-16 right-[355px] w-[268px] bg-white border rounded-md shadow-sm z-[1000]">
            <div className="pt-5">
                <div className="flex justify-between mx-4 mb-2 text-lg">
                    <span className="font-bold">인기 검색어</span>
                    <button onClick={() => setIsSidebar(false)}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-5 h-5"
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
                    <li className="flex items-center m-3">
                        <span className="font-bold px-2">1</span>
                        <span className="text-red-500 px-2">new</span>
                        <span className="px-2">미닫이수납장</span>
                    </li>
                    <li className="flex items-center m-3">
                        <span className="font-bold px-2">2</span>
                        <span className="text-red-500 px-2">new</span>
                        <span className="px-2">침대</span>
                    </li>
                    <li className="flex items-center m-3">
                        <span className="font-bold px-2">3</span>
                        <span className="text-red-500 px-2">new</span>
                        <span className="px-2">책상</span>
                    </li>
                </ul>
            </div>
        </div>,
        document.body
    );
};

export default Sidebar;
