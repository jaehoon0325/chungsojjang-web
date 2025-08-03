import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">청소짱</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">홈</a>
                <a href="#services" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">서비스</a>
                <a href="#about" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">회사소개</a>
                <a href="#contact" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">견적문의</a>
                <a href="tel:02-1234-5678" className="bg-blue-600 text-white px-4 py-2 text-sm font-medium rounded-md hover:bg-blue-700">
                  전화상담
                </a>
              </div>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-blue-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              깨끗하고 안전한<br />
              <span className="text-yellow-300">전문 청소 서비스</span>
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              가정집부터 사무실까지, 믿을 수 있는 청소 전문가가 함께합니다
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#contact" className="bg-yellow-400 text-blue-900 px-8 py-4 text-lg font-semibold rounded-lg hover:bg-yellow-300 transition">
                무료 견적 받기
              </a>
              <a href="tel:02-1234-5678" className="bg-transparent border-2 border-white text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition">
                바로 전화하기
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">전문 청소 서비스</h3>
            <p className="text-lg text-gray-600">다양한 공간에 맞는 맞춤형 청소 서비스를 제공합니다</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 가정집 청소 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="text-center mb-4">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m0 0V11a1 1 0 011-1h2a1 1 0 011 1v10m0 0h3a1 1 0 001-1V10M9 21h6" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">가정집 청소</h4>
                <p className="text-gray-600 mb-4">일반 청소부터 대청소까지 깔끔하게 정리해드립니다.</p>
                <ul className="text-sm text-gray-500 text-left space-y-1">
                  <li>• 전체 청소 (거실, 침실, 화장실, 주방)</li>
                  <li>• 입주/이사 청소</li>
                  <li>• 정기 관리 청소</li>
                </ul>
              </div>
            </div>

            {/* 사무실 청소 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="text-center mb-4">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">사무실 청소</h4>
                <p className="text-gray-600 mb-4">쾌적한 업무환경을 위한 전문 사무실 관리 서비스</p>
                <ul className="text-sm text-gray-500 text-left space-y-1">
                  <li>• 정기 사무실 청소</li>
                  <li>• 카펫 및 바닥 관리</li>
                  <li>• 화장실 및 휴게실 청소</li>
                </ul>
              </div>
            </div>

            {/* 상가/매장 청소 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="text-center mb-4">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">상가 청소</h4>
                <p className="text-gray-600 mb-4">고객에게 깨끗한 인상을 주는 매장 관리 서비스</p>
                <ul className="text-sm text-gray-500 text-left space-y-1">
                  <li>• 매장 일반 청소</li>
                  <li>• 유리창 및 외관 청소</li>
                  <li>• 정기 위생 관리</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                청소짱을 선택하는 이유
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                10년 이상의 경험과 노하우로 고객 만족도 98%를 자랑하는 
                믿을 수 있는 청소 전문업체입니다.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-semibold text-gray-900">전문 교육받은 직원</h4>
                    <p className="text-gray-600">체계적인 교육과정을 이수한 전문 청소 인력</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-semibold text-gray-900">친환경 청소용품</h4>
                    <p className="text-gray-600">인체에 무해한 친환경 청소 제품 사용</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-semibold text-gray-900">보험 가입 완료</h4>
                    <p className="text-gray-600">작업 중 발생할 수 있는 사고에 대한 보험 보장</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <p className="text-gray-500">청소 작업 이미지 영역</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">청소짱의 특별함</h3>
            <p className="text-lg text-gray-600">고객만족을 위한 차별화된 서비스</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-gray-900 font-semibold">년 경험</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-900 font-semibold">고객 만족도</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">24시간</div>
              <div className="text-gray-900 font-semibold">응급 서비스</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-900 font-semibold">보험 보장</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">견적 문의</h3>
            <p className="text-lg text-gray-300">무료 상담 및 견적을 받아보세요</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-semibold mb-6">연락처 정보</h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>02-1234-5678</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@chungsojjang.co.kr</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>서울시 강남구 역삼동 123-45</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-2xl font-semibold mb-6">무료 견적 요청</h4>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="이름"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
                <input
                  type="tel"
                  placeholder="연락처"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
                <select className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500">
                  <option value="">서비스 선택</option>
                  <option value="home">가정집 청소</option>
                  <option value="office">사무실 청소</option>
                  <option value="commercial">상가 청소</option>
                </select>
                <textarea
                  placeholder="추가 요청사항"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  견적 요청하기
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h5 className="text-xl font-bold mb-4">청소짱</h5>
              <p className="text-gray-400">
                믿을 수 있는 전문 청소 서비스<br />
                깨끗하고 안전한 환경을 만들어드립니다.
              </p>
            </div>
            <div>
              <h6 className="font-semibold mb-4">서비스</h6>
              <ul className="space-y-2 text-gray-400">
                <li>가정집 청소</li>
                <li>사무실 청소</li>
                <li>상가 청소</li>
                <li>특수 청소</li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-4">문의</h6>
              <div className="space-y-2 text-gray-400">
                <p>전화: 02-1234-5678</p>
                <p>이메일: info@chungsojjang.co.kr</p>
                <p>운영시간: 평일 9:00-18:00</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 청소짱. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
