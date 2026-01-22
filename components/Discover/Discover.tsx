import styles from './Discover.module.css'

type DiscoverItem = {
  id: number
  title: string
  image: string
  href: string
}

interface Props {
  items: DiscoverItem[]
}

export default function Discover({ items }: Props) {
  return (
   <section className={styles.discover}>
  <header className={styles.discoverHeader}>
    <h2>Discover Our Solutions</h2>
    <p>Designed for every area of your hotel</p>
  </header>

  <div className={styles.discoverGrid}>
    {items.map(item => (
      <a key={item.id} href={item.href} className={styles.discoverCard}>
        <img src={item.image} alt={item.title} loading="lazy" width={200} height={120} />
        <div className={styles.discoverOverlay}>
          <h3>{item.title}</h3>
          <span>Explore 2</span>
        </div>
      </a>
    ))}
  </div>
</section>

  )
}
