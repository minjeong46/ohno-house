import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

const CustomSwiperBtn = ({ hover, swiperInstance, isBeginning, isEnd }) => {
    return (
        <>
            <button
                onClick={() => swiperInstance.current.slidePrev()}
                disabled={isBeginning}
                className={`disabled:opacity-0 disabled:pointer-events-none ${
                    hover
                        ? "opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        : ""
                } absolute top-[calc(50%-1.75rem)] -left-[1.75rem] z-10 bg-white w-12 h-12 flex justify-center items-center rounded-full shadow-md`}
            >
                <ChevronLeftIcon className="h-6 w-6 text-gray-800" />
            </button>

            <button
                onClick={() => swiperInstance.current.slideNext()}
                disabled={isEnd}
                className={`disabled:opacity-0 disabled:pointer-events-none ${
                    hover
                        ? "opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        : ""
                } absolute top-[calc(50%-1.75rem)] -right-[1.75rem] z-10 bg-white w-12 h-12 flex justify-center items-center rounded-full shadow-md`}
            >
                <ChevronRightIcon className="h-6 w-6 text-gray-800" />
            </button>
        </>
    );
};

export default CustomSwiperBtn;
