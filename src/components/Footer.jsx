import FooterMark from '../assets/footer-mark.svg';
import RightSvg from '../assets/footer-right.svg';

const Footer = () => {
  return (
    <footer className="w-full bg-[#F7F9FA] border-gray-200 pt-[40px] pb-[40px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* 1. 고객센터 (Customer Service) */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 flex items-center pb-4 ">
              <div className="hover:underline cursor-pointer">고객센터</div>
              <img
                src={RightSvg}
                alt="접속"
                className="w-[20px] flex items-center justify-center"
              />
            </h3>
            <div className="flex space-x-2 items-center">
              <p className="text-m font-bold text-gray-900 hover:underline cursor-pointer">
                1234-5678
              </p>
              <p className="text-sm text-black-500">09:00~18:00</p>
            </div>
            <ul className="text-xs text-gray-600 space-y-1 pl-2 pt-2">
              <li>· 평일: 전체 문의 상담</li>
              <li>· 토요일: 오늘/집 직접배송 주문 관련 상담</li>
              <li>· 일요일: 휴무</li>
            </ul>
            <div className="mt-4 flex-col">
              <button className="mx-1 mb-3 text-sm border border-gray-200 px-1.5 py-1.5 rounded-md text-gray-700">
                카톡 상담(평일 09:00~18:00)
              </button>
              <button className="mx-1 text-sm border border-gray-200 px-1.5 py-1.5 rounded-md hover:underline text-gray-700">
                이메일 문의
              </button>
            </div>
          </div>

          {/* 2. 회사 링크 목록 (Company Links) */}
          <div className="flex space-x-10 border-l border-[#EAEDEF] pl-8 flex-nowrap">
            <div className="text-[11px] text-gray-800 ">
              <p className="hover:underline cursor-pointer mb-[20px]">
                회사소개
              </p>
              <p className="hover:underline cursor-pointer mb-[20px]">
                채용정보
              </p>
              <p className="hover:underline cursor-pointer mb-[20px]">
                이용약관
              </p>
              <p className="hover:underline cursor-pointer mb-[20px] font-bold">
                개인정보 처리방침
              </p>
              <p className="hover:underline cursor-pointer mb-[20px]">
                공지사항
              </p>
              <p className="hover:underline cursor-pointer mb-[20px]">
                권리보호센터
              </p>
              <p className="hover:underline cursor-pointer mb-[20px]">
                입점신청
              </p>
            </div>
            <div className="text-[11px] text-gray-800">
              <p className="hover:underline cursor-pointer mb-[20px]">
                제휴/광고 문의
              </p>
              <p className="hover:underline cursor-pointer mb-[20px]">
                시공파트너 안내
              </p>
              <p className="hover:underline cursor-pointer mb-[20px] font-bold">
                파트너 개인정보 처리방침
              </p>
              <p className="hover:underline cursor-pointer mb-[20px] ">
                상품광고 소개
              </p>
              <p className="hover:underline cursor-pointer mb-[20px]">
                고객의 소리
              </p>
              <p className="hover:underline cursor-pointer mb-[20px]">
                결제대행 위탁사
              </p>
            </div>
          </div>
          {/* 3. 회사 상세 정보 및 인증 마크 (Company Details & Certifications) */}
          <div className="md:col-span-3 lg:col-span-2 space-y-4 text-[11px] border-l border-[#EAEDEF] pl-8">
            <div className="text-[#828C94] leading-relaxed">
              (주)버킷리스트 | 대표이사 없음 | 서울 서초구 서초대로 어딘가에
              삼성생명서초타워 였으면 좋겠다{' '}
              <p>
                supercoding@bucketlist.net | 사업자등록번호 123-45-678912{' '}
                <a className="hover:underline cursor-pointer text-[#828C94] font-bold ">
                  사업자정보확인
                </a>
              </p>
              <p>통신판매업신고번호 제2025-서울서초-0926호</p>
            </div>

            {/* 안전 거래 문구 */}
            <p className="text-[#828C94] text-[9px] leading-relaxed">
              고객님이 현금결제한 금액에 대해 우리은행과 채무지급보증 계약을
              체결하여 안전거래를 보장하도록 노력하고 있습니다.{' '}
              <a className="hover:underline cursor-pointer text-[#828C94] font-bold text-[9px]">
                서비스가입사실확인
              </a>
            </p>

            {/* 인증 마크 */}
            <div className="flex items-center space-x-2">
              <div className="text-[10px] w-[160px] h-[40px] border border-#828C94 p-1 text-center text-[#828C94]">
                <div className="flex items-center space-x-2">
                  <img src={FooterMark} alt="인증마크" className="w-6 h-6" />
                  <div className="text-m text-left">
                    <p>오노의집 서비스 운영</p>
                    <p>2024.09.08 ~ 2027.09.07</p>
                  </div>
                </div>
              </div>
              {/* 이미지 대체: 실제 이미지가 없으므로 플레이스홀더 처리 */}
              <div className="w-[110px] h-[40px] border border-#828C94 flex items-center justify-center text-xs text-gray-400">
                <img src={FooterMark} alt="인증마크" className="w-6 h-6" />
              </div>
              <div className="w-[110px] h-[40px] border border-#828C94 flex items-center justify-center text-xs text-gray-400">
                <img src={FooterMark} alt="인증마크" className="w-6 h-6" />
              </div>
            </div>

            {/* 면책 문구 */}
            <p className="leading-relaxed text-[#828C94] text-[9px] pr-8">
              (주)버킷리스트는 통신판매중개자로 거래 당사자가 아니므로, 판매자가
              등록한 상품정보 및 거래 등에 대해 책임을 지지 않습니다. 단,
              (주)버킷리스트가 판매자로 등록한 상품에 대해서는 책임을
              부담합니다.
            </p>
            <div className="flex space-x-2.5 md:mb-0">
              {/* 소셜 미디어 아이콘 플레이스홀더 */}
              <div className="w-6 h-6 bg-[#828C94] rounded-full flex items-center justify-center text-white text-xs hover:bg-[#656E75] cursor-pointer">
                Y
              </div>
              <div className="w-6 h-6 bg-[#828C94]  rounded-full flex items-center justify-center text-white text-xs hover:bg-[#656E75] cursor-pointer">
                I
              </div>
              <div className="w-6 h-6 bg-[#828C94]  rounded-full flex items-center justify-center text-white text-xs hover:bg-[#656E75] cursor-pointer">
                F
              </div>
              <div className="w-6 h-6 bg-[#828C94] rounded-full flex items-center justify-center text-white text-xs hover:bg-[#656E75] cursor-pointer">
                K
              </div>
              <div className="w-6 h-6 bg-[#828C94]  rounded-full flex items-center justify-center text-white text-xs hover:bg-[#656E75] cursor-pointer">
                N
              </div>
            </div>
            <p className="text-[9px] text-[#828C94]">
              Copyright 2025. bucketlist, Co., Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
