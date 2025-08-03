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
                <a href="#portfolio" className="text-gray-800 hover:text-blue-900 px-4 py-2 text-sm font-semibold transition-all duration-300 hover:bg-gray-50 rounded-lg">시공사례</a>
                <a href="#about" className="text-gray-800 hover:text-blue-900 px-4 py-2 text-sm font-semibold transition-all duration-300 hover:bg-gray-50 rounded-lg">회사소개</a>
                <a href="#contact" className="text-gray-800 hover:text-blue-900 px-4 py-2 text-sm font-semibold transition-all duration-300 hover:bg-gray-50 rounded-lg">견적문의</a>
                <a href="tel:033-900-9922" className="bg-gradient-to-r from-blue-900 to-blue-800 text-white px-6 py-3 text-sm font-bold rounded-lg hover:from-blue-800 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
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

      {/* Hero Section with Professional Cleaning Image */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-900">
        {/* Background Image with Professional Cleaning Scene */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
             style={{
               backgroundImage: `url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
             }}>
        </div>
        
        {/* Professional Cleaning Equipment Overlay */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
             style={{
               backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
             }}>
        </div>

        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-blue-900/80 to-gray-900/90"></div>
        
        {/* Professional Pattern Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/20 to-gray-900/40"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="mb-6">
            <span className="inline-block px-6 py-3 bg-amber-500/90 text-amber-100 text-sm font-bold rounded-full border-2 border-amber-400/50 backdrop-blur-sm shadow-xl">
              ✨ 20년 경험의 프리미엄 청소 전문기업 ✨
            </span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white drop-shadow-2xl">
            완벽한 청소,<br />
            <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent drop-shadow-lg">
              프로의 손길
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 text-blue-100 font-light max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
            전문 장비와 숙련된 기술로 가정부터 대기업까지,<br />
            <span className="font-semibold text-white">깨끗함을 넘어 완벽함을 추구</span>합니다
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-lg mx-auto">
            <a href="#contact" className="group bg-gradient-to-r from-amber-500 to-yellow-400 text-gray-900 px-10 py-5 text-lg font-bold rounded-xl hover:from-amber-400 hover:to-yellow-300 transition-all duration-300 shadow-2xl hover:shadow-amber-500/30 transform hover:-translate-y-1 hover:scale-105">
              <span className="flex items-center justify-center">
                <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.684.949V19a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                무료 현장 견적
              </span>
            </a>
            <a href="tel:033-900-9922" className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-10 py-5 text-lg font-semibold rounded-xl hover:bg-white/20 hover:border-white/50 transition-all duration-300 shadow-xl">
              <span className="flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                즉시 전화상담
              </span>
            </a>
          </div>

          {/* Professional Credentials */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-sm text-blue-100">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span>정부 인증 업체</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span>전문 장비 완비</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-amber-500/20 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span>100% 보험 보장</span>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
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

      {/* Portfolio Section - 시공사례 */}
      <section id="portfolio" className="py-24 bg-gradient-to-br from-gray-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-900 font-semibold text-sm tracking-wide uppercase">PORTFOLIO</span>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 mt-2">시공사례</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">전문성이 입증된 청소 결과물을 확인해보세요</p>
          </div>

          {/* Before/After Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Case 1: 고급 주택 청소 */}
            <div className="group bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative">
                <div className="aspect-[4/3] bg-cover bg-center relative"
                     style={{
                       backgroundImage: `url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')`
                     }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-emerald-500 text-white px-3 py-1 text-xs font-bold rounded-full">AFTER</span>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="text-lg font-bold mb-1">프리미엄 빌라 전체 청소</h4>
                    <p className="text-sm text-gray-200">강남구 · 120㎡ · 소요시간: 8시간</p>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 ml-2">완벽한 마감</span>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  입주 전 전체 청소 작업으로 새집 같은 깨끗함을 구현했습니다. 특히 화장실과 주방의 찌든 때까지 완벽하게 제거하여 고객 만족도 100%를 달성했습니다.
                </p>
                <div className="flex items-center text-sm text-gray-500 space-x-4">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    8시간 완료
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    만족도 100%
                  </div>
                </div>
              </div>
            </div>

            {/* Case 2: 사무실 청소 */}
            <div className="group bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative">
                <div className="aspect-[4/3] bg-cover bg-center relative"
                     style={{
                       backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')`
                     }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-500 text-white px-3 py-1 text-xs font-bold rounded-full">OFFICE</span>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="text-lg font-bold mb-1">대기업 본사 사무실 청소</h4>
                    <p className="text-sm text-gray-200">여의도 · 500㎡ · 정기 관리</p>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 ml-2">기업 신뢰</span>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  매주 정기적인 사무실 청소로 임직원들의 쾌적한 근무환경을 조성합니다. 카펫 전용 청소와 유리창 관리까지 체계적으로 진행하여 브랜드 이미지 향상에 기여하고 있습니다.
                </p>
                <div className="flex items-center text-sm text-gray-500 space-x-4">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                    </svg>
                    정기 관리
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm0 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z" clipRule="evenodd" />
                    </svg>
                    체계적 관리
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* More Cases Gallery */}
          <div className="mb-16">
            <h4 className="text-2xl font-bold text-gray-900 mb-8 text-center">다양한 청소 전문 분야</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* Kitchen Deep Clean */}
              <div className="group relative overflow-hidden rounded-2xl aspect-square">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                     style={{
                       backgroundImage: `url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')`
                     }}>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h5 className="font-bold text-sm">주방 전문 청소</h5>
                  <p className="text-xs text-gray-300">기름때 완벽 제거</p>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="bg-emerald-500/90 text-white px-2 py-1 text-xs font-bold rounded">완료</span>
                </div>
              </div>

              {/* Bathroom Deep Clean */}
              <div className="group relative overflow-hidden rounded-2xl aspect-square">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                     style={{
                       backgroundImage: `url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')`
                     }}>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h5 className="font-bold text-sm">화장실 위생 청소</h5>
                  <p className="text-xs text-gray-300">세균 99.9% 박멸</p>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="bg-blue-500/90 text-white px-2 py-1 text-xs font-bold rounded">완료</span>
                </div>
              </div>

              {/* Window Cleaning */}
              <div className="group relative overflow-hidden rounded-2xl aspect-square">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                     style={{
                       backgroundImage: `url('https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')`
                     }}>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h5 className="font-bold text-sm">유리창 전문 청소</h5>
                  <p className="text-xs text-gray-300">물때 완전 제거</p>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="bg-amber-500/90 text-white px-2 py-1 text-xs font-bold rounded">완료</span>
                </div>
              </div>

              {/* Floor Maintenance */}
              <div className="group relative overflow-hidden rounded-2xl aspect-square">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                     style={{
                       backgroundImage: `url('https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')`
                     }}>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h5 className="font-bold text-sm">바닥 왁싱 관리</h5>
                  <p className="text-xs text-gray-300">광택 복원</p>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="bg-purple-500/90 text-white px-2 py-1 text-xs font-bold rounded">완료</span>
                </div>
              </div>
            </div>
          </div>

          {/* Client Testimonials */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
            <h4 className="text-2xl font-bold text-gray-900 mb-8 text-center">고객 후기</h4>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"새집처럼 깨끗해졌어요. 특히 타일 사이사이 곰팡이까지 깨끗하게 제거해주셔서 정말 만족합니다!"</p>
                <p className="font-semibold text-gray-900">김○○님</p>
                <p className="text-sm text-gray-500">강남구 아파트 전체 청소</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"사무실이 이렇게 깨끗해질 줄 몰랐습니다. 직원들도 모두 만족하고 있어요. 정기 관리 맡기길 잘했습니다."</p>
                <p className="font-semibold text-gray-900">박○○ 과장</p>
                <p className="text-sm text-gray-500">여의도 IT기업 사무실</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"매장 오픈 전 청소 맡겼는데 정말 완벽했습니다. 고객들이 깨끗하다고 칭찬해주시네요!"</p>
                <p className="font-semibold text-gray-900">이○○ 대표</p>
                <p className="text-sm text-gray-500">홍대 카페 오픈 청소</p>
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
                    <p className="text-lg font-semibold">033-900-9922</p>
                    <p className="text-gray-400 text-sm">고객상담실</p>
                  </div>
                </div>
                <div className="flex items-center group">
                  <div className="bg-gradient-to-r from-amber-600 to-amber-500 w-14 h-14 rounded-xl flex items-center justify-center mr-4 group-hover:from-amber-500 group-hover:to-amber-400 transition-all duration-300">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-semibold">info@chungsojjang.co.kr</p>
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
                    <p className="text-lg font-semibold">강원도 원주시 이화3길 32-13</p>
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
