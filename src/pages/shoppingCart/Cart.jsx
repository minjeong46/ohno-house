import CartIcon from "../../assets/cart-icon1.svg?react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/24/outline";
import CartPayList from "./CartPayList";
import CartCard from "./CartCard";
import { useSelector } from "react-redux";

const Cart = () => {
    const { cart } = useSelector((state) => state.user);

    return (
        <div className="max-w-[1256px] mx-auto pb-10 flex justify-center">
            <div className="min-w-[814px]">
                <a>
                    <div className="py-2 px-4 mb-3 flex justify-between bg-[#F0F8FC] rounded-sm">
                        <div className="flex items-center">
                            <CartIcon className="w-6 h-6" />
                            <span className="text-[13px] ml-2">
                                나만의 패키지에 담으면 최저가 수준의 혜택이!
                            </span>
                        </div>
                        <div className="flex items-center cursor-pointer">
                            <span className="text-[13px]">바로가기</span>
                            <ChevronRightIcon className="h-4 w-4 text-gray-800" />
                        </div>
                    </div>
                </a>
                <div className="py-2 px-4 flex justify-between rounded-sm border">
                    <label className="inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="peer hidden" />
                        <span className="w-5 h-5 rounded-md border border-gray-400 flex items-center justify-center peer-checked:bg-[#11A5FD] peer-checked:border-[#11A5FD]">
                            <CheckIcon className="h-4 w-4 text-white" />
                        </span>
                        <span className="ml-2 text-sm text-gray-700">
                            전체 선택
                        </span>
                    </label>
                    <button className="py-[2px] px-2 rounded-md hover:bg-[#ddd]">
                        <span className="text-sm text-gray-700">선택 삭제</span>
                    </button>
                </div>
                {
                   cart && cart.map((item)=>{
                        return <CartCard product={item.product} quantity={item.quantity} />
                    })
                }
            </div>
            <CartPayList />
        </div>
    );
};

export default Cart;
