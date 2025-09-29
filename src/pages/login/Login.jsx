import React from 'react';
import Logo from '../../assets/ohno_logo.svg';

function Login() {
  return (
    // 💡 body 대신 최상위 div에 전체 화면 중앙 정렬 스타일을 적용합니다.
    <div className="bg-[#FAFAFA] flex items-center justify-center min-h-screen pt-[40px]">
      {/* 중앙 컨테이너: 최대 너비 제한 (max-w-md) */}
      <div className="w-full max-w-md rounded-lg">
        {/* 1. 로고 영역 */}
        <div className="text-center mb-8">
          {/* 로고 컴포넌트 또는 이미지 경로로 대체하세요 */}
          <div className="mx-auto h-10 w-auto mb-4 flex justify-center items-center">
            <a href="/" >
              {/* <a> 태그의 자식으로 <img> 태그를 넣고, <img>에 src와 alt 속성을 사용합니다. */}
              <img src={Logo} alt="로고 이미지" className="h-auto w-40" />
            </a>
          </div>
        </div>

        {/* 2. 로그인 폼 */}
        <form className="space-y-3">
          {/* 이메일 입력 필드 */}
          <div>
            <input
              type="email"
              placeholder="이메일"
              // 이미지와 동일하게 붉은색 테두리 적용
              className="w-full px-4 py-3 border border-red-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>
          {/* 비밀번호 입력 필드 */}
          <div>
            <input
              type="password"
              placeholder="비밀번호"
              className="w-full px-4 py-3 border border-red-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          {/* 로그인 버튼 */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-3 rounded-md hover:bg-blue-600 transition duration-150 mt-4"
          >
            로그인
          </button>
        </form>

        {/* 3. 추가 링크 영역 (비밀번호 재설정, 회원가입) */}
        <div className="flex justify-center space-x-4 text-sm mt-4 text-gray-500">
          <a href="#" className="hover:text-blue-500">
            비밀번호 재설정
          </a>
          <span className="text-gray-300">|</span>
          <a href="/sign" className="hover:text-blue-500">
            회원가입
          </a>
        </div>

        {/* 5. 하단 기타 링크 및 저작권 */}
        <div className="text-center mt-6 pt-6 border-t border-gray-200">
          <a href="/login" className="text-xs text-gray-500 mb-4">
            로그인에 문제가 있으신가요?
          </a>
          <a
            href="#"
            className="text-sm text-gray-600 hover:text-blue-500 block mb-8"
          >
            비회원 주문 조회하기
          </a>

          <p className="text-xs text-gray-400">
            © bucketlist, Co. Ltd. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
