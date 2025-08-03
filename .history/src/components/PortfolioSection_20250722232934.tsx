'use client';

import React, { useEffect, useState } from 'react';
import { portfolioService, testimonialService } from '@/services/portfolioService';
import { PortfolioCase, CustomerTestimonial } from '@/types/portfolio';

const PortfolioSection = () => {
  const [portfolioCases, setPortfolioCases] = useState<PortfolioCase[]>([]);
  const [testimonials, setTestimonials] = useState<CustomerTestimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [cases, reviews] = await Promise.all([
          portfolioService.getFeaturedCases(),
          testimonialService.getFeaturedTestimonials()
        ]);
        
        setPortfolioCases(cases);
        setTestimonials(reviews);
      } catch (error) {
        console.error('Failed to fetch portfolio data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'HOME': return 'bg-emerald-500';
      case 'OFFICE': return 'bg-blue-500';
      case 'NEW_HOME': return 'bg-purple-500';
      case 'BUILDING': return 'bg-amber-500';
      default: return 'bg-gray-500';
    }
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <svg key={i} className={`w-4 h-4 ${i < rating ? 'text-amber-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  if (loading) {
    return (
      <section id="portfolio" className="py-24 bg-gradient-to-br from-gray-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-900 mx-auto"></div>
            <p className="mt-4 text-gray-600">시공사례를 불러오는 중...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-br from-gray-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-900 font-semibold text-sm tracking-wide uppercase">PORTFOLIO</span>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 mt-2">시공사례</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">전문성이 입증된 청소 결과물을 확인해보세요</p>
        </div>

        {/* Before/After Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {portfolioCases.length > 0 ? (
            portfolioCases.map((portfolioCase) => (
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
                      <span className={`${getCategoryColor(portfolioCase.category)} text-white px-3 py-1 text-xs font-bold rounded-full`}>
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
                      <svg className="w-4 h-4 mr-1 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      {portfolioCase.features.time}
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {portfolioCase.features.satisfaction}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            // 기본 사례가 없을 때의 fallback
            <div className="col-span-full text-center text-gray-500 py-12">
              <p>아직 등록된 시공사례가 없습니다.</p>
            </div>
          )}
        </div>

        {/* Client Testimonials */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
          <h4 className="text-2xl font-bold text-gray-900 mb-8 text-center">고객 후기</h4>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.length > 0 ? (
              testimonials.map((testimonial) => (
                <div key={testimonial.id} className="text-center">
                  <div className="flex justify-center mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.review}"</p>
                  <p className="font-semibold text-gray-900">{testimonial.customerName}</p>
                  <p className="text-sm text-gray-500">{testimonial.serviceType}</p>
                </div>
              ))
            ) : (
              // 기본 후기가 없을 때의 fallback
              <div className="col-span-full text-center text-gray-500 py-8">
                <p>아직 등록된 고객 후기가 없습니다.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection; 