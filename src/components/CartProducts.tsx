import { CartItem } from "@/types/CartItem"

interface Props {
    CartProducts : CartItem[]
}

export default function CartProducts({CartProducts} : Props){
    return(
        <main>
            <ul className="mt-10">
                {
                    CartProducts.map((product) => (
                        <li key={product.product.product_id} className="border rounded-lg p-4 w-1/1 text-center w-70">
                            <h2>{product.product.name}</h2>
                            <h2>cantidad : {product.quantity}</h2>
                        </li>
                    ))
                }
            </ul>
        </main>
    )
}


