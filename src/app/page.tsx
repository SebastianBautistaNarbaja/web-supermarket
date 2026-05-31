import { getProducts } from "@/services/productService"
import ShopClient from "@/components/ShopClient"


export default async function Home() {
  const Arrayproducts = await getProducts()

  return (
    <main>
      {/* <h1 className="text-3xl font-bold text-center mb-10">TIENDA</h1> */}
      <ShopClient Arrayproducts={Arrayproducts}/>
    </main>
  )
}