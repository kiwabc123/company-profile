import { useRouter } from 'next/router'
import { PRODUCTS } from '../../data/products/products'
import styles from '../../styles/ProductDetail.module.css'
import { useState } from 'react'

export default function ProductDetailPage() {
  const router = useRouter()
  const { slug } = router.query
  const product = PRODUCTS.find((p) => p.slug === slug)
  const [mainImg, setMainImg] = useState(product?.images?.[0] || product?.thumbnail)

  if (!product) return <div>Product not found</div>

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{product.name}</h1>
      <div className={styles.gallery}>
        <img
          className={styles.mainImg}
          src={typeof mainImg === 'string' ? mainImg : mainImg?.url}
          alt={product.name}
          loading="lazy"
          width={300}
          height={200}
        />
        {product.images && product.images.length > 1 && (
          <div
            className={styles.thumbnails}
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: 12,
              overflowX: 'auto',
              paddingBottom: 4,
              marginTop: 12,
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'thin',
              maxWidth: '100%',
              boxSizing: 'border-box',
              minWidth: 0,
            }}
          >
            {product.images.map((img) => (
              <img
                key={img}
                src={img}
                alt={product.name}
                loading="lazy"
                width={60}
                height={60}
                className={img === mainImg ? styles.activeThumb : styles.thumb}
                onClick={() => setMainImg(img)}
                style={{ flex: '0 0 auto', cursor: 'pointer' }}
              />
            ))}
          </div>
        )}
      </div>
      <div className={styles.info}>
        <p className={styles.shortDesc}>{product.shortDescription}</p>
        <p className={styles.desc}>{product.description}</p>
        {product.specs && (
          <ul className={styles.specs}>
            {product.specs.map((spec) => (
              <li key={spec.label}>
                <strong>{spec.label}:</strong> {spec.value}
              </li>
            ))}
          </ul>
        )}
        {product.features && (
          <ul className={styles.features}>
            {product.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
