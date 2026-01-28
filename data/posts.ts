export interface BlogPost {
  slug: string;
  title: string;
  summary: string;
  content: string;
}

export const posts: BlogPost[] = [
  {
    slug: 'hybrid-best-seo-ux',
    title: '🎯 ทำไม Hybrid แบบนี้ “ดีที่สุด”',
    summary: 'SEO, UX, Maintain, Scale, Conversion—all in one hybrid blog layout.',
    content: `
<h2>เรื่อง & ผลลัพธ์</h2>
<table>
  <thead>
    <tr><th>เรื่อง</th><th>ผลลัพธ์</th></tr>
  </thead>
  <tbody>
    <tr><td>SEO</td><td>Google index ทุกบทความ</td></tr>
    <tr><td>UX</td><td>Layout ซ้าย-ขวาเหมือน app</td></tr>
    <tr><td>Maintain</td><td>data ที่เดียว</td></tr>
    <tr><td>Scale</td><td>ต่อ CMS ได้ง่าย</td></tr>
    <tr><td>Conversion</td><td>ใส่ link ขายของแบบเนียน เช่น <a href='/products'>ดูสินค้า</a></td></tr>
  </tbody>
</table>
<p>Hybrid blog layout แบบนี้ช่วยให้ Google index ทุกบทความ (SEO), UX ดีเหมือนแอป, ดูแลข้อมูลง่าย, scale ต่อ CMS ได้ และใส่ลิงก์ขายของแบบไม่ hard sell.</p>
`,
  },
  {
    slug: 'spa-towel-care-tips',
    title: 'How to Care for Spa Towels in Your Hotel',
    summary: 'Extend the life of your spa towels and keep guests happy with these simple care tips.',
    content: `
<p>Proper towel care is essential for guest satisfaction and cost savings. Here are some tips to keep your spa towels soft and long-lasting:</p>
<ul>
  <li>Wash towels separately from other linens.</li>
  <li>Use gentle, eco-friendly detergents.</li>
  <li>Avoid fabric softeners to maintain absorbency.</li>
</ul>
<p>Looking for premium spa towels? <a href='/products'>See our selection</a>—but only if you need to refresh your stock!</p>
`,
  },
  {
    slug: 'eco-friendly-amenities',
    title: 'Eco-Friendly Amenities: A Win for Hotels and Guests',
    summary: 'Explore the benefits of sustainable amenities and how they can enhance your guest experience.',
    content: `
<p>Sustainable amenities are increasingly popular with guests. Consider switching to eco-friendly options for a greener reputation and happier customers.</p>
<p>We offer a range of <a href='/products'>eco-friendly amenities</a>—explore if you’re interested, no pressure!</p>
`,
  },
];
