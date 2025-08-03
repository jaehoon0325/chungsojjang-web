import { 
  collection, 
  getDocs, 
  query, 
  orderBy, 
  where, 
  limit,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
  Timestamp 
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '@/lib/firebase';
import { PortfolioCase, CustomerTestimonial, PortfolioFilter } from '@/types/portfolio';

// 컬렉션 이름 상수
const PORTFOLIO_COLLECTION = 'portfolioCases';
const TESTIMONIALS_COLLECTION = 'customerTestimonials';

// 시공사례 관련 함수들
export const portfolioService = {
  // 메인 페이지용 대표 시공사례 가져오기 (featured = true)
  async getFeaturedCases(): Promise<PortfolioCase[]> {
    try {
      const q = query(
        collection(db, PORTFOLIO_COLLECTION),
        where('featured', '==', true),
        orderBy('createdAt', 'desc'),
        limit(3)
      );
      
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate?.()?.toISOString() || doc.data().createdAt
      })) as PortfolioCase[];
    } catch (error) {
      console.error('Error fetching featured portfolio cases:', error);
      return [];
    }
  },

  // 모든 시공사례 가져오기 (필터 옵션 포함)
  async getAllCases(filter: PortfolioFilter = 'all'): Promise<PortfolioCase[]> {
    try {
      let q;
      
      if (filter === 'all') {
        q = query(
          collection(db, PORTFOLIO_COLLECTION),
          orderBy('createdAt', 'desc')
        );
      } else {
        q = query(
          collection(db, PORTFOLIO_COLLECTION),
          where('category', '==', filter),
          orderBy('createdAt', 'desc')
        );
      }
      
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate?.()?.toISOString() || doc.data().createdAt
      })) as PortfolioCase[];
    } catch (error) {
      console.error('Error fetching portfolio cases:', error);
      return [];
    }
  },

  // 시공사례 추가
  async addCase(caseData: Omit<PortfolioCase, 'id' | 'createdAt'>): Promise<string> {
    try {
      const docRef = await addDoc(collection(db, PORTFOLIO_COLLECTION), {
        ...caseData,
        createdAt: Timestamp.now()
      });
      return docRef.id;
    } catch (error) {
      console.error('Error adding portfolio case:', error);
      throw error;
    }
  },

  // 시공사례 수정
  async updateCase(id: string, caseData: Partial<PortfolioCase>): Promise<void> {
    try {
      const docRef = doc(db, PORTFOLIO_COLLECTION, id);
      await updateDoc(docRef, {
        ...caseData,
        updatedAt: Timestamp.now()
      });
    } catch (error) {
      console.error('Error updating portfolio case:', error);
      throw error;
    }
  },

  // 시공사례 삭제
  async deleteCase(id: string): Promise<void> {
    try {
      const docRef = doc(db, PORTFOLIO_COLLECTION, id);
      await deleteDoc(docRef);
    } catch (error) {
      console.error('Error deleting portfolio case:', error);
      throw error;
    }
  }
};

// 고객 후기 관련 함수들
export const testimonialService = {
  // 메인 페이지용 대표 고객 후기 가져오기 (featured = true)
  async getFeaturedTestimonials(): Promise<CustomerTestimonial[]> {
    try {
      const q = query(
        collection(db, TESTIMONIALS_COLLECTION),
        where('featured', '==', true),
        orderBy('createdAt', 'desc'),
        limit(3)
      );
      
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate?.()?.toISOString() || doc.data().createdAt
      })) as CustomerTestimonial[];
    } catch (error) {
      console.error('Error fetching featured testimonials:', error);
      return [];
    }
  },

  // 모든 고객 후기 가져오기
  async getAllTestimonials(): Promise<CustomerTestimonial[]> {
    try {
      const q = query(
        collection(db, TESTIMONIALS_COLLECTION),
        orderBy('createdAt', 'desc')
      );
      
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate?.()?.toISOString() || doc.data().createdAt
      })) as CustomerTestimonial[];
    } catch (error) {
      console.error('Error fetching testimonials:', error);
      return [];
    }
  },

  // 고객 후기 추가
  async addTestimonial(testimonialData: Omit<CustomerTestimonial, 'id' | 'createdAt'>): Promise<string> {
    try {
      const docRef = await addDoc(collection(db, TESTIMONIALS_COLLECTION), {
        ...testimonialData,
        createdAt: Timestamp.now()
      });
      return docRef.id;
    } catch (error) {
      console.error('Error adding testimonial:', error);
      throw error;
    }
  },

  // 고객 후기 수정
  async updateTestimonial(id: string, testimonialData: Partial<CustomerTestimonial>): Promise<void> {
    try {
      const docRef = doc(db, TESTIMONIALS_COLLECTION, id);
      await updateDoc(docRef, {
        ...testimonialData,
        updatedAt: Timestamp.now()
      });
    } catch (error) {
      console.error('Error updating testimonial:', error);
      throw error;
    }
  },

  // 고객 후기 삭제
  async deleteTestimonial(id: string): Promise<void> {
    try {
      const docRef = doc(db, TESTIMONIALS_COLLECTION, id);
      await deleteDoc(docRef);
    } catch (error) {
      console.error('Error deleting testimonial:', error);
      throw error;
    }
  }
}; 