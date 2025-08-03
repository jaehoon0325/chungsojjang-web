import { portfolioService, testimonialService } from '@/services/portfolioService';
import { PortfolioCase, CustomerTestimonial } from '@/types/portfolio';

// 샘플 시공사례 데이터
const samplePortfolioCases: Omit<PortfolioCase, 'id' | 'createdAt'>[] = [
  {
    title: "프리미엄 빌라 전체 청소",
    location: "강남구",
    area: "120㎡",
    duration: "소요시간: 8시간",
    category: "HOME",
    categoryLabel: "홈클리닝",
    imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    description: "입주 전 전체 청소 작업으로 새집 같은 깨끗함을 구현했습니다. 특히 화장실과 주방의 찌든 때까지 완벽하게 제거하여 고객 만족도 100%를 달성했습니다.",
    rating: 5,
    features: {
      time: "8시간 완료",
      satisfaction: "만족도 100%"
    },
    featured: true
  },
  {
    title: "대기업 본사 사무실 청소",
    location: "여의도",
    area: "500㎡",
    duration: "정기 관리",
    category: "OFFICE",
    categoryLabel: "오피스",
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    description: "매주 정기적인 사무실 청소로 임직원들의 쾌적한 근무환경을 조성합니다. 카펫 전용 청소와 유리창 관리까지 체계적으로 진행하여 브랜드 이미지 향상에 기여하고 있습니다.",
    rating: 5,
    features: {
      time: "정기 관리",
      satisfaction: "체계적 관리"
    },
    featured: true
  },
  {
    title: "아파트 입주 전문 청소",
    location: "원주시",
    area: "84㎡",
    duration: "소요시간: 6시간",
    category: "NEW_HOME",
    categoryLabel: "입주청소",
    imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    description: "새 아파트 입주를 위한 완벽한 청소 서비스입니다. 건축 먼지와 시공 잔여물을 깔끔하게 제거하여 새집 증후군을 예방하고, 가족이 안심하고 생활할 수 있는 환경을 조성했습니다.",
    rating: 5,
    features: {
      time: "6시간 완료",
      satisfaction: "입주 준비 완료"
    },
    featured: true
  },
  {
    title: "고급 레스토랑 개업 청소",
    location: "압구정",
    area: "200㎡",
    duration: "소요시간: 12시간",
    category: "OFFICE",
    categoryLabel: "상업공간",
    imageUrl: "https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    description: "고급 레스토랑 개업을 앞두고 전체적인 마무리 청소를 진행했습니다. 주방 장비부터 홀 인테리어까지 세심하게 관리하여 첫 손님을 맞을 준비를 완벽하게 마쳤습니다.",
    rating: 5,
    features: {
      time: "12시간 완료",
      satisfaction: "개업 완료"
    },
    featured: false
  },
  {
    title: "펜션 시즌 준비 청소",
    location: "강릉",
    area: "전체 8객실",
    duration: "소요시간: 16시간",
    category: "BUILDING",
    categoryLabel: "상업건물",
    imageUrl: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    description: "여름 성수기를 앞둔 펜션의 전체 객실과 공용시설을 대대적으로 청소했습니다. 각 객실의 침구류부터 바베큐 시설까지 완벽하게 정비하여 고객 만족도를 높였습니다.",
    rating: 4,
    features: {
      time: "16시간 완료",
      satisfaction: "성수기 준비 완료"
    },
    featured: false
  }
];

// 샘플 고객 후기 데이터
const sampleTestimonials: Omit<CustomerTestimonial, 'id' | 'createdAt'>[] = [
  {
    customerName: "김○○님",
    serviceType: "강남구 아파트 전체 청소",
    review: "새집처럼 깨끗해졌어요. 특히 타일 사이사이 곰팡이까지 깨끗하게 제거해주셔서 정말 만족합니다!",
    rating: 5,
    featured: true
  },
  {
    customerName: "박○○ 과장",
    serviceType: "여의도 IT기업 사무실",
    review: "사무실이 이렇게 깨끗해질 줄 몰랐습니다. 직원들도 모두 만족하고 있어요. 정기 관리 맡기길 잘했습니다.",
    rating: 5,
    featured: true
  },
  {
    customerName: "이○○ 대표",
    serviceType: "홍대 카페 오픈 청소",
    review: "매장 오픈 전 청소 맡겼는데 정말 완벽했습니다. 고객들이 깨끗하다고 칭찬해주시네요!",
    rating: 5,
    featured: true
  },
  {
    customerName: "정○○님",
    serviceType: "원주시 신축 아파트 입주 청소",
    review: "아이들이 있어서 걱정했는데 친환경 세제로 깨끗하게 해주셨어요. 안심하고 이사할 수 있었습니다.",
    rating: 5,
    featured: false
  },
  {
    customerName: "최○○ 부장",
    serviceType: "강남 오피스텔 건물 관리",
    review: "월 정기 청소로 맡기고 있는데 항상 만족스럽습니다. 전문적이고 꼼꼼하게 해주세요.",
    rating: 4,
    featured: false
  }
];

// 데이터베이스에 샘플 데이터 추가하는 함수
export const seedDatabase = async () => {
  console.log('📝 파이어스토어에 샘플 데이터를 추가하는 중...');
  
  try {
    // 시공사례 데이터 추가
    console.log('💼 시공사례 데이터 추가 중...');
    for (const portfolioCase of samplePortfolioCases) {
      const id = await portfolioService.addCase(portfolioCase);
      console.log(`✅ 시공사례 추가 완료: ${portfolioCase.title} (ID: ${id})`);
    }

    // 고객 후기 데이터 추가
    console.log('💬 고객 후기 데이터 추가 중...');
    for (const testimonial of sampleTestimonials) {
      const id = await testimonialService.addTestimonial(testimonial);
      console.log(`✅ 고객 후기 추가 완료: ${testimonial.customerName} (ID: ${id})`);
    }

    console.log('🎉 모든 샘플 데이터가 성공적으로 추가되었습니다!');
    return true;
  } catch (error) {
    console.error('❌ 데이터 추가 중 오류 발생:', error);
    return false;
  }
};

// 개별 데이터 추가 함수들 (필요시 사용)
export const addSinglePortfolioCase = async (caseData: Omit<PortfolioCase, 'id' | 'createdAt'>) => {
  try {
    const id = await portfolioService.addCase(caseData);
    console.log(`✅ 시공사례 추가 완료: ${caseData.title} (ID: ${id})`);
    return id;
  } catch (error) {
    console.error('❌ 시공사례 추가 실패:', error);
    throw error;
  }
};

export const addSingleTestimonial = async (testimonialData: Omit<CustomerTestimonial, 'id' | 'createdAt'>) => {
  try {
    const id = await testimonialService.addTestimonial(testimonialData);
    console.log(`✅ 고객 후기 추가 완료: ${testimonialData.customerName} (ID: ${id})`);
    return id;
  } catch (error) {
    console.error('❌ 고객 후기 추가 실패:', error);
    throw error;
  }
}; 