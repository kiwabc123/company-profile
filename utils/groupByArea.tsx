import { Product, ProductArea } from '../interface/product'
export function groupByArea(products: Product[]) {
  const map: Record<ProductArea, Product[]> = {
    GUEST_ROOM: [],
    BATHROOM: [],
    LOBBY: [],
    RESTAURANT: [],
    HOUSEKEEPING: [],
  }

  products.forEach((p) => {
    if (!p.isActive) return
    p.area.forEach((a) => {
      map[a].push(p)
    })
  })

  return map
}
