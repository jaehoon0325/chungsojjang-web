'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { testimonialService, uploadTestimonialImage } from '@/services/portfolioService';
import { useAuth } from '@/contexts/AuthContext';

interface TestimonialFormProps {
  onSubmitSuccess: () => void;
  onClose: () => void;
}

const TestimonialForm: React.FC<TestimonialFormProps> = ({ onSubmitSuccess, onClose }) => {
  const { user, signInWithGoogle } = useAuth();
  const [formData, setFormData] = useState({
    customerName: user?.displayName || '',
    serviceType: '',
    review: '',
    rating: 5
  });
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'rating' ? parseInt(value) : value
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // 파일 타입 검증
    if (!file.type.startsWith('image/')) {
      setError('이미지 파일만 업로드 가능합니다.');
      return;
    }

    // 파일 크기 검증 (5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError('이미지 크기는 5MB 이하여야 합니다.');
      return;
    }

    setSelectedImage(file);
    setError('');

    // 미리보기 생성
    const reader = new FileReader();
    reader.onload = (e) => {
      setImagePreview(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setSelectedImage(null);
    setImagePreview(null);
    // 파일 input 리셋
    const fileInput = document.getElementById('image-upload') as HTMLInputElement;
    if (fileInput) fileInput.value = '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // 유효성 검사
    if (!formData.customerName.trim() || !formData.serviceType.trim() || !formData.review.trim()) {
      setError('모든 필수 항목을 입력해주세요.');
      return;
    }

    if (formData.review.length < 10) {
      setError('후기는 10자 이상 작성해주세요.');
      return;
    }

    setIsSubmitting(true);

    try {
      let imageUrl: string | undefined;

      // 이미지가 선택된 경우 업로드
      if (selectedImage) {
        setIsUploadingImage(true);
        try {
          imageUrl = await uploadTestimonialImage(selectedImage);
        } catch (uploadError) {
          console.error('Error uploading image:', uploadError);
          setError('이미지 업로드 중 오류가 발생했습니다. 다시 시도해주세요.');
          return;
        } finally {
          setIsUploadingImage(false);
        }
      }

      // 로그인 확인
      if (!user) {
        setError('후기를 작성하려면 로그인이 필요합니다.');
        return;
      }

      // 후기 데이터 저장
      await testimonialService.addTestimonial({
        customerName: formData.customerName.trim() || user.displayName || '익명',
        serviceType: formData.serviceType.trim(),
        review: formData.review.trim(),
        rating: formData.rating,
        imageUrl, // 이미지 URL 포함 (없으면 undefined)
        featured: false, // 새로 작성된 후기는 기본적으로 featured가 아님
        // 인증된 사용자 정보 추가
        authorId: user.uid,
        authorName: user.displayName || undefined,
        authorEmail: user.email || undefined,
        authorPhotoURL: user.photoURL || undefined
      });

      // 성공시 콜백 실행
      onSubmitSuccess();
      
      // 폼 리셋
      setFormData({
        customerName: '',
        serviceType: '',
        review: '',
        rating: 5
      });
      setSelectedImage(null);
      setImagePreview(null);
    } catch (error) {
      console.error('Error submitting testimonial:', error);
      setError('후기 등록 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <button
        key={i}
        type="button"
        onClick={() => setFormData(prev => ({ ...prev, rating: i + 1 }))}
        className={`text-2xl transition-colors duration-200 ${
          i < rating ? 'text-yellow-400 hover:text-yellow-500' : 'text-gray-300 hover:text-yellow-300'
        }`}
      >
        ⭐
      </button>
    ));
  };

  const serviceTypes = [
    '입주청소',
    '이사청소',
    '거주청소',
    '부분청소',
    '사무실청소',
    '건물외벽청소',
    '매트리스청소',
    '카펫청소',
    '건물관리',
    '소독방역',
    '물탱크청소',
    '준공청소',
    '기타'
  ];

  // 로그인하지 않은 사용자를 위한 UI
  if (!user) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
          <div className="text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">로그인이 필요해요</h3>
              <p className="text-gray-600 mb-6">
                후기를 작성하려면 구글 계정으로 로그인해 주세요.<br/>
                로그인하시면 안전하게 후기를 관리할 수 있습니다.
              </p>
            </div>
            
            <div className="space-y-3">
              <button
                onClick={signInWithGoogle}
                className="w-full flex items-center justify-center space-x-3 bg-white border-2 border-gray-300 px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors duration-200 font-medium"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="text-gray-700">Google로 로그인</span>
              </button>
              
              <button
                onClick={onClose}
                className="w-full bg-gray-100 text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-200 transition-colors duration-200 font-medium"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900">고객후기 작성</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl"
          >
            ×
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* 고객명 */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              고객명 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="customerName"
              value={formData.customerName}
              onChange={handleInputChange}
              placeholder="예: 김○○님"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
              required
            />
          </div>

          {/* 서비스 종류 */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              이용하신 서비스 <span className="text-red-500">*</span>
            </label>
            <select
              name="serviceType"
              value={formData.serviceType}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
              required
            >
              <option value="">서비스를 선택해주세요</option>
              {serviceTypes.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          {/* 평점 */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              만족도 평가 <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center space-x-1">
              {renderStars(formData.rating)}
              <span className="ml-3 text-sm text-gray-600">
                ({formData.rating}점)
              </span>
            </div>
          </div>

          {/* 후기 내용 */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              후기 내용 <span className="text-red-500">*</span>
            </label>
            <textarea
              name="review"
              value={formData.review}
              onChange={handleInputChange}
              rows={4}
              placeholder="청소반장의 서비스는 어떠셨나요? 솔직한 후기를 남겨주세요."
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent resize-none"
              required
            />
            <p className="text-sm text-gray-500 mt-1">
              최소 10자 이상 작성해주세요. ({formData.review.length}/500)
            </p>
          </div>

          {/* 이미지 첨부 */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              사진 첨부 <span className="text-gray-400">(선택사항)</span>
            </label>
            
            {!imagePreview ? (
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-slate-400 transition-colors duration-200">
                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
                <label
                  htmlFor="image-upload"
                  className="cursor-pointer flex flex-col items-center"
                >
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl text-gray-400">+</span>
                  </div>
                  <span className="text-gray-600 font-medium">클릭해서 이미지 선택</span>
                  <span className="text-gray-500 text-sm mt-1">또는 여기에 드래그하세요</span>
                  <span className="text-gray-400 text-xs mt-2">JPG, PNG, GIF 파일 (최대 5MB)</span>
                </label>
              </div>
            ) : (
              <div className="relative">
                <Image
                  src={imagePreview}
                  alt="미리보기"
                  width={400}
                  height={192}
                  className="w-full h-48 object-cover rounded-xl border border-gray-300"
                />
                <button
                  type="button"
                  onClick={removeImage}
                  className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600 transition-colors duration-200"
                >
                  ×
                </button>
                <div className="mt-2 text-center">
                  <p className="text-sm text-gray-600 font-medium">{selectedImage?.name}</p>
                  <p className="text-xs text-gray-500">
                    {selectedImage ? (selectedImage.size / 1024 / 1024).toFixed(1) + 'MB' : ''}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* 에러 메시지 */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          )}

          {/* 버튼들 */}
          <div className="flex space-x-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 font-medium transition-colors duration-200"
            >
              취소
            </button>
            <button
              type="submit"
              disabled={isSubmitting || isUploadingImage}
              className={`flex-1 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                isSubmitting || isUploadingImage
                  ? 'bg-gray-400 text-white cursor-not-allowed'
                  : 'bg-gradient-to-r from-slate-700 to-slate-600 text-white hover:from-slate-600 hover:to-slate-500 shadow-lg hover:shadow-xl'
              }`}
            >
              {isUploadingImage ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin h-5 w-5 mr-2 border-2 border-white border-t-transparent rounded-full"></div>
                  이미지 업로드 중...
                </div>
              ) : isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin h-5 w-5 mr-2 border-2 border-white border-t-transparent rounded-full"></div>
                  등록 중...
                </div>
              ) : (
                '후기 등록하기'
              )}
            </button>
          </div>

          {/* 개인정보 안내 */}
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-xs text-gray-600 leading-relaxed">
              • 작성해주신 후기와 첨부 이미지는 청소반장 홈페이지에 게시될 수 있습니다.<br />
              • 개인정보는 후기 확인 용도로만 사용되며, 제3자에게 제공되지 않습니다.<br />
              • 첨부된 이미지는 Firebase Storage에 안전하게 저장됩니다.<br />
              • 허위 후기나 부적절한 내용은 관리자에 의해 삭제될 수 있습니다.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TestimonialForm; 