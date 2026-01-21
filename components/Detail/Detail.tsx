import styles from './Detail.module.css'

export default function Detail() {
  return (
    <div className={styles.detail}>
      <div className={styles.detailText}>
        About Our Company
      </div>
      <div className={styles.detailSubtext}>
        We are dedicated to delivering innovative solutions and exceptional service to our customers. Our team combines expertise and passion to help businesses grow and succeed in a rapidly changing world.
      </div>
      <a href="/about" className={styles.detailReadmore}>
        Read more
      </a>
    </div>
  );
}