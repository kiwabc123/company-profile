import { useRouter } from 'next/router'
import ProductTabs from '../../components/Product/ProductTabs/ProductTabs'
import ProductSection from '../../components/Product/ProductSection'
import { groupByArea } from '../../utils/groupByArea'
import { groupByCategory } from '../../utils/groupByCategory'
import {  PRODUCTS } from '../../data/products/products'

export default function ProductsPage() {
  const router = useRouter()
  const tab = (router.query.tab as 'area' | 'category') || 'area'
    const products = PRODUCTS
    //remove key thumbnail ,images
    const productsForExcel = PRODUCTS.map(product => ({
      ...product,
      keySpecs: product.specs
        ?.map(spec => `${spec.label}: ${spec.value}`)
        .join(" | ")
    }))
    console.log("PRODUCTS",productsForExcel.map(({ thumbnail, images, specs, ...rest }) => rest));
     
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Products</h1>

      {/* search ใส่เพิ่มทีหลังได้ */}
      <ProductTabs />

      {tab === 'area' && (
        <>
          {Object.entries(groupByArea(products)).map(([area, items]) => (
            <ProductSection
              key={area}
              title={area.replace('_', ' ')}
              products={items}
            />
          ))}
        </>
      )}

      {tab === 'category' && (
        <>
          {Object.entries(groupByCategory(products)).map(([_, items]) => (
            <ProductSection
              key={items[0].category.id}
              title={items[0].category.name}
              products={items}
            />
          ))}
        </>
      )}
    </div>
  )
}
