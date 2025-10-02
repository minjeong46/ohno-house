import { XMarkIcon } from "@heroicons/react/24/outline";

const CartPayList = () => {

    return (
        <div className="ml-10 md:min-w-[280px]">
            <div className="flex flex-col gap-2">
                <div className="p-4 rounded-md border text-gray-800">
                    <ul className="flex flex-col gap-4">
                        <li className="flex justify-between text-sm">
                            <span>총 상품금액</span>
                            <span className="font-bold">40,000원</span>
                        </li>
                        <li className="flex justify-between text-sm">
                            <span>총 배송비</span>
                            <span className="font-bold">+3,000원</span>
                        </li>
                        <li className="flex justify-between text-sm">
                            <span>총 할인금액</span>
                            <span className="font-bold">-3,000원</span>
                        </li>
                    </ul>
                    <div className="flex justify-between font-bold mt-6 items-center">
                        <span className="text-sm">결제 금액</span>
                        <span className="text-lg">40,000원</span>
                    </div>
                </div>
                <div className="flex justify-between py-2 px-4 text-gray-400 bg-[#F7F9FA] rounded-md">
                    <span className="text-[13px]">
                        쿠폰 적용된 최종 가격은 결제할 때 확인 가능
                    </span>
                    <button>
                        <XMarkIcon className="h-4 w-4" />
                    </button>
                </div>
                <button
                    type="button"
                    className="w-full text-white py-3 bg-[#11A5FD] rounded-md hover:bg-[#0198ED]"
                >
                    1개 상품 구매하기
                </button>
            </div>
        </div>
    );
};

export default CartPayList;
