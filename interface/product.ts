import { ProductCategory } from "./categoty"
import { ProductSpec } from "./specification"

export enum ProductArea {
  GUEST_ROOM = 'GUEST_ROOM',
  BATHROOM = 'BATHROOM',
  LOBBY = 'LOBBY',
  RESTAURANT = 'RESTAURANT',
  HOUSEKEEPING = 'HOUSEKEEPING',
  BEDROOM="BEDROOM",
  SPA="SPA",
}

export type Product = {
  id: string
  code:string
  name: string
  slug: string              // SEO
  shortDescription: string
  description: string

  category: ProductCategory
  area: ProductArea[]       // ใช้ได้หลายพื้นที่

  images: string[]          // /images/products/xxx.jpg
  thumbnail: {url: string; alt: string}

  specs?: ProductSpec[]     // optional แต่ดูโปรมาก
  features?: string[]       // bullet point

  isFeatured?: boolean
  isActive: boolean
}

// const product: Product = {
//   id: 'p-001',
//   name: 'Luxury Cotton Bath Towel',
//   slug: 'luxury-cotton-bath-towel',
//   shortDescription: 'Premium hotel-grade cotton towel',
//   description:
//     'High-quality 100% cotton towel designed for luxury hotels and resorts.',
//   category: {
//     id: 'cat-amenities',
//     name: 'Amenities',
//     slug: 'amenities',
//   },
//   area: [ProductArea.BATHROOM],
//   thumbnail: '/images/products/towel-thumb.jpg',
//   images: ['/images/products/towel-1.jpg'],
//   specs: [
//     { label: 'Material', value: '100% Cotton' },
//     { label: 'Size', value: '70 x 140 cm' },
//   ],
//   features: [
//     'Soft and durable',
//     'High absorbency',
//     'Hotel-grade quality',
//   ],
//   isFeatured: true,
//   isActive: true,
// }
