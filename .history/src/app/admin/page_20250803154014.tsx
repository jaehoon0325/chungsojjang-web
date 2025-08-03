'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { seedDatabase } from '@/utils/seedData';

const AdminPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error' | 'info'>('info');

  const handleSeedData = async () => {
    setIsLoading(true);
    setMessage('데이터를 추가하는 중...');
    setMessageType('info');

    try {
      const success = await seedDatabase();
      if (success) {
        setMessage('✅ 모든 샘플 데이터가 성공적으로 추가되었습니다!');
        setMessageType('success');
      } else {
        setMessage('❌ 데이터 추가 중 오류가 발생했습니다.');
        setMessageType('error');
      }
    } catch (error) {
      console.error('Error seeding data:', error);
      setMessage('❌ 데이터 추가 중 오류가 발생했습니다.');
      setMessageType('error');
    } finally {
      setIsLoading(false);
    }
  };

  const getMessageStyle = () => {
    switch (messageType) {
      case 'success':
        return 'bg-green-50 text-green-700 border-green-200';
      case 'error':
        return 'bg-red-50 text-red-700 border-red-200';
      default:
        return 'bg-blue-50 text-blue-700 border-blue-200';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">청</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900">청소반장 관리자</h1>
          </div>
          <p className="text-lg text-gray-600">파이어스토어 데이터 관리 도구</p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">시공사례 & 고객후기 데이터 추가</h2>
            <p className="text-gray-600 leading-relaxed">
              파이어스토어에 샘플 시공사례와 고객후기 데이터를 추가합니다.<br />
              이 작업은 한 번만 실행하시면 됩니다.
            </p>
          </div>

          {/* 추가될 데이터 미리보기 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">📋 추가될 시공사례</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• 프리미엄 빌라 전체 청소 (강남구)</li>
                <li>• 대기업 본사 사무실 청소 (여의도)</li>
                <li>• 아파트 입주 전문 청소 (원주시)</li>
                <li>• 고급 레스토랑 개업 청소 (압구정)</li>
                <li>• 펜션 시즌 준비 청소 (강릉)</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-emerald-900 mb-4">💬 추가될 고객후기</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• 김○○님 (강남구 아파트 전체 청소)</li>
                <li>• 박○○ 과장 (여의도 IT기업 사무실)</li>
                <li>• 이○○ 대표 (홍대 카페 오픈 청소)</li>
                <li>• 정○○님 (원주시 신축 아파트)</li>
                <li>• 최○○ 부장 (강남 오피스텔 건물)</li>
              </ul>
            </div>
          </div>

          {/* 실행 버튼 */}
          <div className="text-center mb-6">
            <button
              onClick={handleSeedData}
              disabled={isLoading}
              className={`
                px-8 py-4 rounded-xl text-white font-bold text-lg
                transition-all duration-300 shadow-lg hover:shadow-xl
                ${isLoading 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 transform hover:-translate-y-1'
                }
              `}
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>데이터 추가 중...</span>
                </div>
              ) : (
                '샘플 데이터 추가하기'
              )}
            </button>
          </div>

          {/* 메시지 표시 */}
          {message && (
            <div className={`border rounded-xl p-4 ${getMessageStyle()}`}>
              <p className="font-medium">{message}</p>
            </div>
          )}

          {/* 주의사항 */}
          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-xl p-6">
            <h4 className="text-yellow-800 font-semibold mb-2">⚠️ 주의사항</h4>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• 이 작업은 파이어스토어에 데이터를 추가합니다.</li>
              <li>• 중복 실행하면 동일한 데이터가 여러 번 추가됩니다.</li>
              <li>• 파이어베이스 설정이 올바르게 되어있는지 확인해주세요.</li>
              <li>• 네트워크 연결 상태를 확인해주세요.</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-gray-500">
            <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium">← 메인 페이지로 돌아가기</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminPage; 