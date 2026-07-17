/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PageId = 'inicio' | 'presupuesto' | 'servicios_detalle';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  iconName: string;
  tags: string[];
  basePrice: number;
  benefits: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  clientRole: string;
  rating: number;
  avatarUrl: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  billing: string;
  description: string;
  isPopular: boolean;
  features: string[];
  includeFeatures: string[];
  badge?: string;
  theme: 'light' | 'purple' | 'dark';
}

export interface BlogArticle {
  id: string;
  title: string;
  category: string;
  date: string;
  description: string;
  imageUrl: string;
  readTime: string;
}
