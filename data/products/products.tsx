import { Product, ProductArea } from '../../interface/product'
import { PRODUCT_CATEGORIES } from './categories'
import { IMAGES } from './images'

export const PRODUCTS: Product[] = [
  {
    id: 'a-001',
    code: 'A01',
    name: 'Hotel White & Stripe Bedding Set',
    slug: 'hotel-white-stripe-bedding-set',

    shortDescription: 'ชุดเครื่องนอนขาวเรียบและขาวริ้ว เกรดโรงแรม',
    description:
      'ชุดเครื่องนอนสีขาวเรียบและลายริ้วแบบโรงแรม ผลิตจากผ้าคุณภาพสูง ให้สัมผัสนุ่ม สะอาด หรูหรา เหมาะสำหรับโรงแรม รีสอร์ท และที่พักทุกระดับ',

    category: PRODUCT_CATEGORIES[0], 
    area: [ProductArea.BEDROOM],
    thumbnail: IMAGES['a-001'].thumbnail,
    images: IMAGES['a-001'].images,
    specs: [
      { label: 'Material', value: '100% Cotton' },
      { label: 'Thread Count', value: '300 – 500 TC' },
      { label: 'Color', value: 'White / White Stripe' },
      { label: 'Pattern', value: 'Plain / Hotel Stripe' },
      { label: 'Available Sizes', value: 'Twin / Queen / King' },
    ],

    features: [
      'ดีไซน์มาตรฐานโรงแรม',
      'สีขาวสะอาด ดูหรูหรา',
      'เนื้อผ้านุ่ม ระบายอากาศดี',
      'เหมาะสำหรับการใช้งานเชิงพาณิชย์',
    ],

    isFeatured: true,
    isActive: true,
  },
  {
    id: 'b-001',
    code: 'B01',
    name: 'Hotel Spring & Pocket Spring Mattress',
    slug: 'hotel-spring-pocket-spring-mattress',

    shortDescription: 'ที่นอนสปริงและพ็อกเก็ตสปริง มาตรฐานโรงแรม',
    description:
      'ที่นอนคุณภาพสูงสำหรับโรงแรม รีสอร์ท และที่พักอาศัย รองรับทั้งระบบ Bonnell Spring และ Pocket Spring ให้การรองรับน้ำหนักดี ลดแรงสั่นสะเทือน และเพิ่มความสบายตลอดการนอน',

    category: PRODUCT_CATEGORIES[1], // Mattress
    area: [ProductArea.BEDROOM],

    thumbnail: IMAGES['b-001'].thumbnail,
    images: IMAGES['b-001'].images,

    specs: [
      { label: 'Spring System', value: 'Bonnell Spring / Pocket Spring' },
      { label: 'Firmness', value: 'Medium – Firm' },
      { label: 'Comfort Layer', value: 'High Density Foam' },
      { label: 'Fabric', value: 'Jacquard / Knitted Fabric' },
      { label: 'Thickness', value: '8 – 12 inches' },
      { label: 'Sizes', value: 'Single / Twin / Queen / King' },
    ],

    features: [
      'รองรับสรีระและกระจายน้ำหนักได้ดี',
      'Pocket Spring ลดแรงสั่นสะเทือนระหว่างการนอน',
      'โครงสร้างแข็งแรง เหมาะกับการใช้งานโรงแรม',
      'อายุการใช้งานยาวนาน',
    ],


    isFeatured: true,
    isActive: true,
  },
  {
    id: 'c-001',
    code: 'C01',
    name: 'Hotel Amenity Set',
    slug: 'hotel-amenity-set',
    shortDescription: 'ชุด Amenity สำหรับโรงแรม ครบครัน เรียบหรู พร้อมใช้งาน',
    description:
      'ชุดอุปกรณ์ Amenity สำหรับโรงแรม รีสอร์ท และที่พัก ประกอบด้วยของใช้ส่วนตัวคุณภาพสูง ดีไซน์เรียบ สะอาด เหมาะกับทุกระดับโรงแรม สามารถปรับเปลี่ยนรายการและบรรจุภัณฑ์ตามความต้องการลูกค้าได้',
    category: PRODUCT_CATEGORIES[2], // หรือ PRODUCT_CATEGORIES[?]
    area: [ProductArea.BATHROOM],
    thumbnail: IMAGES['c-001'].thumbnail,
    images: IMAGES['c-001'].images,
    specs: [
      { label: 'Usage', value: 'Hotel / Resort / Serviced Apartment' },
      { label: 'Packaging', value: 'Individual Pack / Set Pack' },
      { label: 'Customization', value: 'Logo & Packaging Available' },
    ],
    features: [
      'เหมาะสำหรับโรงแรมทุกระดับ',
      'ดีไซน์เรียบ สะอาด ดูพรีเมียม',
      'สามารถเลือกชนิดสินค้าในชุดได้',
      'รองรับการสั่งผลิตจำนวนมาก',
    ],
    isFeatured: false,
    isActive: true,
  },
  {
    id: 'd-001',
    code: 'D01',
    name: 'Waffle & Tobby Bathrobe Set',
    slug: 'waffle-tobby-bathrobe-set',
    shortDescription: 'ชุดคลุมอาบน้ำผ้ารังผึ้งและผ้าต็อบบี้ สำหรับโรงแรมและสปา',
    description:
      'ชุดคลุมอาบน้ำผลิตจากผ้ารังผึ้ง (Waffle) และผ้าต็อบบี้ (Tobby) เนื้อผ้านุ่ม ซับน้ำได้ดี น้ำหนักเบา แห้งไว เหมาะสำหรับโรงแรม รีสอร์ท สปา และที่พักระดับพรีเมียม สามารถเลือกแบบผ้า ขนาด และสั่งปักโลโก้ได้',
    category: PRODUCT_CATEGORIES[3], // หรือหมวด Textile / Linen ตามที่คุณตั้งไว้
    area: [ProductArea.BATHROOM, ProductArea.SPA],
    thumbnail: IMAGES['d-001'].thumbnail,
    images: IMAGES['d-001'].images,
    specs: [
      { label: 'Material', value: 'Waffle Cotton / Tobby Cotton' },
      { label: 'Size', value: 'Free Size / Custom Size' },
      { label: 'Color', value: 'White (Custom available)' },
      { label: 'Usage', value: 'Hotel / Resort / Spa' },
    ],
    features: [
      'เนื้อผ้านุ่ม น้ำหนักเบา แห้งไว',
      'ซับน้ำได้ดี เหมาะสำหรับใช้งานหลังอาบน้ำ',
      'ดีไซน์เรียบหรู สำหรับโรงแรมและสปา',
      'สามารถปักโลโก้หรือสั่งผลิตตามแบบได้',
    ],
    isFeatured: false,
    isActive: true,
  },
  {
    id: 'e-001',
    code: 'E01',
    name: 'Hotel & Spa Towel Set (คู่)',
    slug: 'hotel-spa-towel-set',

    shortDescription: 'ผ้าขนหนูคู่คุณภาพสูง สำหรับโรงแรมและสถานเสริมความงาม',
    description:
      'ผ้าขนหนูคู่สำหรับโรงแรมและสถานเสริมความงาม ผลิตจากผ้าคอตตอนคุณภาพดี เนื้อผ้านุ่ม ซับน้ำได้ดี เหมาะสำหรับการใช้งานหนักในบริการห้องพัก สปา และฟิตเนส พร้อมให้ความรู้สึกหรูหราและสะอาดอย่างยิ่ง',

    category: PRODUCT_CATEGORIES[0], // Linen / ผ้า
    area: [ProductArea.BATHROOM, ProductArea.SPA],

    thumbnail: IMAGES['e-001'].thumbnail,
    images: IMAGES['e-001'].images, 
    specs: [
      { label: 'Material', value: '100% Cotton / Premium Cotton' },
      { label: 'Size (Large)', value: '70 x 140 cm (ผ้าขนหนูใหญ่)' },
      { label: 'Size (Small)', value: '40 x 70 cm (ผ้าขนหนูเล็ก)' },
      { label: 'Color', value: 'White / สามารถสั่งสีได้' },
      { label: 'Weight', value: '500 – 700 gsm' },
      { label: 'Package', value: 'คู่ (1 Large + 1 Small)' },
    ],

    features: [
      'ผ้านุ่ม ซับน้ำได้ดี',
      'เหมาะสำหรับโรงแรม สปา ฟิตเนส',
      'สีขาวเรียบหรู ทำความสะอาดง่าย',
      'ทนทานต่อการซักบ่อยครั้ง',
    ],

    isFeatured: false,
    isActive: true,
  },
  {
  id: 'f-001',
  code: 'F01',
  name: 'Synthetic Down Bedding Set with Protector',
  slug: 'synthetic-down-bedding-set-with-protector',

  shortDescription:
    'ชุดเครื่องนอนขนห่านเทียม พร้อมผ้ารองกันเปื้อนและไส้นวม เหมาะสำหรับโรงแรมและสปา',

  description:
    'ชุดที่นอนและไส้นวมผลิตจากใยสังเคราะห์คุณภาพสูง (Synthetic Down & Fiberball) พร้อมผ้ารองกันเปื้อน (Protector) ที่ช่วยยืดอายุการใช้งาน ป้องกันคราบและเปื้อน ทำให้ใช้งานได้ยาวนาน ดูแลรักษาง่าย เหมาะสำหรับโรงแรม สปา และที่พักระดับพรีเมียม.',

  category: PRODUCT_CATEGORIES[0], // Linen / Bedding Accessories
  area: [ProductArea.BEDROOM, ProductArea.SPA],
  thumbnail: IMAGES['f-001'].thumbnail,
  images: IMAGES['f-001'].images, 
  specs: [
    { label: 'Filling Type', value: 'Synthetic Down & Fiberball' },
    { label: 'Cover Material', value: '100% Cotton / Premium Fabric' },
    { label: 'Protector', value: 'Water-Resistant Mattress Protector' },
    { label: 'Sizes Available', value: 'Single / Twin / Queen / King' },
    { label: 'Maintenance', value: 'Machine Washable / Easy Care' },
  ],

  features: [
    'ใยสังเคราะห์คุณภาพสูง ให้ความรู้สึกนุ่มเทียบเท่าขนห่าน',
    'ผ้ารองกันเปื้อนยืดอายุการใช้งานที่นอน',
    'เหมาะกับโรงแรม สปา และที่พักบริการ',
    'ดูแลง่าย ซักทำความสะอาดสะดวก',
  ],

  isFeatured: false,
  isActive: true,
}






]
