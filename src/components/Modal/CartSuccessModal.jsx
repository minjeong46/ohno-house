import React from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../store/modalSlice';
import { useNavigate } from 'react-router-dom'; 
import Modal from './Modal';

const CartSuccessModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClose = () => {
    dispatch(closeModal());
  };

  const handleGoToCart = () => {
    handleClose();
    navigate('/cart');
  };

  return (
    <Modal width={'max-w-[350px] w-full'} height={'h-fit'}>
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 text-3xl p-1"
        aria-label="모달 닫기"
      >
        &times;
      </button>
      <div className="flex flex-col items-center pt-10 pb-8 px-8">
        <h2 className="text-xl font-semibold mb-10 mt-6 text-gray-800">
          장바구니에 담았어요
        </h2>
        <button
          onClick={handleGoToCart}
          className="w-full py-3 border border-blue-500 text-blue-500 rounded-md font-semibold hover:bg-blue-50 transition-colors"
        >
          장바구니 가기
        </button>
      </div>
    </Modal>
  );
};

export default CartSuccessModal;
