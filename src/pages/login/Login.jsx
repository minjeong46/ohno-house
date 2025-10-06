import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/userSlice'; //
import Logo from '../../assets/ohno_logo.svg';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [isExitingUp, setIsExitingUp] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [isToastFullyShown, setIsToastFullyShown] = useState(false);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');
  const [orderNumberError, setOrderNumberError] = useState(false);
  const [isOrderNumberTouched, setIsOrderNumberTouched] = useState(false);
    const [toastMessage, setToastMessage] =
      useState('이메일 주소나 비밀번호가 틀립니다');

  const toastTimer = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const orderNumberRef = useRef(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const allUsers = useSelector((state) => state.users.allUsers);

  const validateEmail = () => {
    if (!email.trim()) {
      setEmailError(true);
      return false;
    } else {
      setEmailError(false);
      return true;
    }
  };

  const validatePassword = () => {
    if (!password.trim()) {
      setPasswordError(true);
      return false;
    } else {
      setPasswordError(false);
      return true;
    }
  };

  const handleEmailBlur = () => {
    validateEmail();
  };

  const handlePasswordBlur = () => {
    validatePassword();
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);

    if (emailError) setEmailError(false);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (passwordError) setPasswordError(false);
  };

  const validateOrderNumber = () => {
    if (!orderNumber.trim()) {
      setOrderNumberError(true);
      return false;
    } else {
      setOrderNumberError(false);
      return true;
    }
  };

  const handleOrderNumberChange = (e) => {
    setOrderNumber(e.target.value);
    if (isOrderNumberTouched) {
      if (e.target.value.trim()) {
        setOrderNumberError(false);
      } else {
        setOrderNumberError(true);
      }
    }
  };

  const handleOrderNumberBlur = () => {
    setIsOrderNumberTouched(true);
    validateOrderNumber();
  };

  const handleOrderLookupSubmit = (e) => {
    e.preventDefault();
    setIsOrderNumberTouched(true);
    const isValid = validateOrderNumber();

    if (isValid) {
      showToastMessage(`주문 번호 ${orderNumber} 확인!`);
    } else {
      orderNumberRef.current.focus();
    }
  };

  const showToastMessage = (message) => {
    setToastMessage(message);

    if (toastTimer.current) {
      clearTimeout(toastTimer.current);
      toastTimer.current = null;
    }

    setShowToast(false);
    setIsExitingUp(false);
    setIsToastFullyShown(false);

    setTimeout(() => {
      setShowToast(true);

      setTimeout(() => {
        setIsToastFullyShown(true);
      }, 50);

      setTimeout(() => {
        setIsExitingUp(true);
      }, 1500 + 50);

      const timer3 = setTimeout(() => {
        setShowToast(false);
        setIsExitingUp(false);
        setIsToastFullyShown(false);
        toastTimer.current = null;
      }, 1500 + 50 + 400);

      toastTimer.current = timer3;
    }, 0);
  };

  const showLoginErrorToast = () => {
    showToastMessage('이메일 주소나 비밀번호가 틀립니다');
  };

  const handleOpenComingSoon = () => {
    showToastMessage('관리자에게 문의해 주세요.');
  }

  const toggleOrderModal = (e) => {
    e.preventDefault();
    setShowOrderModal((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (!isEmailValid) {
      emailRef.current.focus();
      return;
    }

    if (!isPasswordValid) {
      passwordRef.current.focus();
      return;
    }

    const user = allUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      dispatch(login(user));
      navigate('/');
    } else {
      setPassword('');
      showLoginErrorToast();
    }
  };

  return (
    <div className="bg-[#FAFAFA] flex items-center justify-center min-h-screen pt-[40px] relative">
      {showToast && (
        <div
          className={`
  fixed bottom-0 left-1/2 transform -translate-x-1/2 z-50
  transition-all duration-[250ms] ease-in-out 
  w-full max-w-xl px-4 h-20
  ${
    isExitingUp
      ? 'translate-y-[-120px] opacity-0'
      : isToastFullyShown
      ? 'translate-y-[-24px] opacity-100'
      : 'translate-y-full opacity-0'
  } 
  `}
        >
          <div className="bg-[#2F3438] text-white text-center py-3 rounded-lg shadow-lg">
            {toastMessage}
          </div>
        </div>
      )}

      <div className="w-full max-w-xs relative z-10">
        {/* 1. 로고 영역 */}
        <div className="text-center mb-8">
          <div className="mx-auto h-10 w-auto mb-4 flex justify-center items-center">
            <a href="/">
              <img src={Logo} alt="로고 이미지" className="h-auto w-40" />
            </a>
          </div>
        </div>
        {/* 2. 로그인 폼 */}
        <form onSubmit={handleSubmit}>
          {/* 이메일 입력 필드 */}
          <div>
            <input
              type="text"
              placeholder="이메일"
              value={email}
              onChange={handleEmailChange}
              onBlur={handleEmailBlur}
              ref={emailRef}
              className={`
        placeholder-slate-300 text-sm w-full px-4 py-3 border 
        ${emailError ? 'border-red-500 z-10' : 'border-gray-300'} rounded-t 
        focus:outline-none focus:border-blue-400 focus:z-10 relative
       `}
            />
          </div>
          {/* 비밀번호 입력 필드 */}
          <div>
            <input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={handlePasswordChange}
              onBlur={handlePasswordBlur}
              ref={passwordRef}
              className={`
        placeholder-slate-300 text-sm w-full mt-[-1px] px-4 py-3 border 
        ${passwordError ? 'border-red-500 z-10' : 'border-gray-300'} rounded-b 
        focus:outline-none focus:border-blue-400 focus:z-10 relative
       `}
            />
          </div>
          {/* 로그인 버튼 */}
          <button
            type="submit"
            className="w-full h-12 bg-[#0AA5FF] text-white font-semibold py-3 rounded mt-4"
          >
            로그인
          </button>
        </form>
        {/* 3. 추가 링크 영역 (비밀번호 재설정, 회원가입) */}
        <div className="text-sm flex justify-center space-x-4 mt-4 text-gray-600">
          <button onClick={handleOpenComingSoon}>비밀번호 재설정</button>
          <a href="/sign">회원가입</a>
        </div>
        <div className="text-center mt-8">
          <button onClick={handleOpenComingSoon} className="text-xs text-gray-300 mb-5">
            로그인에 문제가 있으신가요?
          </button>
        </div>
        {/* 5. 하단 기타 링크 및 저작권 */}
        <div className="text-center mt-6 pt-6 border-t border-gray-200 ">
          <a
            href="#"
            className="text-sm text-gray-600 block hover:text-[#0AA5FF] transition-colors duration-200 "
            onClick={toggleOrderModal}
          >
            비회원 주문 조회하기
          </a>
          <div
            className={`
        transition-all duration-300 ease-in-out
        ${showOrderModal ? 'max-h-60 mt-2' : 'max-h-0 mt-0'} 
        overflow-hidden text-left -mx-0 mt-5
    `}
          >
            <form onSubmit={handleOrderLookupSubmit}>
              <input
                type="text"
                placeholder="주문번호"
                value={orderNumber}
                onChange={handleOrderNumberChange}
                onBlur={handleOrderNumberBlur}
                ref={orderNumberRef}
                className={`
         placeholder-gray-700 w-full p-3 text-sm border 
                     ${
                       orderNumberError ? 'border-red-500' : 'border-gray-300'
                     } rounded mb-1 
          focus:outline-none focus:border-blue-400
                 `}
              />
              {orderNumberError && (
                <p className="text-red-500 text-xs text-left mb-2 font-semibold ">
                  필수 입력 항목입니다.
                </p>
              )}
              <button
                type="submit"
                className="w-full h-12 bg-[#0AA5FF] text-white font-semibold py- rounded transition-colors"
              >
                조회하기
              </button>
            </form>
          </div>
          <div className="text-[9px] text-gray-500 mt-2 mb-2 hide-on-486">
            © bucketlist, Co. Ltd. All Rights Reserved
          </div>
        </div>
      </div>
      <div className="text-[9px] text-gray-500 text-center z-0 show-fixed-on-486">
        © bucketlist, Co. Ltd. All Rights Reserved
      </div>
    </div>
  );
}

export default Login;
