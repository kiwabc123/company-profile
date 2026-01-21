import { Product } from '../../../interface/product'
import ProductCard from '../ProductCard/ProductCard'

export default function ProductSection({
  title,
  products,
}: {
  title: string
  products: Product[]
}) {
  if (!products.length) return null

  return (
    <section style={{ marginBottom: '3rem' }}>
      <h2>{title}</h2>
      <div className="grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  )
}
