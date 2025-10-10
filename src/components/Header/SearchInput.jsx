import {
    MagnifyingGlassIcon,
    ClockIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    inputClear,
    inputValid,
    searchClose,
    searchDataPush,
    searchOpen,
    searchDataRemove,
    searchDataAllRemove,
} from "../../store/searchSlice";
import { useOutSideClick } from "../../hooks/useOutSideClick";

const SearchInput = () => {
    const searchInputRef = useRef();
    const containerRef = useRef();
    const dispatch = useDispatch();
    const { isOpen, hasInput, data } = useSelector((state) => state.search);

    // useEffect(() => {
    //     const OutSideClickHandler = (e) => {
    //         if (
    //             containerRef.current &&
    //             !containerRef.current.contains(e.target)
    //         ) {
    //             dispatch(searchClose());
    //         }
    //     };
    //     document.addEventListener("mousedown", OutSideClickHandler);
    //     return () => {
    //         document.removeEventListener("mousedown", OutSideClickHandler);
    //     };
    // }, [dispatch]);

    useOutSideClick(containerRef, () => dispatch(searchClose()))

    const clearClickHandler = () => {
        if (searchInputRef.current) {
            searchInputRef.current.value = "";
        }
        dispatch(inputClear());
    };

    const dataSearch = (e) => {
        if (e.key === "Enter" && !e.nativeEvent.isComposing) {
            e.preventDefault();
            dispatch(searchDataPush({ data: searchInputRef.current.value }));
            searchInputRef.current.value = "";
        }
    };

    return (
        <div
            ref={containerRef}
            className="xl:w-80 w-52 border rounded-md px-3 py-2 xl:mr-4 mr-2 relative hidden lg:block"
        >
            <div className="h-full flex items-center">
                <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
                <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="통합검색"
                    className="w-full ml-2 outline-none text-[16px]"
                    onClick={() => dispatch(searchOpen())}
                    onChange={(e) =>
                        dispatch(inputValid({ data: e.target.value }))
                    }
                    onKeyDown={(e) => dataSearch(e)}
                />
                {hasInput && (
                    <button onClick={clearClickHandler}>
                        <XCircleIcon className="h-6 w-6 text-gray-400" />
                    </button>
                )}
            </div>
            {isOpen && (
                <div className="w-full absolute top-[42px] left-0 border py-1 rounded-md bg-white">
                    <div className="py-2 px-4 flex justify-between">
                        <span className="text-xs">최근 검색어</span>
                        <button
                            onClick={() => dispatch(searchDataAllRemove())}
                            className="text-xs text-gray-400"
                        >
                            전체 삭제
                        </button>
                    </div>
                    <ul className="w-full">
                        {data.length > 0 ? (
                            data.map((data, index) => {
                                return (
                                    <li
                                        key={`${data}-${index}`}
                                        className="py-2 px-4 w-full flex justify-between items-center hover:bg-[#fbfbfb] cursor-pointer"
                                    >
                                        <div className="flex items-center">
                                            <ClockIcon className="h-5 w-5 text-gray-500" />
                                            <span className="text-sm ml-2">
                                                {data}
                                            </span>
                                        </div>
                                        <button
                                            onClick={() =>
                                                dispatch(
                                                    searchDataRemove({
                                                        data: data,
                                                    })
                                                )
                                            }
                                        >
                                            <XMarkIcon className="h-5 w-5 text-gray-500" />
                                        </button>
                                    </li>
                                );
                            })
                        ) : (
                            <li className="py-2 px-4 w-full flex justify-between items-center cursor-pointer">
                                <span className="text-sm">
                                    최근 검색어 없음
                                </span>
                            </li>
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SearchInput;
