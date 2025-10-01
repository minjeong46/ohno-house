import { ChevronUpIcon } from "@heroicons/react/24/outline";

const Sidebar = ({ setIsSidebar }) => {
    return (
        <div className="fixed top-16 right-[19%] w-[268px] bg-white border rounded-md shadow-sm p-2 z-[9999]">
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
        </div>
    );
};

export default Sidebar;
