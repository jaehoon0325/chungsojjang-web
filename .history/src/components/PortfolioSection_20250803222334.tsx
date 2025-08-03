'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { testimonialService } from '@/services/portfolioService';
import { CustomerTestimonial } from '@/types/portfolio';
import TestimonialForm from './TestimonialForm';
import { useAuth } from '@/contexts/AuthContext';

const PortfolioSection = () => {
  const [testimonials, setTestimonials] = useState<CustomerTestimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [showTestimonialForm, setShowTestimonialForm] = useState(false);
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // 클라이언트 사이드에서만 렌더링하도록 처리
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // 정적 시공사례 데이터
  const staticPortfolioCases = [
    {
      id: 1,
      title: "프리미엄 빌라 전체 청소",
      location: "강남구",
      area: "120㎡",
      duration: "소요시간: 8시간",
      categoryLabel: "AFTER",
      categoryColor: "bg-slate-600",
      imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "입주 전 전체 청소 작업으로 새집 같은 깨끗함을 구현했습니다. 특히 화장실과 주방의 찌든 때까지 완벽하게 제거하여 고객 만족도 100%를 달성했습니다.",
      rating: 5,
      features: {
        time: "8시간 완료",
        satisfaction: "만족도 100%"
      }
    },
    {
      id: 2,
      title: "대기업 본사 사무실 청소",
      location: "여의도",
      area: "500㎡",
      duration: "정기 관리",
      categoryLabel: "OFFICE",
      categoryColor: "bg-slate-700",
      imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "매주 정기적인 사무실 청소로 임직원들의 쾌적한 근무환경을 조성합니다. 카펫 전용 청소와 유리창 관리까지 체계적으로 진행하여 브랜드 이미지 향상에 기여하고 있습니다.",
      rating: 5,
      features: {
        time: "정기 관리",
        satisfaction: "체계적 관리"
      }
    },
    {
      id: 3,
      title: "아파트 입주 전문 청소",
      location: "원주시",
      area: "84㎡",
      duration: "소요시간: 6시간",
      categoryLabel: "NEW HOME",
      categoryColor: "bg-slate-600",
      imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "새 아파트 입주를 위한 완벽한 청소 서비스입니다. 건축 먼지와 시공 잔여물을 깔끔하게 제거하여 새집 증후군을 예방하고, 가족이 안심하고 생활할 수 있는 환경을 조성했습니다.",
      rating: 5,
      features: {
        time: "6시간 완료",
        satisfaction: "입주 준비 완료"
      }
    }
  ];

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true);
        const reviews = await testimonialService.getAllTestimonials();
        // 최신 후기 6개만 표시 (최신순)
        setTestimonials(reviews.slice(0, 6));
      } catch (error) {
        console.error('Failed to fetch testimonials:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, [refreshTrigger]);

  const handleTestimonialSubmitSuccess = () => {
    setShowTestimonialForm(false);
    setShowSuccessMessage(true);
    setRefreshTrigger(prev => prev + 1); // 데이터 새로고침
    
    // 3초 후 성공 메시지 숨기기
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <svg key={i} className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };



  return (
    <section id="portfolio" className="py-24 bg-gradient-to-br from-gray-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-slate-800 font-semibold text-sm tracking-wide uppercase">PORTFOLIO</span>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 mt-2">시공사례</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">전문성이 입증된 청소 결과물을 확인해보세요</p>
        </div>

                  {/* Before/After Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {staticPortfolioCases.map((portfolioCase) => (
              <div key={portfolioCase.id} className="group bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative">
                  <div 
                    className="aspect-[4/3] bg-cover bg-center relative"
                    style={{
                      backgroundImage: `url('${portfolioCase.imageUrl}')`
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className={`${portfolioCase.categoryColor} text-white px-3 py-1 text-xs font-bold rounded-full`}>
                        {portfolioCase.categoryLabel}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h4 className="text-lg font-bold mb-1">{portfolioCase.title}</h4>
                      <p className="text-sm text-gray-200">{portfolioCase.location} · {portfolioCase.area} · {portfolioCase.duration}</p>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center space-x-1 mb-2">
                      {renderStars(portfolioCase.rating)}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">{portfolioCase.features.satisfaction}</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {portfolioCase.description}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-slate-500 rounded-full mr-2"></div>
                      {portfolioCase.features.time}
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-slate-500 rounded-full mr-2"></div>
                      {portfolioCase.features.satisfaction}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        {/* Client Testimonials */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
            <h4 className="text-2xl font-bold text-gray-900 mb-4 sm:mb-0">고객 후기</h4>
            {isMounted && (
              <button
                onClick={() => setShowTestimonialForm(true)}
                className="bg-gradient-to-r from-slate-700 to-slate-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-slate-600 hover:to-slate-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                suppressHydrationWarning
              >
                <div className="flex items-center space-x-2">
                  <span>후기 작성하기</span>
                </div>
              </button>
            )}
          </div>

          {/* 성공 메시지 */}
          {showSuccessMessage && (
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 animate-fade-in">
              <div className="flex items-center">
                <div className="w-6 h-6 bg-green-500 rounded-full mr-3"></div>
                <div>
                  <p className="text-green-800 font-semibold">후기가 성공적으로 등록되었습니다!</p>
                  <p className="text-green-600 text-sm">소중한 의견을 주셔서 감사합니다.</p>
                </div>
              </div>
            </div>
          )}
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {loading ? (
              // 로딩 중
              <div className="col-span-full text-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-700 mx-auto mb-4"></div>
                <p className="text-gray-600">고객 후기를 불러오는 중...</p>
              </div>
            ) : testimonials.length > 0 ? (
              testimonials.map((testimonial) => (
                <div key={testimonial.id} className="text-center">
                  <div className="flex justify-center mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  {/* 첨부된 이미지가 있을 경우 표시 */}
                  {testimonial.imageUrl && (
                    <div className="mb-4">
                      <Image
                        src={testimonial.imageUrl}
                        alt="고객 후기 사진"
                        width={400}
                        height={160}
                        className="w-full h-40 object-cover rounded-xl border border-gray-200 shadow-md"
                      />
                    </div>
                  )}
                  
                  <p className="text-gray-600 mb-4 italic">&ldquo;{testimonial.review}&rdquo;</p>
                  
                  {/* 작성자 정보 */}
                  <div className="flex items-center space-x-3 mb-2">
                    {testimonial.authorPhotoURL && (
                      <Image
                        src={testimonial.authorPhotoURL}
                        alt="작성자 프로필"
                        width={32}
                        height={32}
                        className="rounded-full border border-gray-200"
                      />
                    )}
                    <div>
                      <p className="font-semibold text-gray-900">
                        {testimonial.authorName || testimonial.customerName}
                        {testimonial.authorId && (
                          <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            인증됨
                          </span>
                        )}
                      </p>
                      <p className="text-sm text-gray-500">{testimonial.serviceType}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              // 기본 후기가 없을 때의 fallback
              <div className="col-span-full text-center text-gray-500 py-8">
                <p>아직 등록된 고객 후기가 없습니다.</p>
                <p className="text-sm mt-2">첫 번째 후기를 작성해보세요!</p>
              </div>
            )}
          </div>

          {/* 후기 더보기 안내 */}
          {testimonials.length > 0 && (
            <div className="text-center mt-8 pt-6 border-t border-gray-200">
              <p className="text-gray-600 text-sm">
                더 많은 후기를 보고 싶으시다면 후기 작성에 참여해주세요!
              </p>
            </div>
          )}
        </div>
      </div>

      {/* 후기 작성 폼 모달 */}
      {isMounted && showTestimonialForm && (
        <TestimonialForm
          onSubmitSuccess={handleTestimonialSubmitSuccess}
          onClose={() => setShowTestimonialForm(false)}
        />
      )}
    </section>
  );
};

export default PortfolioSection; 