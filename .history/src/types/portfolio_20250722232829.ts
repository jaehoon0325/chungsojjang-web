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
  createdAt: string;
  featured: boolean; // 메인 페이지 노출 여부
}

// 시공사례 필터 타입
export type PortfolioFilter = 'all' | 'HOME' | 'OFFICE' | 'NEW_HOME' | 'BUILDING'; 