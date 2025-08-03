import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 py-2">
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-900 to-blue-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">청</span>
                </div>
                <h1 className="text-2xl font-bold text-blue-900">청소반장</h1>
                <span className="text-sm text-gray-500 font-medium">PREMIUM CLEANING</span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-gray-800 hover:text-blue-900 px-4 py-2 text-sm font-semibold transition-all duration-300 hover:bg-gray-50 rounded-lg">홈</a>
                <a href="#services" className="text-gray-800 hover:text-blue-900 px-4 py-2 text-sm font-semibold transition-all duration-300 hover:bg-gray-50 rounded-lg">서비스</a>
                <a href="#about" className="text-gray-800 hover:text-blue-900 px-4 py-2 text-sm font-semibold transition-all duration-300 hover:bg-gray-50 rounded-lg">회사소개</a>
                <a href="#contact" className="text-gray-800 hover:text-blue-900 px-4 py-2 text-sm font-semibold transition-all duration-300 hover:bg-gray-50 rounded-lg">견적문의</a>
                <a href="tel:02-1234-5678" className="bg-gradient-to-r from-blue-900 to-blue-800 text-white px-6 py-3 text-sm font-bold rounded-lg hover:from-blue-800 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  전문상담
                </a>
              </div>
            </div>
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-blue-900 p-2">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-blue-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-amber-500/20 text-amber-300 text-sm font-semibold rounded-full border border-amber-500/30 backdrop-blur-sm">
                20년 경험의 프리미엄 청소 전문기업
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              완벽한 공간,<br />
              <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">프리미엄 솔루션</span>
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-blue-100 font-light max-w-3xl mx-auto leading-relaxed">
              차별화된 기술력과 20년 노하우로 가정부터 대기업까지,<br />
              최고 품질의 청소 서비스를 제공합니다
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-md mx-auto">
              <a href="#contact" className="bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-900 px-8 py-4 text-lg font-bold rounded-xl hover:from-amber-400 hover:to-yellow-300 transition-all duration-300 shadow-2xl hover:shadow-amber-500/25 transform hover:-translate-y-1">
                무료 컨설팅
              </a>
              <a href="tel:02-1234-5678" className="bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white px-8 py-4 text-lg font-semibold rounded-xl hover:bg-white/20 hover:border-white/30 transition-all duration-300">
                즉시 상담
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-900 font-semibold text-sm tracking-wide uppercase">PREMIUM SERVICES</span>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 mt-2">차별화된 전문 서비스</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">고객 맞춤형 솔루션으로 완벽한 청소 경험을 제공합니다</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-2xl shadow-xl border border-gray-100 p-8 hover:shadow-2xl hover:border-blue-100 transition-all duration-300 hover:-translate-y-2">
              <div className="text-center mb-6">
                <div className="bg-gradient-to-r from-blue-100 to-blue-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-blue-200 group-hover:to-blue-100 transition-all duration-300">
                  <svg className="w-10 h-10 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m0 0V11a1 1 0 011-1h2a1 1 0 011 1v10m0 0h3a1 1 0 001-1V10M9 21h6" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">프리미엄 가정 서비스</h4>
                <p className="text-gray-600 mb-6 leading-relaxed">전문 장비와 친환경 솔루션으로 완벽한 주거 환경을 조성합니다.</p>
                <div className="text-left space-y-3">
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-blue-900 rounded-full mr-3"></div>
                    <span>전체 공간 딥클리닝</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-blue-900 rounded-full mr-3"></div>
                    <span>이사/입주 전문 청소</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-blue-900 rounded-full mr-3"></div>
                    <span>정기 관리 프로그램</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-2xl shadow-xl border border-gray-100 p-8 hover:shadow-2xl hover:border-amber-100 transition-all duration-300 hover:-translate-y-2">
              <div className="text-center mb-6">
                <div className="bg-gradient-to-r from-amber-100 to-amber-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-amber-200 group-hover:to-amber-100 transition-all duration-300">
                  <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">기업 전용 솔루션</h4>
                <p className="text-gray-600 mb-6 leading-relaxed">효율적인 업무환경 조성을 위한 체계적 관리 시스템을 제공합니다.</p>
                <div className="text-left space-y-3">
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                    <span>정기 오피스 관리</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                    <span>특수 환경 청소</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                    <span>24시간 비상대응</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-2xl shadow-xl border border-gray-100 p-8 hover:shadow-2xl hover:border-emerald-100 transition-all duration-300 hover:-translate-y-2">
              <div className="text-center mb-6">
                <div className="bg-gradient-to-r from-emerald-100 to-emerald-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-emerald-200 group-hover:to-emerald-100 transition-all duration-300">
                  <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">상업공간 관리</h4>
                <p className="text-gray-600 mb-6 leading-relaxed">고객 만족도 향상을 위한 최적의 매장 환경 관리 서비스입니다.</p>
                <div className="text-left space-y-3">
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></div>
                    <span>브랜드 이미지 관리</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></div>
                    <span>고객 접점 공간 특화</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></div>
                    <span>위생 안전 관리</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-blue-900 font-semibold text-sm tracking-wide uppercase">WHY CHOOSE US</span>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 mt-2">
                청소반장을 선택하는<br />특별한 이유
              </h3>
              <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                20년간 축적된 전문성과 혁신적인 기술로 고객 만족도 99.2%를 달성한
                대한민국 대표 프리미엄 청소 전문기업입니다.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-gradient-to-r from-emerald-500 to-emerald-400 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">국제 인증 전문 인력</h4>
                    <p className="text-gray-600">ISO 인증 교육과정 이수 및 정기 업데이트 트레이닝을 통한 최고 수준의 전문성</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-400 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">첨단 친환경 기술</h4>
                    <p className="text-gray-600">유럽 수입 프리미엄 장비와 인증받은 친환경 솔루션으로 안전하고 완벽한 결과</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-gradient-to-r from-amber-500 to-amber-400 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">완벽한 품질 보장</h4>
                    <p className="text-gray-600">종합보험 가입 및 100% 만족 보장 제도로 안심하고 이용할 수 있는 서비스</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl h-[500px] flex items-center justify-center shadow-2xl">
              <div className="text-center text-gray-500">
                <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-12 h-12 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <p className="text-lg font-medium">프리미엄 청소 서비스</p>
                <p className="text-sm">고품질 이미지 영역</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">신뢰받는 청소 전문기업</h3>
            <p className="text-lg text-blue-100">숫자로 증명되는 청소반장의 실력과 신뢰성</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/10">
                <div className="text-4xl font-bold text-amber-400 mb-2">20+</div>
                <div className="text-white font-semibold text-lg">년 경험</div>
                <div className="text-blue-200 text-sm mt-1">축적된 노하우</div>
              </div>
            </div>
            <div className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/10">
                <div className="text-4xl font-bold text-amber-400 mb-2">99.2%</div>
                <div className="text-white font-semibold text-lg">고객 만족도</div>
                <div className="text-blue-200 text-sm mt-1">검증된 품질</div>
              </div>
            </div>
            <div className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/10">
                <div className="text-4xl font-bold text-amber-400 mb-2">24/7</div>
                <div className="text-white font-semibold text-lg">비상 서비스</div>
                <div className="text-blue-200 text-sm mt-1">언제나 대기</div>
              </div>
            </div>
            <div className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/10">
                <div className="text-4xl font-bold text-amber-400 mb-2">100%</div>
                <div className="text-white font-semibold text-lg">품질 보장</div>
                <div className="text-blue-200 text-sm mt-1">완벽한 결과</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-800 to-blue-900"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-400 font-semibold text-sm tracking-wide uppercase">GET IN TOUCH</span>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 mt-2">전문 컨설팅 신청</h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">맞춤형 솔루션을 위한 무료 상담을 받아보세요</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h4 className="text-2xl font-bold mb-8">연락처 정보</h4>
              <div className="space-y-6">
                <div className="flex items-center group">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-500 w-14 h-14 rounded-xl flex items-center justify-center mr-4 group-hover:from-blue-500 group-hover:to-blue-400 transition-all duration-300">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-semibold">02-1234-5678</p>
                    <p className="text-gray-400 text-sm">24시간 전문상담</p>
                  </div>
                </div>
                <div className="flex items-center group">
                  <div className="bg-gradient-to-r from-amber-600 to-amber-500 w-14 h-14 rounded-xl flex items-center justify-center mr-4 group-hover:from-amber-500 group-hover:to-amber-400 transition-all duration-300">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-semibold">premium@chungsojjang.co.kr</p>
                    <p className="text-gray-400 text-sm">비즈니스 문의</p>
                  </div>
                </div>
                <div className="flex items-center group">
                  <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 w-14 h-14 rounded-xl flex items-center justify-center mr-4 group-hover:from-emerald-500 group-hover:to-emerald-400 transition-all duration-300">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-semibold">서울시 강남구 테헤란로 123</p>
                    <p className="text-gray-400 text-sm">본사 사무소</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-8">무료 컨설팅 신청</h4>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="성함"
                    className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:border-amber-400 focus:bg-white/20 transition-all duration-300"
                  />
                  <input
                    type="tel"
                    placeholder="연락처"
                    className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:border-amber-400 focus:bg-white/20 transition-all duration-300"
                  />
                </div>
                <select className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:outline-none focus:border-amber-400 focus:bg-white/20 transition-all duration-300">
                  <option value="" className="bg-gray-800">서비스 유형 선택</option>
                  <option value="home" className="bg-gray-800">프리미엄 가정 서비스</option>
                  <option value="office" className="bg-gray-800">기업 전용 솔루션</option>
                  <option value="commercial" className="bg-gray-800">상업공간 관리</option>
                </select>
                <textarea
                  placeholder="상세 요청사항을 입력해주세요"
                  rows={4}
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:border-amber-400 focus:bg-white/20 transition-all duration-300 resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 to-yellow-400 text-gray-900 py-4 px-8 rounded-xl font-bold text-lg hover:from-amber-400 hover:to-yellow-300 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                >
                  무료 컨설팅 신청하기
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">청</span>
                </div>
                <div>
                  <h5 className="text-2xl font-bold">청소반장</h5>
                  <p className="text-gray-400 text-sm">PREMIUM CLEANING SOLUTIONS</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-md">
                20년 경험의 프리미엄 청소 전문기업으로,<br />
                최고의 기술과 서비스로 완벽한 공간을<br />
                만들어드립니다.
              </p>
            </div>
            <div>
              <h6 className="font-bold mb-6 text-lg">프리미엄 서비스</h6>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white transition-colors duration-200">가정 전문 서비스</li>
                <li className="hover:text-white transition-colors duration-200">기업 솔루션</li>
                <li className="hover:text-white transition-colors duration-200">상업공간 관리</li>
                <li className="hover:text-white transition-colors duration-200">특수 환경 청소</li>
              </ul>
            </div>
            <div>
              <h6 className="font-bold mb-6 text-lg">고객지원</h6>
              <div className="space-y-3 text-gray-400">
                <p><span className="font-semibold">전화:</span> 02-1234-5678</p>
                <p><span className="font-semibold">이메일:</span> premium@chungsojjang.co.kr</p>
                <p><span className="font-semibold">운영시간:</span> 24시간 365일</p>
                <p><span className="font-semibold">본사:</span> 서울 강남구</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">&copy; 2024 청소반장. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">개인정보처리방침</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">서비스약관</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
