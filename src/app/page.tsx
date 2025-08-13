
import PortfolioSection from "@/components/PortfolioSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-xl sticky top-0 z-50 border-b border-blue-100">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 py-2">
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">청</span>
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-800 to-teal-700 bg-clip-text text-transparent">청소반장</h1>
                <span className="text-sm text-blue-600 font-medium tracking-wide">PREMIUM CLEANING</span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                <a href="#home" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-semibold transition-all duration-300 hover:bg-blue-50 rounded-lg relative group">
                  홈
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-400 to-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></span>
                </a>
                <a href="#services" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-semibold transition-all duration-300 hover:bg-blue-50 rounded-lg relative group">
                  서비스
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-400 to-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></span>
                </a>
                <a href="#portfolio" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-semibold transition-all duration-300 hover:bg-blue-50 rounded-lg relative group">
                  시공사례
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-400 to-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></span>
                </a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-semibold transition-all duration-300 hover:bg-blue-50 rounded-lg relative group">
                  회사소개
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-400 to-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></span>
                </a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-semibold transition-all duration-300 hover:bg-blue-50 rounded-lg relative group">
                  견적문의
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-400 to-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></span>
                </a>
                <a href="tel:033-900-9922" className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 text-sm font-bold rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 hover:scale-105">
                  전문상담
                </a>
              </div>
            </div>
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-slate-800 p-2">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section with Professional Cleaning Image */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-teal-900">
        {/* Background Image with Professional Cleaning Scene */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-75"
             style={{
               backgroundImage: `url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
             }}>
        </div>
        
        {/* Professional Cleaning Equipment Overlay */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
             style={{
               backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
             }}>
        </div>

        {/* Modern Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-800/75 to-teal-900/85"></div>
        
        {/* Dynamic Pattern Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 via-teal-600/20 to-blue-900/30"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="mb-6">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-teal-500/80 to-blue-500/80 text-white text-sm font-bold rounded-full border-2 border-teal-400/30 backdrop-blur-sm shadow-xl">
              20년 경험의 프리미엄 청소 전문기업
            </span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white drop-shadow-2xl">
            완벽한 청소,<br />
            <span className="bg-gradient-to-r from-teal-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-lg">
              프로의 손길
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 text-blue-100 font-light max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
            건물관리부터 홈크리닝, 오피스크리닝까지<br />
            <span className="font-semibold text-teal-200">전문적이고 체계적인 청소 솔루션</span>을 제공합니다
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-lg mx-auto">
            <a href="#contact" className="group bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-10 py-5 text-lg font-bold rounded-xl hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-2xl hover:shadow-emerald-500/30 transform hover:-translate-y-1 hover:scale-105">
              <span className="flex items-center justify-center">
                무료 현장 견적
              </span>
            </a>
            <a href="tel:033-900-9922" className="bg-white/15 backdrop-blur-md border-2 border-white/40 text-white px-10 py-5 text-lg font-semibold rounded-xl hover:bg-white/25 hover:border-white/60 transition-all duration-300 shadow-xl">
              <span className="flex items-center justify-center">
                즉시 전화상담
              </span>
            </a>
          </div>

          {/* Professional Credentials */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-sm text-blue-100">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
              <span>정부 인증 업체</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
              <span>전문 장비 완비</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full"></div>
              <span>100% 보험 보장</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm tracking-wide uppercase">PROFESSIONAL SERVICES</span>
            <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-teal-700 bg-clip-text text-transparent mb-6 mt-2">전문 청소 서비스</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">다양한 분야별 전문 청소 솔루션을 제공합니다</p>
          </div>

          {/* 주요업무 - 한줄 강조 형태 */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-blue-800 via-blue-700 to-teal-800 rounded-3xl shadow-2xl p-8 lg:p-12 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-blue-500/20 backdrop-blur-sm"></div>
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
                    핵심 전문 분야
                  </div>
                  <h4 className="text-3xl font-bold mb-4">주요업무</h4>
                  <p className="text-blue-100 text-lg">건물 전반적인 관리와 특수 청소 전문 서비스</p>
                </div>
                <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
                  <div className="group flex items-center bg-emerald-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-emerald-400/30 hover:bg-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300">
                    <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></div>
                    <span className="font-semibold text-lg">건물관리</span>
                  </div>
                  <div className="group flex items-center bg-blue-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-400/30 hover:bg-blue-500/30 hover:border-blue-400/50 transition-all duration-300">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></div>
                    <span className="font-semibold text-lg">소독방역</span>
                  </div>
                  <div className="group flex items-center bg-teal-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-teal-400/30 hover:bg-teal-500/30 hover:border-teal-400/50 transition-all duration-300">
                    <div className="w-3 h-3 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></div>
                    <span className="font-semibold text-lg">물탱크청소</span>
                  </div>
                  <div className="group flex items-center bg-cyan-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-cyan-400/30 hover:bg-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
                    <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></div>
                    <span className="font-semibold text-lg">청소용역</span>
                  </div>
                  <div className="group flex items-center bg-indigo-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-indigo-400/30 hover:bg-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300">
                    <div className="w-3 h-3 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></div>
                    <span className="font-semibold text-lg">준공청소</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 홈크리닝 & 오피스크리닝 - 이미지 결합 형태 */}
          <div className="mb-12">
            <h4 className="text-2xl font-bold text-gray-900 mb-8 text-center">전문 청소 분야</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* 입주청소 */}
              <div className="group relative overflow-hidden rounded-2xl aspect-square">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                     style={{
                       backgroundImage: `url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')`
                     }}>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h5 className="font-bold text-sm">입주청소</h5>
                  <p className="text-xs text-gray-300">새집 준비</p>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="bg-emerald-600/90 text-white px-2 py-1 text-xs font-bold rounded">홈</span>
                </div>
              </div>

              {/* 이사청소 */}
              <div className="group relative overflow-hidden rounded-2xl aspect-square">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                     style={{
                       backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')`
                     }}>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h5 className="font-bold text-sm">이사청소</h5>
                  <p className="text-xs text-gray-300">완벽한 이주</p>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="bg-teal-600/90 text-white px-2 py-1 text-xs font-bold rounded">홈</span>
                </div>
              </div>

              {/* 사무실청소 */}
              <div className="group relative overflow-hidden rounded-2xl aspect-square">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                     style={{
                       backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')`
                     }}>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h5 className="font-bold text-sm">사무실청소</h5>
                  <p className="text-xs text-gray-300">쾌적한 업무환경</p>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="bg-blue-700/90 text-white px-2 py-1 text-xs font-bold rounded">오피스</span>
                </div>
              </div>

              {/* 건물외벽청소 */}
              <div className="group relative overflow-hidden rounded-2xl aspect-square">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                     style={{
                       backgroundImage: `url('https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')`
                     }}>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h5 className="font-bold text-sm">건물외벽청소</h5>
                  <p className="text-xs text-gray-300">전문 고소작업</p>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="bg-indigo-700/90 text-white px-2 py-1 text-xs font-bold rounded">오피스</span>
                </div>
              </div>

              {/* 거주청소 */}
              <div className="group relative overflow-hidden rounded-2xl aspect-square">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                     style={{
                       backgroundImage: `url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')`
                     }}>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h5 className="font-bold text-sm">거주청소</h5>
                  <p className="text-xs text-gray-300">정기 관리</p>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="bg-cyan-600/90 text-white px-2 py-1 text-xs font-bold rounded">홈</span>
                </div>
              </div>

              {/* 매트리스청소 */}
              <div className="group relative overflow-hidden rounded-2xl aspect-square">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                     style={{
                       backgroundImage: `url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')`
                     }}>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h5 className="font-bold text-sm">매트리스청소</h5>
                  <p className="text-xs text-gray-300">깊숙한 세정</p>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="bg-purple-700/90 text-white px-2 py-1 text-xs font-bold rounded">오피스</span>
                </div>
              </div>

              {/* 카펫청소 */}
              <div className="group relative overflow-hidden rounded-2xl aspect-square">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                     style={{
                       backgroundImage: `url('https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')`
                     }}>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h5 className="font-bold text-sm">카펫청소</h5>
                  <p className="text-xs text-gray-300">섬유 전문케어</p>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="bg-violet-700/90 text-white px-2 py-1 text-xs font-bold rounded">오피스</span>
                </div>
              </div>

              {/* 부분청소 */}
              <div className="group relative overflow-hidden rounded-2xl aspect-square">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                     style={{
                       backgroundImage: `url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')`
                     }}>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h5 className="font-bold text-sm">부분청소</h5>
                  <p className="text-xs text-gray-300">필요한 곳만</p>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="bg-orange-600/90 text-white px-2 py-1 text-xs font-bold rounded">홈</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section - 파이어스토어 연동 */}
      <PortfolioSection />

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-br from-blue-50 via-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-blue-600 font-semibold text-sm tracking-wide uppercase">WHY CHOOSE US</span>
              <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-teal-700 bg-clip-text text-transparent mb-8 mt-2">
                청소반장을 선택하는<br />특별한 이유
              </h3>
              <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                건물관리, 홈크리닝, 오피스크리닝 분야 20년 경험으로 고객 만족도 99.2%를 달성한
                대한민국 대표 종합 청소 전문기업입니다.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-gradient-to-r from-slate-600 to-slate-500 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg">
                      <div className="w-6 h-6 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">국제 인증 전문 인력</h4>
                    <p className="text-gray-600">ISO 인증 교육과정 이수 및 정기 업데이트 트레이닝을 통한 최고 수준의 전문성</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-500 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg">
                      <div className="w-6 h-6 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">첨단 친환경 기술</h4>
                    <p className="text-gray-600">유럽 수입 프리미엄 장비와 인증받은 친환경 솔루션으로 안전하고 완벽한 결과</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-gradient-to-r from-teal-600 to-green-500 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg">
                      <div className="w-6 h-6 bg-white rounded-full"></div>
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
                  <div className="w-12 h-12 bg-slate-600 rounded-lg"></div>
                </div>
                <p className="text-lg font-medium">프리미엄 청소 서비스</p>
                <p className="text-sm">고품질 이미지 영역</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-teal-900 to-cyan-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">신뢰받는 청소 전문기업</h3>
            <p className="text-lg text-gray-100">숫자로 증명되는 청소반장의 실력과 신뢰성</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/10">
                <div className="text-4xl font-bold text-gray-200 mb-2">20+</div>
                <div className="text-white font-semibold text-lg">년 경험</div>
                <div className="text-gray-200 text-sm mt-1">축적된 노하우</div>
              </div>
            </div>
            <div className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/10">
                <div className="text-4xl font-bold text-gray-200 mb-2">99.2%</div>
                <div className="text-white font-semibold text-lg">고객 만족도</div>
                <div className="text-gray-200 text-sm mt-1">검증된 품질</div>
              </div>
            </div>
            <div className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/10">
                <div className="text-4xl font-bold text-gray-200 mb-2">24/7</div>
                <div className="text-white font-semibold text-lg">비상 서비스</div>
                <div className="text-gray-200 text-sm mt-1">언제나 대기</div>
              </div>
            </div>
            <div className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/10">
                <div className="text-4xl font-bold text-gray-200 mb-2">100%</div>
                <div className="text-white font-semibold text-lg">품질 보장</div>
                <div className="text-gray-200 text-sm mt-1">완벽한 결과</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-blue-900 via-teal-800 to-cyan-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800/50 via-teal-700/50 to-cyan-800/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gray-300 font-semibold text-sm tracking-wide uppercase">GET IN TOUCH</span>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 mt-2">전문 컨설팅 신청</h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">맞춤형 솔루션을 위한 무료 상담을 받아보세요</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h4 className="text-2xl font-bold mb-8">연락처 정보</h4>
              <div className="space-y-6">
                <div className="flex items-center group">
                  <div className="bg-gradient-to-r from-slate-600 to-slate-500 w-14 h-14 rounded-xl flex items-center justify-center mr-4 group-hover:from-slate-500 group-hover:to-slate-400 transition-all duration-300">
                    <div className="w-7 h-7 bg-white rounded"></div>
                  </div>
                  <div>
                    <p className="text-lg font-semibold">033-900-9922</p>
                    <p className="text-gray-400 text-sm">고객상담실</p>
                  </div>
                </div>
                <div className="flex items-center group">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-500 w-14 h-14 rounded-xl flex items-center justify-center mr-4 group-hover:from-blue-500 group-hover:to-cyan-400 transition-all duration-300">
                    <div className="w-7 h-7 bg-white rounded"></div>
                  </div>
                  <div>
                    <p className="text-lg font-semibold">info@chungsojjang.co.kr</p>
                    <p className="text-gray-400 text-sm">비즈니스 문의</p>
                  </div>
                </div>
                <div className="flex items-center group">
                  <div className="bg-gradient-to-r from-teal-600 to-green-500 w-14 h-14 rounded-xl flex items-center justify-center mr-4 group-hover:from-teal-500 group-hover:to-green-400 transition-all duration-300">
                    <div className="w-7 h-7 bg-white rounded"></div>
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
                    className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:border-gray-400 focus:bg-white/20 transition-all duration-300"
                  />
                  <input
                    type="tel"
                    placeholder="연락처"
                    className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:border-gray-400 focus:bg-white/20 transition-all duration-300"
                  />
                </div>
                <select className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:outline-none focus:border-gray-400 focus:bg-white/20 transition-all duration-300">
                  <option value="" className="bg-gray-800">서비스 유형 선택</option>
                  <option value="main" className="bg-gray-800">주요업무 (건물관리/소독방역/물탱크청소)</option>
                  <option value="home" className="bg-gray-800">홈크리닝 (입주/이사/거주/부분청소)</option>
                  <option value="office" className="bg-gray-800">오피스크리닝 (사무실/외벽/바닥청소)</option>
                </select>
                <textarea
                  placeholder="상세 요청사항을 입력해주세요"
                  rows={4}
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:border-gray-400 focus:bg-white/20 transition-all duration-300 resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 px-8 rounded-xl font-bold text-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                >
                  무료 컨설팅 신청하기
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-blue-900 via-teal-900 to-cyan-900 text-white py-16 border-t border-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center">
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
              <h6 className="font-bold mb-6 text-lg">전문 서비스</h6>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white transition-colors duration-200">주요업무</li>
                <li className="hover:text-white transition-colors duration-200">홈크리닝</li>
                <li className="hover:text-white transition-colors duration-200">오피스크리닝</li>
                <li className="hover:text-white transition-colors duration-200">소독방역</li>
              </ul>
            </div>
            <div>
              <h6 className="font-bold mb-6 text-lg">고객지원</h6>
              <div className="space-y-3 text-gray-400">
                <p><span className="font-semibold">대표전화:</span> 033-900-9922</p>
                <p><span className="font-semibold">상담전화:</span> 033-731-9932</p>
                <p><span className="font-semibold">휴대폰:</span> 010-5374-2087</p>
                <p><span className="font-semibold">팩스:</span> 033-745-2144</p>
                <p><span className="font-semibold">이메일:</span> info@chungsojjang.co.kr</p>
                <p><span className="font-semibold">본사:</span> 강원도 원주시 이화3길 32-13</p>
                <p><span className="font-semibold">대표:</span> 정미라</p>
                <p><span className="font-semibold">사업자번호:</span> 224-81-40548</p>
              </div>
            </div>
          </div>
          <div className="border-t border-teal-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">&copy; 2024 (주)청소반장. All rights reserved.</p>
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
