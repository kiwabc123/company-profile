import { Product, ProductArea } from '../../interface/product'
import { PRODUCT_CATEGORIES } from './categories'

export const PRODUCTS: Product[] = [
  {
    id: 'p-001',
    name: 'Luxury Cotton Bath Towel',
    slug: 'luxury-cotton-bath-towel',
    shortDescription: 'Premium hotel-grade cotton towel',
    description:
      'High-quality 100% cotton towel designed for luxury hotels and resorts.',
    category: PRODUCT_CATEGORIES[1], // Linen
    area: [ProductArea.BATHROOM],
    thumbnail: '/images/products/towel-thumb.jpg',
    images: ['/images/products/towel-1.jpg'],
    features: ['Soft and durable', 'High absorbency'],
    isFeatured: true,
    isActive: true,
  },

  {
    id: 'p-002',
    name: 'Hotel Slippers',
    slug: 'hotel-slippers',
    shortDescription: 'Comfortable disposable slippers',
    description: 'Lightweight slippers for guest rooms.',
    category: PRODUCT_CATEGORIES[0], // Amenities
    area: [ProductArea.GUEST_ROOM],
    thumbnail: '/images/products/slippers-thumb.jpg',
    images: ['/images/products/slippers-1.jpg'],
    isActive: true,
  },

  {
    id: 'p-003',
    name: 'Floor Cleaning Solution',
    slug: 'floor-cleaning-solution',
    shortDescription: 'Industrial-grade floor cleaner',
    description: 'Effective cleaner for hotel public areas.',
    category: PRODUCT_CATEGORIES[2], // Cleaning
    area: [ProductArea.LOBBY, ProductArea.RESTAURANT],
    thumbnail: '/images/products/cleaner-thumb.jpg',
    images: ['/images/products/cleaner-1.jpg'],
    isActive: true,
  },
]
