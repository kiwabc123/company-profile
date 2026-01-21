import Link from 'next/link'
import styles from './ProductCard.module.css'
import { Product } from '../../../interface/product'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`}>
      <a className={styles.card}>
        <div className={styles.imageWrapper}>
          <img
            src={product.thumbnail}
            alt={product.name}
            loading="lazy"
          />
        </div>

        <div className={styles.content}>
          <h3 className={styles.title}>{product.name}</h3>
          <p className={styles.desc}>{product.shortDescription}</p>

          <div className={styles.meta}>
            {product.area.map((a) => (
              <span key={a} className={styles.badge}>
                {a.replace('_', ' ')}
              </span>
            ))}
          </div>
        </div>
      </a>
    </Link>
  )
}
