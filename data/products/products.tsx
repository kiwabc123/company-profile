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
    images: [
      '/images/products/towel-1.jpg',
      '/images/products/towel-2.jpg',
      '/images/products/towel-3.jpg',
    ],
    specs: [
      { label: 'Material', value: '100% Cotton' },
      { label: 'Size', value: '70 x 140 cm' },
      { label: 'Weight', value: '500 gsm' },
    ],
    features: ['Soft and durable', 'High absorbency', 'Hotel-grade quality'],
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
    images: [
      '/images/products/slippers-1.jpg',
      '/images/products/slippers-2.jpg',
    ],
    specs: [
      { label: 'Material', value: 'Terrycloth' },
      { label: 'Size', value: 'Free size' },
    ],
    features: ['Non-slip sole', 'Individually wrapped'],
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
    images: [
      '/images/products/cleaner-1.jpg',
      '/images/products/cleaner-2.jpg',
    ],
    specs: [
      { label: 'Volume', value: '5 L' },
      { label: 'Scent', value: 'Lemon Fresh' },
    ],
    features: ['Streak-free finish', 'Safe for all floors'],
    isActive: true,
  },

  {
    id: 'p-004',
    name: 'Premium Duvet Set',
    slug: 'premium-duvet-set',
    shortDescription: 'Soft, hypoallergenic duvet set',
    description: 'Elegant duvet set for luxury guest rooms.',
    category: PRODUCT_CATEGORIES[1], // Linen
    area: [ProductArea.GUEST_ROOM],
    thumbnail: '/images/products/duvet-thumb.jpg',
    images: [
      '/images/products/duvet-1.jpg',
      '/images/products/duvet-2.jpg',
    ],
    specs: [
      { label: 'Material', value: 'Microfiber' },
      { label: 'Size', value: 'King' },
    ],
    features: ['Hypoallergenic', 'Machine washable'],
    isActive: true,
  },

  {
    id: 'p-005',
    name: 'Miniature Shampoo Bottles',
    slug: 'miniature-shampoo-bottles',
    shortDescription: 'Travel-size guest shampoo',
    description: 'Gentle, fragrant shampoo in single-use bottles.',
    category: PRODUCT_CATEGORIES[0], // Amenities
    area: [ProductArea.BATHROOM],
    thumbnail: '/images/products/shampoo-thumb.jpg',
    images: [
      '/images/products/shampoo-1.jpg',
      '/images/products/shampoo-2.jpg',
      '/images/products/shampoo-3.jpg',
    ],
    specs: [
      { label: 'Volume', value: '30 ml' },
      { label: 'Fragrance', value: 'Green Tea' },
    ],
    features: ['Eco-friendly packaging', 'Paraben-free'],
    isActive: true,
  },

  {
    id: 'p-006',
    name: 'Lobby Scent Diffuser',
    slug: 'lobby-scent-diffuser',
    shortDescription: 'Aroma diffuser for public areas',
    description: 'Creates a welcoming atmosphere in hotel lobbies.',
    category: PRODUCT_CATEGORIES[2], // Cleaning
    area: [ProductArea.LOBBY],
    thumbnail: '/images/products/diffuser-thumb.jpg',
    images: [
      '/images/products/diffuser-1.jpg',
      '/images/products/diffuser-2.jpg',
    ],
    specs: [
      { label: 'Coverage', value: '100 m²' },
      { label: 'Refill', value: 'Monthly' },
    ],
    features: ['Quiet operation', 'Long-lasting scent'],
    isActive: true,
  },

  {
    id: 'p-007',
    name: 'Housekeeping Cart',
    slug: 'housekeeping-cart',
    shortDescription: 'Multi-compartment cleaning cart',
    description: 'Durable cart for efficient housekeeping operations.',
    category: PRODUCT_CATEGORIES[2], // Cleaning
    area: [ProductArea.HOUSEKEEPING],
    thumbnail: '/images/products/cart-thumb.jpg',
    images: [
      '/images/products/cart-1.jpg',
      '/images/products/cart-2.jpg',
    ],
    specs: [
      { label: 'Material', value: 'Stainless Steel' },
      { label: 'Compartments', value: '5' },
    ],
    features: ['Lockable wheels', 'Ergonomic handles'],
    isActive: true,
  },

  {
    id: 'p-008',
    name: 'Restaurant Tableware Set',
    slug: 'restaurant-tableware-set',
    shortDescription: 'Elegant porcelain tableware',
    description: 'Complete set for fine dining restaurants.',
    category: PRODUCT_CATEGORIES[1], // Linen (closest fit)
    area: [ProductArea.RESTAURANT],
    thumbnail: '/images/products/tableware-thumb.jpg',
    images: [
      '/images/products/tableware-1.jpg',
      '/images/products/tableware-2.jpg',
    ],
    specs: [
      { label: 'Pieces', value: '24' },
      { label: 'Material', value: 'Porcelain' },
    ],
    features: ['Dishwasher safe', 'Chip-resistant'],
    isActive: true,
  },

  {
    id: 'p-009',
    name: 'Guest Room Safe',
    slug: 'guest-room-safe',
    shortDescription: 'Electronic safe for valuables',
    description: 'Secure digital safe for guest rooms.',
    category: PRODUCT_CATEGORIES[0], // Amenities
    area: [ProductArea.GUEST_ROOM],
    thumbnail: '/images/products/safe-thumb.jpg',
    images: [
      '/images/products/safe-1.jpg',
      '/images/products/safe-2.jpg',
    ],
    specs: [
      { label: 'Lock Type', value: 'Digital keypad' },
      { label: 'Size', value: 'Laptop compatible' },
    ],
    features: ['LED display', 'Override key'],
    isActive: true,
  },

  {
    id: 'p-010',
    name: 'Bathroom Vanity Kit',
    slug: 'bathroom-vanity-kit',
    shortDescription: 'Essential vanity items for guests',
    description: 'Includes cotton buds, shower cap, and sewing kit.',
    category: PRODUCT_CATEGORIES[0], // Amenities
    area: [ProductArea.BATHROOM],
    thumbnail: '/images/products/vanity-thumb.jpg',
    images: [
      '/images/products/vanity-1.jpg',
      '/images/products/vanity-2.jpg',
    ],
    specs: [
      { label: 'Contents', value: 'Cotton buds, shower cap, sewing kit' },
    ],
    features: ['Individually packed', 'Travel-friendly'],
    isActive: true,
  },
]
