import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideToast } from '../store/toastSlice';

const Toast = () => {
  const dispatch = useDispatch();
  const { message, isVisible, type } = useSelector((state) => state.toast);

  useEffect(() => {
    let timer;
    if (isVisible) {
      timer = setTimeout(() => {
        dispatch(hideToast());
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [isVisible, dispatch]);
  if (!isVisible && !message) return null;
  const baseStyle =
    'fixed left-1/2 top-1/2 transform p-4 rounded-lg text-white shadow-xl z-[9999] -translate-x-1/2 -translate-y-1/2';

  const typeStyle = type === 'error' ? 'bg-red-500' : 'bg-green-500';

  return (
    <div className={`${baseStyle} ${typeStyle}`}>
      {message}
    </div>
  );
};

export default Toast;
