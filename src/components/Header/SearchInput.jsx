import {
    MagnifyingGlassIcon,
    ClockIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import { XCircleIcon } from "@heroicons/react/24/solid";

const SearchInput = ({searchInputRef, dispatchSearch, searchState, clearClickHandler}) => {
    return (
        <div className="xl:w-80 w-52 border rounded-md px-3 py-2 xl:mr-4 mr-2 relative hidden lg:block">
            <div className="h-full flex items-center">
                <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
                <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="통합검색"
                    className="w-full ml-2 outline-none text-[16px]"
                    onClick={() => dispatchSearch({ type: "OPEN" })}
                    onBlur={() => dispatchSearch({ type: "CLOSE" })}
                    onChange={(e) =>
                        dispatchSearch({
                            type: "INPUT_VALID",
                            value: e.target.value,
                        })
                    }
                />
                {searchState.hasInput && (
                    <button onClick={clearClickHandler}>
                        <XCircleIcon className="h-6 w-6 text-gray-400" />
                    </button>
                )}
            </div>
            {searchState.isOpen && (
                <div className="w-full absolute top-[42px] left-0 border py-1 rounded-md bg-white">
                    <div className="py-2 px-4 flex justify-between">
                        <span className="text-xs">최근 검색어</span>
                        <button className="text-xs text-gray-400">
                            전체 삭제
                        </button>
                    </div>
                    <ul className="w-full">
                        <li className="py-2 px-4 w-full flex justify-between items-center bg-[#fbfbfb] cursor-pointer">
                            <div className="flex items-center">
                                <ClockIcon className="h-5 w-5 text-gray-500" />
                                <span className="text-sm ml-2">서랍장</span>
                            </div>
                            <button>
                                <XMarkIcon className="h-5 w-5 text-gray-500" />
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SearchInput;
