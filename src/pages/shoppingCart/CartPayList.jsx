import { XMarkIcon } from '@heroicons/react/24/outline';
import { useEffect, useState, useMemo } from 'react';
import { useSelector } from 'react-redux';

const CartPayList = () => {
  const [scroll, setScroll] = useState(false);
  const [isCouponTipVisible, setIsCouponTipVisible] = useState(true);

  const cart = useSelector((state) => state.user.cart);

  const {
    totalProductAmount,
    totalDiscountAmount,
    totalShippingFee,
    finalPaymentAmount,
  } = useMemo(() => {
    let totalProductOriginalPrice = 0;
    let totalDiscountAmount = 0;
    let totalShippingFee = 0;
    const shippingGroups = new Map();

    cart.forEach((item) => {
      const product = item.product;
      const quantity = item.quantity;

      const sellingPrice = Math.round(
        product.originalPrice * (1 - product.discountRate / 100)
      );
      totalProductOriginalPrice += product.originalPrice * quantity;

      const itemDiscount = (product.originalPrice - sellingPrice) * quantity;
      totalDiscountAmount += itemDiscount;

      const feeKey = product.shippingFee || 3000;

      if (!shippingGroups.has(feeKey)) {
        shippingGroups.set(feeKey, {
          items: [],
          totalQuantity: 0,
          initialFee: feeKey,
        });
      }

      shippingGroups.get(feeKey).items.push(item);
      shippingGroups.get(feeKey).totalQuantity += quantity;
    });

    for (const group of shippingGroups.values()) {
      const groupInitialFee = group.initialFee;
      if (groupInitialFee === 0) continue;

      group.items.forEach((item) => {
        if (item.quantity < 3) {
          totalShippingFee += item.product.shippingFee || 3000;
        }
      });
    }
    const finalPaymentAmount =
      totalProductOriginalPrice + totalShippingFee - totalDiscountAmount;

    return {
      totalProductAmount: totalProductOriginalPrice,
      totalDiscountAmount,
      totalShippingFee,
      finalPaymentAmount,
    };
  }, [cart]);

  useEffect(() => {
    const on = () => {
      setScroll(window.scrollY >= 28);
    };
    window.addEventListener('scroll', on);
    return () => window.removeEventListener('scroll', on);
  }, []);

  const handleCloseCouponTip = () => {
    setIsCouponTipVisible(false);
  };

  return (
    <div className="ml-10 md:min-w-[280px] relative">
      <div
        className={`flex flex-col gap-2 ${
          scroll
            ? 'sticky transition-[top] duration-500 top-[128px] w-[280px]'
            : ''
        }`}
      >
        <div className="p-4 rounded-md border text-gray-800">
          <ul className="flex flex-col gap-4">
            <li className="flex justify-between text-sm">
              <span>총 상품금액</span>
              <span className="font-bold">
                {totalProductAmount.toLocaleString()}원
              </span>
            </li>
            <li className="flex justify-between text-sm">
              <span>총 배송비</span>
              <span className="font-bold">
                {totalShippingFee > 0
                  ? `+${totalShippingFee.toLocaleString()}원`
                  : '+0원'}
              </span>
            </li>
            <li className="flex justify-between text-sm">
              <span>총 할인금액</span>
              <span className="font-bold">
                {totalDiscountAmount.toLocaleString()}원
              </span>
            </li>
          </ul>
          <div className="flex justify-between font-bold mt-6 items-center">
            <span className="text-sm">결제 금액</span>
            <span className="text-lg">
              {finalPaymentAmount.toLocaleString()}원
            </span>
          </div>
        </div>
        {isCouponTipVisible && (
          <div className="flex justify-between py-2 px-4 text-gray-400 bg-[#F7F9FA] rounded-md">
            <span className="text-[11px]">
              쿠폰 적용된 최종 가격은 결제할 때 확인 가능
            </span>
            <button onClick={handleCloseCouponTip}>
              <XMarkIcon className="h-4 w-4" />
            </button>
          </div>
        )}
        <button
          type="button"
          className="w-full text-white py-3 bg-[#11A5FD] rounded-md hover:bg-[#0198ED]"
        >
          {cart.length}개 상품 구매하기
        </button>
      </div>
    </div>
  );
};

export default CartPayList;
