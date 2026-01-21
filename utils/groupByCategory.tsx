import { Product } from '../interface/product'
export function groupByCategory(products: Product[]) {
  return products.reduce<Record<string, Product[]>>((acc, product) => {
    const categoryId = product.category.id

    if (!acc[categoryId]) {
      acc[categoryId] = []
    }

    acc[categoryId].push(product)

    return acc
  }, {})
}
