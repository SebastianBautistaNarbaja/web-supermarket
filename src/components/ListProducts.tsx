import { Product } from "@/types/Product"
import CartItemControls from "@/components/CartItemControls"

interface Props {
  Arrayproducts: Product[]
  onAddProduct : (product : Product) => void
  onRemoveProduct : (product : Product) => void
  onQuantityChange : (num : number, product : Product) => void
}

export default function ListProducts({ Arrayproducts, onAddProduct, onRemoveProduct,onQuantityChange} : Props) {
    return(
    <main>
        <div>
            <ul className="flex flex-wrap">{
                Arrayproducts.map((product) =>(
                <li key={product.product_id} className="border rounded-lg p-4 w-1/1 text-center w-70">   
                    <h3> nombre : { product.name } ({product.product_id})</h3> 
                    <h2> precio : { Number(product.price)} </h2>
                    <h2> categoria : { product.category?.name} </h2>
                    <CartItemControls product={product} onAddProduct={onAddProduct} onRemoveProduct={onRemoveProduct} onQuantityChange={onQuantityChange}/>
                </li>
                ))
                }
            </ul>
        </div>
    </main>
    )
}

