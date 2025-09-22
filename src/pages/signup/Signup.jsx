import { useState } from 'react';

const Signup = () => {
  const [isDirectInput, setIsDirectInput] = useState(false);
  const [directInputValue, setDirectInputValue] = useState('');
  const [selectedValue, setSelectedValue] = useState('선택해주세요');

  const handleClearInput = () => {
    setIsDirectInput(false);
    setDirectInputValue('');
  };

  return (
    <>
      <header className="w-[90px] h-50 flex justify-first m-4 mt-[40px]">
        <a href="/">
          <img src="../../public/icon+logo.svg" />
        </a>
      </header>
      <div className="w-full  flex items-center justify-center mt-[60px] mb-[60px]">
        <div className="max-w-md w-[360px] bg-white">
          <h2 className="text-xl font-bold mb-6 text-gray-700">회원가입</h2>

          <div className="w-full h-[1px] bg-gray-200 my-8"></div>

          {/* 이메일 섹션 */}
          <div className="mb-6">
            <label className="block text-m font-semibold text-gray-700 mb-2 ">
              이메일
            </label>
            <div className="flex space-x-1">
              <input
                type="email"
                placeholder="이메일"
                className="w-1/2 text-sm p-3 h-10 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-gray-300"
              />
              <span className="text-xs flex items-center text-gray-300">@</span>
              <div className="flex space-x-2">
                {isDirectInput ? (
                  <div className="relative">
                    <input
                      type="text"
                      value={directInputValue}
                      onChange={(e) => setDirectInputValue(e.target.value)}
                      className="w-[170px] h-10 text-sm p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 pr-8 text-sm"
                    />
                    <button
                      onClick={handleClearInput}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      X
                    </button>
                  </div>
                ) : (
                  <select
                    className={`w-[170px] h-10 text-sm pl-3 p-1 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500
    ${selectedValue === '선택해주세요' ? 'text-gray-400' : 'text-black'}`}
                    onChange={(e) => {
                      setSelectedValue(e.target.value); // 상태 업데이트
                      if (e.target.value === '직접입력') {
                        setIsDirectInput(true);
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
          </div>

          {/* 비밀번호 섹션 */}
          <div className="mb-6">
            <label className="block text-m font-semibold text-gray-700 mb-2">
              비밀번호
            </label>
            <p className="text-xs text-gray-500 mb-2">
              영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.
            </p>
            <input
              type="password"
              placeholder="비밀번호"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* 비밀번호 확인 섹션 */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              비밀번호 확인
            </label>
            <input
              type="password"
              placeholder="비밀번호 확인"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* 닉네임 섹션 */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              닉네임
            </label>
            <p className="text-xs text-gray-500 mb-2">
              다른 유저와 겹치지 않도록 입력해주세요. (2~20자)
            </p>
            <input
              type="text"
              placeholder="별명 (2~20자)"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* 약관동의 섹션 */}
          <div className="mb-6 p-4 border border-gray-200 rounded-md space-y-3">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="all-terms"
                className="w-4 h-4 text-blue-600 rounded"
              />
              <label
                htmlFor="all-terms"
                className="text-sm font-semibold text-gray-700"
              >
                전체동의
              </label>
              <span className="text-xs text-gray-500">
                선택항목에 대한 동의 포함
              </span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="age-term"
                  className="w-4 h-4 text-blue-600 rounded"
                />
                <label htmlFor="age-term" className="text-sm text-gray-700">
                  만 14세 이상입니다{' '}
                  <span className="text-red-500">(필수)</span>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="terms-of-use"
                    className="w-4 h-4 text-blue-600 rounded"
                  />
                  <label
                    htmlFor="terms-of-use"
                    className="text-sm text-gray-700"
                  >
                    이용약관 <span className="text-red-500">(필수)</span>
                  </label>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="marketing-info"
                    className="w-4 h-4 text-blue-600 rounded"
                  />
                  <label
                    htmlFor="marketing-info"
                    className="text-sm text-gray-700"
                  >
                    개인정보 마케팅 활용 동의{' '}
                    <span className="text-gray-400">(선택)</span>
                  </label>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="event-sms"
                  className="w-4 h-4 text-blue-600 rounded"
                />
                <label htmlFor="event-sms" className="text-sm text-gray-700">
                  이벤트, 쿠폰, 특가 알림 메일 및 SMS 등 수신{' '}
                  <span className="text-gray-400">(선택)</span>
                </label>
              </div>
            </div>
          </div>

          {/* 회원가입하기 버튼 */}
          <button className="w-full h-12 p-2 text-white text-lg font-bold bg-[#35C5F0] rounded-md hover:bg-[#11A5FD] transition-colors">
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
        </div>
      </div>
    </>
  );
};

export default Signup;
