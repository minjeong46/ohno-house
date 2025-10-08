import CartIcon from '../../assets/cart-icon1.svg?react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { CheckIcon } from '@heroicons/react/24/outline';
import CartPayList from './CartPayList';
import CartCard from './CartCard';
import { useSelector, useDispatch } from 'react-redux';
import { toggleAllItems } from '../../store/userSlice';
import { openModal } from '../../store/modalSlice';
import { showToast } from '../../store/toastSlice';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isCartEmpty = cart.length === 0;
  const isAllChecked = cart.length > 0 && cart.every((item) => item.isChecked);
  const selectedCount = cart.filter((item) => item.isChecked).length;

  const handleSelectAll = (e) => {
    const selectAll = e.target.checked;
    dispatch(toggleAllItems(selectAll));
  };

  const handleRemoveSelected = () => {
    if (selectedCount === 0) {
      dispatch(
        showToast({
          message: '선택한 상품이 없습니다.',
          type: 'info',
        })
      );
    } else {
      dispatch(
        openModal({
          type: 'confirmRemoveSelected',
          data: null,
        })
      );
    }
  };

  if (isCartEmpty) {
    return (
      <div className="max-w-[1256px] mx-auto pb-10 flex justify-center">
        <div className="min-w-[814px] flex flex-col items-center py-20">
          <h3 className="text-lg font-semibold text-gray-800">
            장바구니에 담긴 상품이 없어요
          </h3>
          <p className="text-gray-500 text-sm mb-4">원하는 상품을 담아보세요</p>
          <button
            onClick={() => navigate('/shop')}
            className="py-2.5 px-4 bg-sky-500 text-white rounded-md text-sm font-semibold hover:bg-sky-600 transition-colors"
          >
            상품 담으러 가기
          </button>
        </div>
      </div>
    );
  }

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
            <button
              className="flex items-center"
              onClick={() => navigate('/shop')}
            >
              <span className="text-[13px]">바로가기</span>
              <ChevronRightIcon className="h-4 w-4 text-gray-800" />
            </button>
          </div>
        </a>
        <div className="py-2 px-4 flex justify-between rounded-sm border">
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="peer hidden"
              checked={isAllChecked}
              onChange={handleSelectAll}
            />
            <span className="w-5 h-5 rounded-md border border-gray-400 flex items-center justify-center peer-checked:bg-primary peer-checked:border-primary">
              <CheckIcon className="h-4 w-4 text-white" />
            </span>
            <span className="ml-2 text-sm text-gray-700">전체 선택</span>
          </label>
          <button
            className="py-[2px] px-2 rounded-md hover:bg-[#ddd]"
            onClick={handleRemoveSelected}
          >
            <span className="text-sm text-gray-700">선택 삭제</span>
          </button>
        </div>
        {cart &&
          cart.map((item) => {
            return (
              <CartCard
                key={item.product.id}
                product={item.product}
                quantity={item.quantity}
                isChecked={item.isChecked || false}
              />
            );
          })}
      </div>
      <CartPayList />
    </div>
  );
};

export default Cart;
