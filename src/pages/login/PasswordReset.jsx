import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function PasswordReset() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [emailEmptyError, setEmailEmptyError] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const [showNextForm, setShowNextForm] = useState(false);

  const allUsers = useSelector((state) => state.users.allUsers || []);

  const checkEmailRegistered = (currentEmail) => {
    return allUsers.some((user) => user.email === currentEmail.trim());
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setEmailError(false);
    setShowNextForm(false);

    if (isTouched) {
      if (!newEmail.trim()) {
        setEmailEmptyError(true);
      } else {
        setEmailEmptyError(false);
      }
    }
  };

  const handleBlur = () => {
    if (!isTouched) {
      setIsTouched(true);
    }
    if (!email.trim()) {
      setEmailEmptyError(true);
    } else {
      setEmailEmptyError(false);
    }
  };

  const handleEmailVerify = (e) => {
    e.preventDefault();
    setIsTouched(true); 

    if (!email.trim()) {
      setEmailEmptyError(true); 
      setEmailError(false);
      setShowNextForm(false);
      return;
    }

    setEmailEmptyError(false);
    const isRegistered = checkEmailRegistered(email);

    if (isRegistered) {
      setEmailError(false);
      setShowNextForm(true);
    } else {
      setEmailError(true);
      setShowNextForm(false);
    }
  };

  const handleCodeSubmit = (e) => {
    e.preventDefault();
    alert('비밀번호 수정 로직 실행');
  };

  const isEmailValid = email.trim().length > 0;

  const finalErrorMessage = emailEmptyError
    ? '필수 입력 항목입니다.'
    : '등록된 이메일 주소가 아닙니다.';

  const shouldShowError = isTouched && (emailError || emailEmptyError);

  return (
    <div className="flex mt-10 justify-center min-h-screen relative">
      <div className="w-full max-w-xs relative z-10">
        <div className="text-left">
          <p className="text-xs text-gray-700 mb-4">
            가입한 이메일 주소를 입력해주세요.
          </p>

          <form onSubmit={handleEmailVerify} className="mb-4">
            <div
              className={`
          relative border overflow-hidden
          ${shouldShowError ? 'border-red-500' : 'border-gray-300'} 
          transition-colors duration-200
        `}
            >
              <input
                type="text"
                placeholder="이메일"
                value={email}
                onChange={handleEmailChange}
                onBlur={handleBlur}
                className={`
         placeholder-gray-300 text-sm w-full h-12 pr-20 px-4 py-3 border-0
         focus:outline-none focus:border-blue-400 
         ${shouldShowError ? 'pb-6' : ''}
        `}
              />

              {shouldShowError && (
                <p className="absolute bottom-1 left-4 text-red-500 text-xs font-semibold">
                  {finalErrorMessage}
                </p>
              )}

              <button
                type="submit"
                disabled={!isEmailValid}
                className={`
            absolute right-0 top-0 px-3 text-sm font-semibold 
            ${
              isEmailValid
                ? 'bg-sky-500 text-white hover:bg-sky-600'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }
            transition-colors duration-200
            ${shouldShowError ? 'h-8 mt-2 mr-2' : 'h-12'} 
          `}
              >
                확인
              </button>
            </div>
          </form>

          {showNextForm && (
            <div className="transition-all duration-300 ease-in-out overflow-hidden text-left mt-5 max-h-60">
              <p className="text-xs text-gray-700 mb-2">
                {email}의 비밀번호를 다시 입력해주세요.
              </p>

              <form onSubmit={handleCodeSubmit}>
                <input
                  type="password"
                  placeholder="변경될 비밀번호"
                  className="placeholder-gray-700 w-full p-3 text-sm border border-gray-300 rounded mb-4 focus:outline-none focus:border-blue-400"
                />

                <button
                  type="submit"
                  className="w-full h-12 bg-sky-500 text-white font-semibold py- rounded transition-colors"
                >
                  비밀번호 수정
                </button>
              </form>
            </div>
          )}
        </div>

        <div className="text-center mt-6 bg-gray-50 w-auto h-16 flex justify-center items-center flex-col">
          <p className="text-gray-700 text-xs mb-1">
            회원가입 시 입력한 정보가 기억나지 않는다면?
          </p>

          <a href="#" className="text-sky-500 font-semibold text-xs">
            고객센터 문의하기 (1670-0876)
          </a>
        </div>
      </div>
    </div>
  );
}

export default PasswordReset;
