/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface RoomType {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  locality: string;
  address?: string;
  phone?: string;
  sharingType: 'Single' | 'Double' | 'Triple';
  amenities: string[];
  isGirlsOnly?: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string; // Lucide icon name or emoji
  bgColor: string;
}

export interface Promotion {
  id: string;
  title: string;
  subtitle: string;
  cta: string;
  image: string;
  color: string;
}
