import { getProducts } from "@/services/productService"
import ShopClient from "@/components/ShopClient"

export default async function Home() {
  const Arrayproducts = await getProducts()

  return (
    <main>
      <ShopClient Arrayproducts={Arrayproducts}/>
    </main>
  )
}