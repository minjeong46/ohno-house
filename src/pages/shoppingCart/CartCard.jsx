import { cartImg } from "./images.js";
import { CheckIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { MinusIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../../store/modalSlice.js";
import { quantityChange, removeToCart } from "../../store/userSlice.js";

const CartCard = ({ product, quantity }) => {
    const [currentQuantity, setCurrentQuantity] = useState(quantity);
    const dispatch = useDispatch();

    const minusQuantityHandler = () => {
        if (currentQuantity !== 1) {
            setCurrentQuantity((prev) => {
                const newQuantity = prev - 1;
                dispatch(
                    quantityChange({ item: { product, quantity: newQuantity } })
                );
                return newQuantity;
            });
        }
    };

    const plusQuantityHandler = () => {
        setCurrentQuantity((prev) => {
            const newQuantity = prev + 1;
            dispatch(
                quantityChange({ item: { product, quantity: newQuantity } })
            );
            return newQuantity;
        });
    };

    const quantityOnClickHandler = () => {
        dispatch(
            openModal({
                type: "cartAmount",
                data: { product: product, quantity: currentQuantity },
            })
        );
    };

    const removeCartItemHandler = () => {
        const item = {
            product: product,
            quantity: currentQuantity,
        };
        dispatch(removeToCart({ item: item }));
    };

    const sellingPrice =
        product.originalPrice * (1 - product.discountRate / 100);

    return (
        <ul className="border mt-3">
            <li>
                <div className="px-4 py-3 flex items-center border-b justify-center">
                    <span className="text-sm text-gray-700">
                        {product.brand}
                    </span>
                </div>
                <div className="px-4 py-5 flex gap-3">
                    <label className="inline-flex cursor-pointer">
                        <input type="checkbox" className="peer hidden" />
                        <span className="w-5 h-5 rounded-md border border-gray-400 flex items-center justify-center peer-checked:bg-[#11A5FD] peer-checked:border-[#11A5FD]">
                            <CheckIcon className="h-4 w-4 text-white" />
                        </span>
                    </label>
                    <div className="w-full flex gap-3 flex-col">
                        <div className="flex justify-between ">
                            <span className="w-fit flex justify-between items-center gap-1 py-[6px] px-[10px] rounded-md bg-[#F7F9FA]">
                                <img
                                    src={cartImg.cartTodayGo}
                                    alt="오늘출발"
                                    width={56}
                                    height={14}
                                />
                                <p className="text-xs text-gray-700">
                                    평일 16:00까지 결제시
                                </p>
                            </span>
                            <button onClick={removeCartItemHandler}>
                                <XMarkIcon className="h-4 w-4 text-gray-700 hover:text-gray-400" />
                            </button>
                        </div>
                        <div>
                            <a className="flex">
                                <div className="overflow-hidden rounded-md">
                                    <img
                                        src={`../../..${product.imageUrl}`}
                                        alt={product.name}
                                        className="w-[72px] h-[72px]"
                                    />
                                </div>
                                <div className="mx-3">
                                    <span className="text-sm">
                                        {product.name}
                                    </span>
                                    <span className="flex text-xs text-gray-400 mt-1">
                                        <p className="pr-2 border-r">
                                            80,000원 이상 무료배송
                                        </p>
                                        <p className="pl-2">일반 택배</p>
                                    </span>
                                </div>
                            </a>
                        </div>
                        <div className="w-full flex justify-between">
                            <div className="h-8 py-1 px-2 flex gap-1 border rounded-md bg-white">
                                <button>
                                    <MinusIcon
                                        className="h-5 w-5 text-gray-700"
                                        onClick={minusQuantityHandler}
                                    />
                                </button>
                                <input
                                    value={quantity}
                                    className="text-center max-w-[28px] py-1 rounded-md text-sm hover:bg-gray-300"
                                    onClick={quantityOnClickHandler}
                                />
                                <button>
                                    <PlusIcon
                                        className="h-5 w-5 text-gray-700"
                                        onClick={plusQuantityHandler}
                                    />
                                </button>
                            </div>
                            <span className="font-bold text-lg">
                                {Math.round(sellingPrice).toLocaleString()}원
                            </span>
                        </div>
                    </div>
                </div>
                <div className="border-t py-3">
                    <div className="w-full inline-flex gap-1 flex-col justify-center items-center">
                        <span className="text-sm text-gray-800">
                            배송비 {product.shippingFee.toLocaleString()}원
                        </span>
                        <span className="text-xs text-gray-400">
                            같은 판매처 제품 3개 이상 구매 시 무료배송
                        </span>
                    </div>
                </div>
            </li>
        </ul>
    );
};

export default CartCard;
