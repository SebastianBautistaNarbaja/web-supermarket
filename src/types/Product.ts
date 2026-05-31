export interface Product {
  product_id: number
  name: string
  description: string | null
  price: number
  stock: number
  active: boolean | null
  category_id: number | null
  category: { category_id: number, name: string } | null
}