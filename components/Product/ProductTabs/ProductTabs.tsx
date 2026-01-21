import { useRouter } from 'next/router'
import styles from './ProductTabs.module.css'

type Tab = 'area' | 'category'

export default function ProductTabs() {
  const router = useRouter()
  const tab = (router.query.tab as Tab) || 'area'

  const setTab = (t: Tab) => {
    router.push({
      pathname: '/products',
      query: { ...router.query, tab: t },
    })
  }

  return (
    <div className={styles.tabs}>
      <button
        className={tab === 'area' ? styles.active : ''}
        onClick={() => setTab('area')}
      >
        By Area
      </button>
      <button
        className={tab === 'category' ? styles.active : ''}
        onClick={() => setTab('category')}
      >
        By Category
      </button>
    </div>
  )
}
