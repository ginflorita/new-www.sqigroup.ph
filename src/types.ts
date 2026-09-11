export type CategoryPillar = 'WRITE' | 'CREATE' | 'ORGANIZE' | 'PRESENT' | 'OFFICE ESSENTIALS';

export type BrandName = 'SQI' | 'KIDART' | 'FlexOffice' | 'Colokit' | 'HiCrafts';

export type TargetAudience = 'school' | 'office' | 'arts' | 'all';

export interface ProductSpecification {
  packaging: string;
  material: string;
  dimensions?: string;
  colorsAvailable?: string[];
  safetyCertification?: string;
  targetUse: string;
}

export interface Product {
  id: string;
  sku: string;
  name: string;
  brand: BrandName;
  pillar: CategoryPillar;
  category: string;
  shortDesc: string;
  fullDesc: string;
  images: string[];
  specs: ProductSpecification;
  isFeatured?: boolean;
  isNew?: boolean;
  audience: TargetAudience[];
  colors?: { name: string; hex: string }[];
  tags: string[];
}

export interface CategoryInfo {
  id: string;
  name: string;
  pillar: CategoryPillar;
  description: string;
  iconName: string;
  itemCount: number;
  featuredImage: string;
}

export interface BrandInfo {
  id: BrandName;
  name: string;
  tagline: string;
  description: string;
  established: string;
  primaryFocus: string;
  badge: string;
  accentColor: string;
  featuredProducts: string[];
}

export interface InsightArticle {
  id: string;
  title: string;
  slug: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  excerpt: string;
  content: string[];
  image: string;
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  organization: string;
  inquiryType: 'Bulk School Supply' | 'Corporate Office Accounts' | 'Retail Distribution & Dealership' | 'Specific Product Inquiry' | 'Catalog Request' | 'General';
  productSku?: string;
  productName?: string;
  estimatedQuantity?: string;
  message: string;
}
