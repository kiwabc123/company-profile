import React, { useState } from 'react';
import Link from 'next/link';
import styles from './ProductCard.module.css';
import { Product } from '../../../interface/product';

export default function ProductCard({ product }: { product: Product }) {
  const [mainImg, setMainImg] = useState(product.images && product.images.length > 0 ? product.images[0] : product.thumbnail);

  return (
    <Link href={`/products/${product.slug}`} passHref legacyBehavior>
      <a className={styles.card}>
        <div className={styles.imageWrapper}>
          <img
            src={typeof mainImg === 'string' ? mainImg : mainImg?.url}
            alt={product.name}
            loading="lazy"
            onError={e => {
              (e.target as HTMLImageElement).style.display = 'none';
              const block = document.createElement('div');
              block.className = styles.imagePlaceholder;
              block.innerText = product.name.charAt(0).toUpperCase();
              block.style.width = '100%';
              block.style.height = '100%';
              block.style.display = 'flex';
              block.style.alignItems = 'center';
              block.style.justifyContent = 'center';
              block.style.background = '#eaeaea';
              block.style.fontSize = '2.5rem';
              block.style.fontWeight = 'bold';
              block.style.color = '#bbb';
              (e.target as HTMLImageElement).parentElement?.appendChild(block);
            }}
          />
        </div>
        {product.images && product.images.length > 1 && (
          <div className={styles.thumbnails}>
            {product.images.map((img, idx) => (
              <button
                type="button"
                key={img}
                className={mainImg === img ? styles.thumbnailActive : styles.thumbnail}
                onClick={e => {
                  e.preventDefault();
                  console.log(img);
                  
                  setMainImg(img);
                }}
                aria-label={`Show image ${idx + 1}`}
              > 
                <img src={img} alt={product.name + ' thumbnail'} />
              </button>
            ))}
          </div>
        )}
        <div className={styles.content}>
          <h3 className={styles.title}>{product.name}</h3>
          <p className={styles.desc}>{product.shortDescription}</p>
          <div className={styles.meta}>
            <span className={styles.cateBadge}>{product.category?.name}</span>
            {product.area.map((a) => (
              <span key={a} className={styles.areaBadge}>
                {a.replace('_', ' ')}
              </span>
            ))}
          </div>
        </div>
      </a>
    </Link>
  );
}
