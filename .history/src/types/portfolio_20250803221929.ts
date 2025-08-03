// 시공사례 타입 정의
export interface PortfolioCase {
  id: string;
  title: string;
  location: string;
  area: string;
  duration: string;
  category: 'HOME' | 'OFFICE' | 'NEW_HOME' | 'BUILDING';
  categoryLabel: string;
  imageUrl: string;
  description: string;
  rating: number;
  features: {
    time: string;
    satisfaction: string;
  };
  createdAt: string;
  featured: boolean; // 메인 페이지 노출 여부
}

// 고객 후기 타입 정의
export interface CustomerTestimonial {
  id: string;
  customerName: string;
  serviceType: string;
  review: string;
  rating: number;
  imageUrl?: string; // 첨부 이미지 URL (선택사항)
  createdAt: string;
  featured: boolean; // 메인 페이지 노출 여부
  // 인증된 사용자 정보
  authorId?: string; // Firebase Auth UID
  authorName?: string; // Google 계정 이름
  authorEmail?: string; // Google 계정 이메일
  authorPhotoURL?: string; // Google 계정 프로필 사진
}

// 시공사례 필터 타입
export type PortfolioFilter = 'all' | 'HOME' | 'OFFICE' | 'NEW_HOME' | 'BUILDING'; 