import React, { useState, useMemo } from 'react';
import Modal from './Modal';
import ScrapIcon from '../../assets/community/scrap_2.svg';
import ScrapIconFill from '../../assets/community/scrap-fill.svg';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, openModal } from '../../store/modalSlice';
import { MinusIcon } from '@heroicons/react/24/outline';
import { PlusIcon } from '@heroicons/react/24/outline';

const getDateString = (daysOffset) => {
  const date = new Date();
  date.setDate(date.getDate() + daysOffset);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
  const dayOfWeek = dayNames[date.getDay()];

  return {
    date: `${month}/${day}`,
    dayOfWeek,
    fullString: `${month}/${day}(${dayOfWeek})`,
  };
};

const ProductDetailModal = ({ product }) => {
  const [isScrapped, setIsScrapped] = useState(false);
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const MAX_STOCK = product.stock || 99;

  const shipDate = useMemo(() => getDateString(2), []);
  const arrivalDate = useMemo(() => getDateString(3), []);
  const sellingPrice = product.originalPrice * (1 - product.discountRate / 100);
  const roundedSellingPrice = Math.round(sellingPrice);
  const orderAmount = count * roundedSellingPrice;

  const handleCountChange = (amount) => {
    setCount((prev) => {
      let newCount = prev + amount;
      if (newCount < 1) return 1;
      if (newCount > MAX_STOCK) return MAX_STOCK;
      return newCount;
    });
  };

  const handleScrapClick = () => {
    setIsScrapped((prev) => !prev);
  };

  const handleClose = () => {
      dispatch(closeModal());
  };

  const buy = () => {
    alert('구매완료!');
  };

  const handleAddToCart = () => {
    if (!isLoggedIn) {
      alert('장바구니 이용을 위해 로그인이 필요합니다.');
      dispatch(
        openModal({
          type: 'LOGIN_REQUIRED',
        })
      );
    } else {
      alert(`${product.name} 상품 ${count}개를 장바구니에 담았습니다!`);
      handleClose();
    }
  };

  return (
    <Modal width={'max-w-4xl w-[95%]'} height={'h-[80vh]'}>
      <div className="p-6 overflow-y-auto h-full relative">
        <button
          className="absolute top-4 right-6 text-xl text-gray-400 hover:text-gray-700 z-[120] p-1"
          onClick={(e) => {
            e.stopPropagation();
            handleClose();
          }}
          aria-label="모달 닫기"
        >
          &times;
        </button>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/2">
            <div className="aspect-square rounded-lg overflow-hidden relative">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col justify-start">
            <p className="text-sm text-gray-500">{product.brand}</p>
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-800 mt-1 mb-3">
                {product.name}
              </h3>
              <button onClick={handleScrapClick} aria-label="스크랩">
                <img
                  src={isScrapped ? ScrapIconFill : ScrapIcon}
                  alt="스크랩"
                  className="w-6 h-6 mr-5 mb-2"
                />
              </button>
            </div>

            <div className="flex items-center text-xs mb-3">
              <span className="text-sky-600 mr-1">★</span>
              <span className="text-gray-900 font-bold mr-2">
                {product.rating.toFixed(1)}
              </span>
              <span className="ml-1 text-sky-600 font-bold">
                {product.reviewCount.toLocaleString()}개 리뷰
              </span>
            </div>

            <div className="mb-2 text-sm">
              <div className="flex items-center">
                <div className=" text-gray-700  mr-2">
                  {product.discountRate}%
                </div>
                <p className=" text-gray-500 line-through">
                  {product.originalPrice.toLocaleString()}원
                </p>
              </div>
              <div className="flex items-baseline">
                <span className="text-3xl font-bold">
                  {roundedSellingPrice.toLocaleString()}
                </span>
                <span className="text-lg ml-1">원</span>
              </div>
            </div>

            <div className="flex text-xs">
              <span className="w-10 text-gray-500 flex-shrink-0">혜택</span>
              <p className="text-gray-900">
                <span className="font-bold">
                  {Math.floor(roundedSellingPrice * 0.001)}P
                </span>{' '}
                (적립 WELCOME 0.1% 적립)
              </p>
            </div>

            <div className="py-2 space-y-2">
              <div className="flex text-xs">
                <span className="w-10 text-gray-500 flex-shrink-0">배송</span>
                <div>
                  <p className="text-gray-900 flex items-center">
                    <span className="font-bold mr-1">3,000원</span> 선결제
                  </p>
                  <div className="mt-1 flex items-center">
                    <span className="text-gray-900 flex items-center">
                      지금 주문시
                      <p className="text-sky-600 font-bold ml-1">
                        {shipDate.fullString} 출발
                      </p>
                    </span>
                    <span className="text-gray-500 ml-1">ⓘ</span>
                  </div>
                  <p className="text-gray-700 mt-1">일반택배</p>
                  <p className="text-gray-500 mt-1">
                    제주도/도서산간 지역 3,000원
                  </p>
                </div>
              </div>
            </div>

            <button className="rounded-sm px-4 py-1.5 bg-gray-50 flex justify-between items-center text-xs mt-1 mb-1 hover:opacity-80">
              <div className="flex items-center">
                <span className="mr-2 text-xl text-gray-600">📦</span>
                <span className="font-bold text-sky-600">
                  {arrivalDate.fullString}
                </span>
                <span className="ml-1 mr-1 text-gray-800">도착 예정</span>
                <span className="font-bold text-gray-800">90%</span>
              </div>
            </button>

            <div className="mt-6 rounded bg-gray-50">
              <div className="flex justify-between items-center text-xs">
                <span className="m-2">수량</span>
              </div>
              <div className="flex justify-between items-center p-3">
                <div className="flex items-center border bg-white py-2 px-1">
                  <button>
                    <MinusIcon
                      className="ml-1 w-5 flex items-center justify-end text-xl hover:text-gray-400"
                      onClick={() => handleCountChange(-1)}
                    />
                  </button>
                  <span className="w-7 text-center text-gray-900 text-xs">
                    {count}
                  </span>
                  <button>
                    <PlusIcon
                      className="mr-1 w-5 flex items-center justify-start text-xl hover:text-gray-400"
                      onClick={() => handleCountChange(1)}
                    />
                  </button>
                </div>
                <span className="font-semibold text-gray-900 text-sm">
                  {roundedSellingPrice.toLocaleString()}원
                </span>
              </div>
            </div>

            <div className="flex justify-between items-center mt-4 pt-3 border-t">
              <span className="font-semibold text-gray-800 mr-4 text-xs">
                주문금액
              </span>
              <span className="font-bold text-gray-900">
                {orderAmount.toLocaleString()}원
              </span>
            </div>

            <button className="mt-4 flex justify-between items-center text-xs border px-4 py-3 rounded hover:bg-gray-100">
              <span className="text-gray-600">받지 않은 쿠폰이 더 있어요</span>
              <div className="text-red-600 font-semibold">쿠폰 받기</div>
            </button>
            <div className="mt-8 pt-4 flex justify-center border-t">
              <button
                className="h-12 w-40 mr-3 rounded-md border border-sky-600 text-sky-600 font-semibold hover:bg-sky-50"
                onClick={handleAddToCart}
              >
                장바구니
              </button>
              <button
                className="h-12 w-40 bg-[#11A5FD] rounded-md text-white font-semibold hover:bg-[#0199ED]"
                onClick={buy}
              >
                바로구매
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProductDetailModal;
