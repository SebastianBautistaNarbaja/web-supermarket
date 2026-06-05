import { Product } from "@/types/Product"
import CartItemControls from "@/components/CartItemControls"
import styles from "@/styles/ListProducts.module.css"

interface Props {
  Arrayproducts: Product[]
  onAddProduct : (product : Product) => void
  onRemoveProduct : (product : Product) => void
  onQuantityChange : (num : number, product : Product) => void
}

export default function ListProducts({ Arrayproducts, onAddProduct, onRemoveProduct,onQuantityChange} : Props) {
    return(
        <ul className={styles.list}>{
            Arrayproducts.map((product) =>(
            <li key={product.product_id} className={styles.item}>   
                <h2> { product.name }</h2> 
                <img src="/images/genericProductIcon.png" alt="" className={styles.search__img}/>
                <h3>{ Number(product.price).toFixed(2) }  €</h3>
                <CartItemControls product={product} onAddProduct={onAddProduct} onRemoveProduct={onRemoveProduct} onQuantityChange={onQuantityChange}/>
            </li>
            ))
            }
        </ul>
    )
}

