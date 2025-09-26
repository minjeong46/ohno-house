import { useState, useEffect, useRef } from 'react';

const Signup = () => {
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

  // Ref 생성: 각 입력 필드를 참조하기 위함
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const nicknameRef = useRef(null);
  const termsRef = useRef(null);

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
      setEmailError('');
    }
  }, [
    emailLocalPart,
    directInputValue,
    selectedValue,
    isDirectInput,
    emailTouched,
    domainTouched,
  ]);

  /* 비밀번호 유효성 검사 */
  useEffect(() => {
    // 비밀번호 필드 유효성 검사
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;

    // 비밀번호 필드 검사
    if (passwordTouched) {
      if (!password) {
        // 건드렸는데 비어있는 경우
        setPasswordError('비밀번호를 필수 입력 항목입니다.');
      } else if (!passwordRegex.test(password)) {
        // 형식 오류
        setPasswordError('영문, 숫자를 포함하여 8자 이상이어야 합니다.');
      } else {
        setPasswordError('');
      }
    } else {
      setPasswordError('');
    }

    // 비밀번호 확인 필드 검사
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
    if (!nicknameTouched) {
      setNicknameError('');
      return;
    }

    // 비어있는지 확인
    if (!nickname.trim()) {
      setNicknameError('필수 입력 항목입니다.');
      return;
    }

    // 길이 확인 (2자)
    if (nickname.trim().length < 2) {
      setNicknameError('2자 이상 입력해주세요.');
      return;
    }
    // 길이 확인 (20자)
    if (nickname.trim().length > 20) {
      setNicknameError('20자 이하로 입력해주세요.');
      return;
    }

    setNicknameError('');
  }, [nickname, nicknameTouched]);

  /* 필수사항 체크 유효성 검사 */
  useEffect(() => {
    if (termsTouched) {
      if (!ageTerm || !termsOfUse) {
        setTermsError('필수 항목에 동의해주세요.');
      } else {
        setTermsError('');
      }
    }
  }, [ageTerm, termsOfUse, termsTouched]);

  /* 전체 유효성 검사 및 제출 핸들러 */
  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. 모든 필드를 'touched' 상태로 강제 설정하여 최신 에러 메시지를 표시합니다.
    setEmailTouched(true);
    setDomainTouched(true); // 이메일 도메인 필드도 확인
    setPasswordTouched(true);
    setConfirmPasswordTouched(true);
    setNicknameTouched(true);
    setTermsTouched(true);

    // useEffect가 한 번 더 실행되어 최신 에러 상태를 업데이트할 시간을 줍니다.
    // 하지만, 제출 로직은 동기적으로 실행되어야 하므로,
    // 현재의 에러 상태를 기반으로 유효성 검사를 수동으로 다시 확인합니다.

    // 2. 최종 에러 상태 확인 및 스크롤 위치 결정
    // 이메일 도메인 부분 결정 로직을 다시 실행
    let domainPart = '';
    if (isDirectInput) {
      domainPart = directInputValue;
    } else if (selectedValue !== '선택해주세요') {
      domainPart = selectedValue;
    }
    const fullEmail = `${emailLocalPart}@${domainPart}`;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;

    // A. 이메일 검사
    const isEmailValid =
      emailLocalPart && domainPart && emailRegex.test(fullEmail);
    // B. 비밀번호 검사 (변수 선언 삭제)
    // const isPasswordValid = passwordRegex.test(password) && password === confirmPassword;
    // 변수 없이 바로 다음의 개별 if 문으로 유효성 검사를 진행합니다.
    // C. 닉네임 검사
    const isNicknameValid =
      nickname.trim().length >= 2 && nickname.trim().length <= 20;
    // D. 약관 검사 (필수 항목만)
    const areTermsValid = ageTerm && termsOfUse;

    // 3. 유효성 검사에 실패한 경우, 해당 섹션으로 스크롤 이동
    if (!isEmailValid) {
      emailRef.current?.focus(); // 포커스가 가능한 필드에 포커스
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
    if (!isNicknameValid) {
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

    // 4. 모든 유효성 검사를 통과한 경우 (서버 저장 로직 대신 임시 저장 및 이동)
    const userData = {
      email: fullEmail,
      nickname: nickname,
      agreements: {
        ageTerm,
        termsOfUse,
        marketingInfo,
        eventSms,
      },
    };

    console.log('✅ 회원가입 성공! (임시 데이터 저장):', userData);

    // 5. 루트 페이지로 이동 (실제 환경에서는 react-router-dom의 useNavigate를 사용)
    window.location.href = '/';
  };

  return (
    <>
      <header className="w-[90px] h-50 flex justify-first m-4 mt-[40px]">
        <a href="/">
          <img src="../../public/icon+logo.svg" alt="로고" />
        </a>
      </header>
      <div className="w-full flex items-center justify-center mt-[60px] mb-[60px]">
        {/* ⭐️ form 태그 사용 및 onSubmit 핸들러 연결 */}
        <form className="max-w-md w-[360px] bg-white" onSubmit={handleSubmit}>
          <h2 className="text-xl font-bold mb-6 text-gray-700">회원가입</h2>

          <div className="w-full h-[1px] bg-gray-200 my-8"></div>

          {/* 이메일 섹션 */}
          <div className="mb-6">
            <label
              className={`block text-m font-semibold mb-2 ${
                emailError ? 'text-red-500' : 'text-gray-700'
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
                      type="button" // ⭐️ 버튼이 폼 제출을 막도록 type="button" 추가
                      onClick={handleClearInput}
                      className="lowercase absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      X
                    </button>
                  </div>
                ) : (
                  <select
                    // ref는 select에는 연결하지 않고, 대표 요소인 이메일 input에만 연결하여 스크롤 위치를 잡음
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
                      setDomainTouched(true); // ⭐️ select 변경 시 domainTouched 설정
                      if (e.target.value === '직접입력') {
                        setIsDirectInput(true);
                      } else {
                        setIsDirectInput(false);
                        setDirectInputValue(''); // 도메인 선택 시 직접 입력 값 초기화
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
            {emailError && (
              <p className="text-red-500 text-xs mt-2">{emailError}</p>
            )}
          </div>

          {/* 비밀번호 섹션 */}
          <div className="mb-6">
            <label
              className={`block font-semibold mb-2 
          ${passwordError ? 'text-red-500' : 'text-gray-700'}`}
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
            passwordError
              ? 'border-red-500 focus:ring-red-500'
              : 'border-gray-300 focus:ring-blue-500'
          }`}
            />
            {passwordError && (
              <p className="text-red-500 text-xs mt-2">{passwordError}</p>
            )}
          </div>

          {/* 비밀번호 확인 섹션 */}
          <div className="mb-6">
            <label
              className={`block text-sm font-semibold mb-2 
          ${confirmPasswordError ? 'text-red-500' : 'text-gray-700'}`}
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
            confirmPasswordError
              ? 'border-red-500 focus:ring-red-500'
              : 'border-gray-300 focus:ring-blue-500'
          }`}
            />
            {confirmPasswordError && (
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
            nicknameError
              ? 'border-red-500 focus:ring-red-500'
              : 'border-gray-300 focus:ring-blue-500'
          }`}
            />
            {nicknameError && (
              <p className="text-red-500 text-xs mt-2">{nicknameError}</p>
            )}
          </div>

          {/* 약관동의 섹션 */}
          <div className="mb-6">
            <div
              ref={termsRef}
              className={`p-4 border rounded-sm space-y-3 ${
                termsError ? 'border-red-500' : 'border-gray-200'
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

                {/* 이벤트, 쿠폰, 특가 알림 (선택) */}
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
            {termsError && (
              <p className="mt-2 text-red-500 text-xs mb-2">{termsError}</p>
            )}
          </div>

          {/* 회원가입하기 버튼 */}
          <button
            type="submit"
            className="text-m w-full h-12 p-2 text-white text-lg font-bold bg-[#35C5F0] rounded-md hover:bg-[#11A5FD] transition-colors"
          >
            회원가입하기
          </button>

          {/* 로그인 링크 */}
          <div className="text-center mt-4">
            <p className="text-sm text-black">
              이미 아이디가 있으신가요?
              <a href="/" className="font-bold underline pl-2">
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
