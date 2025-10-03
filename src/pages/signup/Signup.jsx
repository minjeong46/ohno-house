import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../store/userSlice';
import { registerUser } from '../../store/usersSlice';
import Logo from '../../assets/ohno_logo.svg';

const Signup = () => {
  const allUsers = useSelector((state) => state.users.allUsers) || [];
  const loginUser = useSelector((state) => state.userAuth?.loginUser);
  const [isDirectInput, setIsDirectInput] = useState(false);
  const [directInputValue, setDirectInputValue] = useState('');
  const [selectedValue, setSelectedValue] = useState('선택해주세요');
  const [emailError, setEmailError] = useState('');
  const [emailLocalPart, setEmailLocalPart] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);
  const [domainTouched, setDomainTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [nickname, setNickname] = useState('');
  const [nicknameError, setNicknameError] = useState('');
  const [nicknameTouched, setNicknameTouched] = useState(false);
  const [ageTerm, setAgeTerm] = useState(false);
  const [termsOfUse, setTermsOfUse] = useState(false);
  const [marketingInfo, setMarketingInfo] = useState(false);
  const [eventSms, setEventSms] = useState(false);
  const [termsError, setTermsError] = useState('');
  const [termsTouched, setTermsTouched] = useState(false);
  const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);

  // Ref 생성: 각 입력 필드를 참조하기 위함
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const nicknameRef = useRef(null);
  const termsRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  /* 이메일란 직접입력 확인 */
  const handleClearInput = () => {
    setIsDirectInput(false);
    setDirectInputValue('');
  };

  /* 필수사항란 전체 체크 */
  const handleAllTermsChange = (e) => {
    const isChecked = e.target.checked;
    setAgeTerm(isChecked);
    setTermsOfUse(isChecked);
    setMarketingInfo(isChecked);
    setEventSms(isChecked);
    setTermsTouched(true);
  };

  const handleTermChange = (setter) => (e) => {
    setter(e.target.checked);
    setTermsTouched(true);
  };

  const allTermsChecked = ageTerm && termsOfUse && marketingInfo && eventSms;

  /* 이메일 유효성 검사 */
  useEffect(() => {
    if (isSubmittedSuccessfully) return;
    const currentUserId = loginUser ? loginUser.id : null;
    //  이메일 도메인 부분 결정
    let domainPart = '';
    if (isDirectInput) {
      domainPart = directInputValue;
    } else if (selectedValue !== '선택해주세요') {
      domainPart = selectedValue;
    }
    // 이메일 아이디 또는 도메인 중 하나라도 건드려지지 않았다면 에러 검증을 스킵
    if (!emailTouched && !domainTouched) {
      setEmailError('');
      return;
    }

    // 아이디 부분이 비어있으면 오류
    if (!emailLocalPart) {
      setEmailError('필수 입력 항목입니다.'); // 구체적인 메시지로 변경
      return;
    }

    // 아이디는 있지만 도메인이 비어있는 경우
    if (!domainPart) {
      setEmailError('이메일 형식이 올바르지 않습니다.');
      return;
    }

    // 아이디와 도메인이 모두 있을 때 전체 이메일 주소로 유효성 검사
    const fullEmail = `${emailLocalPart}@${domainPart}`;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(fullEmail)) {
      // 도메인이 입력되었더라도 'test@a'처럼 유효하지 않은 경우 이 에러가 표시됩니다.
      setEmailError('올바른 이메일 형식을 입력해주세요');
    } else {
      const isEmailDuplicate = allUsers.some(
        (user) => user.email === fullEmail && user.id !== currentUserId
      );

      if (isEmailDuplicate) {
        setEmailError(
          "이미 이미 가입한 이메일입니다. '이메일 로그인'으로 로그인해주세요."
        );
      } else {
        setEmailError('');
      }
    }
  }, [
    emailLocalPart,
    directInputValue,
    selectedValue,
    isDirectInput,
    emailTouched,
    domainTouched,
    allUsers,
    loginUser,
    isSubmittedSuccessfully,
  ]);

  /* 비밀번호 유효성 검사 */
  useEffect(() => {
    if (isSubmittedSuccessfully) return;
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;
    if (passwordTouched) {
      if (!password) {
        setPasswordError('비밀번호를 필수 입력 항목입니다.');
      } else if (!passwordRegex.test(password)) {
        setPasswordError('영문, 숫자를 포함하여 8자 이상이어야 합니다.');
      } else {
        setPasswordError('');
      }
    } else {
      setPasswordError('');
    }
    if (confirmPasswordTouched) {
      if (!confirmPassword || password !== confirmPassword) {
        setConfirmPasswordError('비밀번호가 일치하지 않습니다.');
      } else {
        setConfirmPasswordError('');
      }
    } else {
      setConfirmPasswordError('');
    }
  }, [password, confirmPassword, passwordTouched, confirmPasswordTouched]);

  /* 닉네임 유효성 검사 */
  useEffect(() => {
    if (isSubmittedSuccessfully) return;
    if (!nicknameTouched) {
      setNicknameError('');
      return;
    }
    if (!nickname.trim()) {
      setNicknameError('필수 입력 항목입니다.');
      return;
    }
    if (nickname.trim().length < 2) {
      setNicknameError('2자 이상 입력해주세요.');
      return;
    }
    if (nickname.trim().length > 20) {
      setNicknameError('20자 이하로 입력해주세요.');
      return;
    }
    const currentUserId = loginUser ? loginUser.id : null;
    if (
      allUsers.some(
        (user) => user.nickname === nickname.trim() && user.id !== currentUserId
      )
    ) {
      setNicknameError('사용 중인 별명입니다.');
    } else {
      setNicknameError('');
    }
  }, [nickname, nicknameTouched, allUsers, loginUser, isSubmittedSuccessfully]);

  /* 필수사항 체크 유효성 검사 */
  useEffect(() => {
    if (isSubmittedSuccessfully) return;
    if (termsTouched) {
      if (!ageTerm || !termsOfUse) {
        setTermsError('필수 항목에 동의해주세요.');
      } else {
        setTermsError('');
      }
    }
  }, [ageTerm, termsOfUse, termsTouched, isSubmittedSuccessfully]);

  /* 전체 유효성 검사 및 제출 핸들러 */
  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailTouched(true);
    setDomainTouched(true);
    setPasswordTouched(true);
    setConfirmPasswordTouched(true);
    setNicknameTouched(true);
    setTermsTouched(true);

    let domainPart = '';
    if (isDirectInput) {
      domainPart = directInputValue;
    } else if (selectedValue !== '선택해주세요') {
      domainPart = selectedValue;
    }
    const fullEmail = `${emailLocalPart}@${domainPart}`;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;
    const areTermsValid = ageTerm && termsOfUse;

    const isEmailValid =
      emailLocalPart && domainPart && emailRegex.test(fullEmail);
    const isNicknameValid =
      nickname.trim().length >= 2 && nickname.trim().length <= 20;

    if (!isEmailValid || emailError) {
      emailRef.current?.focus();
      emailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    if (!passwordRegex.test(password)) {
      passwordRef.current?.focus();
      passwordRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
      return;
    }
    if (password !== confirmPassword || !confirmPassword) {
      confirmPasswordRef.current?.focus();
      confirmPasswordRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
      return;
    }

    if (!isNicknameValid || nicknameError) {
      nicknameRef.current?.focus();
      nicknameRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
      return;
    }
    if (!areTermsValid) {
      termsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setIsSubmittedSuccessfully(true);

    const userData = {
      email: fullEmail,
      nickname: nickname,
      agreements: {
        ageTerm,
        termsOfUse,
        marketingInfo,
        eventSms,
      },
      id: Date.now().toString(),
      password: password,
    };
    dispatch(registerUser(userData));
    dispatch(login(userData));
    console.log('✅ 회원가입 성공! :', userData);
    navigate('/');
  };

  return (
    <>
      <header className="w-[80px] h-50 m-4 mt-[40px]">
        <a href="/">
          <img src={Logo} alt="로고" />
        </a>
      </header>
      <div className="w-full flex items-center justify-center mt-[60px] mb-[60px]">
        <form className="max-w-md w-[360px] bg-white" onSubmit={handleSubmit}>
          <h2 className="text-xl font-bold mb-6 text-gray-700">회원가입</h2>

          <div className="w-full h-[1px] bg-gray-200 my-8"></div>

          {/* 이메일 섹션 */}
          <div className="mb-6">
            <label
              className={`block text-m font-semibold mb-2 ${
                emailError && !isSubmittedSuccessfully
                  ? 'text-red-500'
                  : 'text-gray-700'
              }`}
            >
              이메일
            </label>
            <div className="flex space-x-1">
              <input
                type="text"
                placeholder="이메일"
                ref={emailRef}
                className={`w-1/2 text-sm p-3 h-10 border rounded-md focus:outline-none focus:ring-1 placeholder-gray-400 ${
                  emailError
                    ? 'border-red-400 focus:ring-red-400'
                    : 'border-gray-300 focus:ring-blue-500'
                }`}
                onChange={(e) => setEmailLocalPart(e.target.value)}
                onBlur={() => setEmailTouched(true)}
              />
              <span className="text-xs flex items-center text-gray-300">@</span>
              <div className="flex space-x-2">
                {isDirectInput ? (
                  <div className="relative">
                    <input
                      type="text"
                      value={directInputValue}
                      onChange={(e) => setDirectInputValue(e.target.value)}
                      onBlur={() => setDomainTouched(true)}
                      className={`w-[170px] h-10 text-sm p-3 border rounded-md focus:outline-none focus:ring-1 pr-8 text-sm ${
                        emailError
                          ? 'border-red-400 focus:ring-red-400'
                          : 'border-gray-300 focus:ring-blue-500'
                      }`}
                    />
                    <button
                      type="button"
                      onClick={handleClearInput}
                      className="lowercase absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      X
                    </button>
                  </div>
                ) : (
                  <select
                    className={`w-[170px] h-10 text-sm pl-3 p-1 border rounded-md focus:outline-none focus:ring-1
                      ${
                        selectedValue === '선택해주세요'
                          ? 'text-gray-400'
                          : 'text-black'
                      }
                      ${
                        emailError
                          ? 'border-red-400 focus:ring-red-400'
                          : 'border-gray-300 focus:ring-blue-500'
                      }`}
                    onChange={(e) => {
                      setSelectedValue(e.target.value);
                      setDomainTouched(true);
                      if (e.target.value === '직접입력') {
                        setIsDirectInput(true);
                      } else {
                        setIsDirectInput(false);
                        setDirectInputValue('');
                      }
                    }}
                  >
                    <option value="선택해주세요" className="text-gray-600">
                      선택해주세요
                    </option>
                    <option value="naver.com">naver.com</option>
                    <option value="daum.net">daum.net</option>
                    <option value="hanmail.net">hanmail.net</option>
                    <option value="gmail.com">gmail.com</option>
                    <option value="nate.com">nate.com</option>
                    <option value="직접입력">직접입력</option>
                  </select>
                )}
              </div>
            </div>
            {emailError && !isSubmittedSuccessfully && (
              <p className="text-red-500 text-xs mt-2">{emailError}</p>
            )}
          </div>

          {/* 비밀번호 섹션 */}
          <div className="mb-6">
            <label
              className={`block font-semibold mb-2 
          ${
            passwordError && !isSubmittedSuccessfully
              ? 'text-red-500'
              : 'text-gray-700'
          }`}
            >
              비밀번호
            </label>
            <p className="text-xs text-gray-400 mb-2">
              영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.
            </p>
            <input
              type="password"
              placeholder="비밀번호"
              ref={passwordRef}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={() => setPasswordTouched(true)}
              className={`text-sm h-10 w-full p-3 border rounded-md focus:outline-none focus:ring-1 placeholder-gray-400
          ${
            passwordError && !isSubmittedSuccessfully
              ? 'border-red-500 focus:ring-red-500'
              : 'border-gray-300 focus:ring-blue-500'
          }`}
            />
            {passwordError && !isSubmittedSuccessfully && (
              <p className="text-red-500 text-xs mt-2">{passwordError}</p>
            )}
          </div>

          {/* 비밀번호 확인 섹션 */}
          <div className="mb-6">
            <label
              className={`block text-sm font-semibold mb-2 
          ${
            confirmPasswordError && !isSubmittedSuccessfully
              ? 'text-red-500'
              : 'text-gray-700'
          }`}
            >
              비밀번호 확인
            </label>
            <input
              type="password"
              placeholder="비밀번호 확인"
              ref={confirmPasswordRef}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onBlur={() => setConfirmPasswordTouched(true)}
              className={`h-10 w-full p-3 border rounded-md focus:outline-none focus:ring-1 text-sm placeholder-gray-400
          ${
            confirmPasswordError && !isSubmittedSuccessfully
              ? 'border-red-500 focus:ring-red-500'
              : 'border-gray-300 focus:ring-blue-500'
          }`}
            />
            {confirmPasswordError && !isSubmittedSuccessfully && (
              <p className="text-red-500 text-xs mt-2">
                {confirmPasswordError}
              </p>
            )}
          </div>

          {/* 닉네임 섹션 */}
          <div className="mb-6">
            <label
              className={`block text-sm font-semibold mb-2 ${
                nicknameError ? 'text-red-500' : 'text-gray-700'
              }`}
            >
              닉네임
            </label>
            <p className="text-xs text-gray-500 mb-2">
              다른 유저와 겹치지 않도록 입력해주세요. (2~20자)
            </p>
            <input
              type="text"
              placeholder="별명 (2~20자)"
              ref={nicknameRef}
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              onBlur={() => setNicknameTouched(true)}
              className={`h-10 w-full p-3 border rounded-md focus:outline-none focus:ring-1 text-sm placeholder-gray-400
          ${
            nicknameError && !isSubmittedSuccessfully
              ? 'border-red-500 focus:ring-red-500'
              : 'border-gray-300 focus:ring-blue-500'
          }`}
            />
            {nicknameError && !isSubmittedSuccessfully && (
              <p className="text-red-500 text-xs mt-2">{nicknameError}</p>
            )}
          </div>

          {/* 약관동의 섹션 */}
          <div className="mb-6">
            <div
              ref={termsRef}
              className={`p-4 border rounded-sm space-y-3 ${
                termsError && !isSubmittedSuccessfully
                  ? 'border-red-500'
                  : 'border-gray-200'
              }`}
            >
              {/* 전체동의 */}
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="all-terms"
                  checked={allTermsChecked}
                  onChange={handleAllTermsChange}
                  className="w-4 h-4 text-blue-600 rounded"
                />
                <label
                  htmlFor="all-terms"
                  className="flex items-center space-x-1"
                >
                  <div className="text-sm font-semibold text-gray-700">
                    전체동의
                  </div>
                  <span className=" text-xs text-gray-500">
                    선택항목에 대한 동의 포함
                  </span>
                </label>
              </div>

              <div className="w-full h-[1px] bg-gray-200 my-8"></div>

              <div className="space-y-2">
                {/* 만 14세 이상입니다 (필수) */}
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="age-term"
                    checked={ageTerm}
                    onChange={handleTermChange(setAgeTerm)}
                    className="w-4 h-4 text-blue-600 rounded"
                  />
                  <label htmlFor="age-term" className="text-sm text-gray-700">
                    만 14세 이상입니다
                    <span className="text-blue-500 text-xs">(필수)</span>
                  </label>
                </div>

                {/* 이용약관 (필수) */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="terms-of-use"
                      checked={termsOfUse}
                      onChange={handleTermChange(setTermsOfUse)}
                      className="w-4 h-4 text-blue-600 rounded"
                    />
                    <label
                      htmlFor="terms-of-use"
                      className="text-sm text-gray-700"
                    >
                      이용약관
                      <span className="text-blue-500 text-xs">(필수)</span>
                    </label>
                  </div>
                </div>

                {/* 개인정보 마케팅 활용 동의 (선택) */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="marketing-info"
                      checked={marketingInfo}
                      onChange={handleTermChange(setMarketingInfo)}
                      className="w-4 h-4 text-blue-600 rounded"
                    />
                    <label
                      htmlFor="marketing-info"
                      className="text-sm text-gray-700"
                    >
                      개인정보 마케팅 활용 동의
                      <span className="text-gray-400 text-xs">(선택)</span>
                    </label>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="event-sms"
                    checked={eventSms}
                    onChange={handleTermChange(setEventSms)}
                    className="w-4 h-4 text-blue-600 rounded"
                  />
                  <label htmlFor="event-sms" className="text-sm text-gray-700">
                    이벤트, 쿠폰, 특가 알림 메일 및 SMS 등 수신
                    <span className="text-gray-400 text-xs">(선택)</span>
                  </label>
                </div>
              </div>
            </div>
            {termsError && !isSubmittedSuccessfully && (
              <p className="mt-2 text-red-500 text-xs mb-2">{termsError}</p>
            )}
          </div>

          <button
            type="submit"
            className="text-m w-full h-12 p-2 text-white text-lg font-bold bg-[#35C5F0] rounded-md hover:bg-[#11A5FD] transition-colors"
          >
            회원가입하기
          </button>

          <div className="text-center mt-4">
            <p className="text-sm text-black">
              이미 아이디가 있으신가요?
              <a href="/login" className="font-bold underline pl-2">
                로그인
              </a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
