
import { Product } from '../../../interface/product'
import ProductCard from '../ProductCard/ProductCard'
import styles from './ProductSection.module.css';

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
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.productGrid}>
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  )
}
