import React, { useEffect, useState } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import { hideToast, clearToastMessage } from '../store/toastSlice';

const Toast = () => {
  const dispatch = useDispatch();
  const { message, isVisible, type } = useSelector((state) => state.toast);

  const [show, setShow] = useState(false);

  useEffect(() => {
    let timer;
    let transitionTimer;
    let mountTimer;

    if (isVisible) {
      mountTimer = setTimeout(() => {
        setShow(true);
      }, 10);

      timer = setTimeout(() => {
        dispatch(hideToast());
      }, 3000);
    }
    else if (!isVisible && message) {
      setShow(false);

      transitionTimer = setTimeout(() => {
        dispatch(clearToastMessage());
      }, 300);
    }

    return () => {
      clearTimeout(mountTimer);
      clearTimeout(timer);
      clearTimeout(transitionTimer);
    };
  }, [isVisible, message, dispatch]);

  if (!message) return null;

  const baseStyle =
    'fixed left-1/2 bottom-10 transform px-5 py-3 rounded-sm text-xs text-white shadow-2xl z-[9999] -translate-x-1/2 transition-all duration-300';

  const typeStyle =
    type === 'error'
      ? 'bg-red-500'
      : type === 'success'
      ? 'bg-green-500'
      : 'bg-gray-800/90';

  const visibilityStyle = show
    ? 'opacity-100'
    : 'opacity-0';

  return (
    <div className={`${baseStyle} ${typeStyle} ${visibilityStyle}`}>
       {message}
    </div>
  );
};

export default Toast;
