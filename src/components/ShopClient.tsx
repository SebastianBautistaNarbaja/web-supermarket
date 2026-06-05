"use client"
import { Product } from "@/types/Product"
import { CartItem } from "@/types/CartItem"
import { useState } from "react";
import ListProducts from "./ListProducts";
import CartProducts from "./CartProducts";
import CategoryFilter  from "./CategoryFilter";


interface Props {
  Arrayproducts: Product[]
}

export default function ShopClient({ Arrayproducts }: Props) {
  const [shoppingCart , setshoppingCart] = useState<Map<number, CartItem>>(new Map());
  const [itemsProducts, setitemsProducts] = useState<Product[]>(Arrayproducts);

  const subTotal = Array.from(shoppingCart.values()).reduce((suma, item) => suma + Number(item.product.price) * item.quantity, 0)
  const vat =  subTotal*0.21;


  const onAddProduct = ( producto : Product ) =>{
    const updatedCart = new Map(shoppingCart);
    const key : number = producto.product_id;
    let item : CartItem | undefined = updatedCart.get(key);
    if(typeof item === "undefined"){
      item = { product : producto, quantity : 0 }
      updatedCart.set(key,item)
    }
    item.quantity++;
    updatedCart.set(key,item);
    setshoppingCart(updatedCart);
  }

  const onRemoveProduct = ( producto : Product ) =>{
    const updatedCart = new Map(shoppingCart);
    const key : number = producto.product_id;
    let item : CartItem | undefined = updatedCart.get(key);
    if(typeof item != "undefined"){
      if(item.quantity === 1){
        updatedCart.delete(key);
      }else{
        item.quantity--;
        updatedCart.set(key,item)
      }
    }
    setshoppingCart(updatedCart);
  }

  const onQuantityChange = (cant : number , product : Product) =>{
    const updatedCart = new Map(shoppingCart);
    const key = product.product_id;
    if(cant > 0 ){
      const item : CartItem= { product : product, quantity : cant }
      updatedCart.set(key,item) 
    } else if(cant === 0){
      updatedCart.delete(key);
    }
    
    setshoppingCart(updatedCart);
  }

  const onfilterByCategory = (category : number)=>{
    if(category === 0) setitemsProducts(Arrayproducts)
    else setitemsProducts(Arrayproducts.filter((product)=>(product.category_id === category)))
  }

  return (
    <div className="ml-10 mr-10 mt-30">
      <CategoryFilter onFilter={onfilterByCategory}/>

      <div className="">
        <ListProducts Arrayproducts={itemsProducts} onAddProduct={onAddProduct} onRemoveProduct={onRemoveProduct} onQuantityChange={onQuantityChange}/>
        <CartProducts CartProducts={Array.from(shoppingCart.values())}/>
        
        <div>
          <h3>SUBTOTAL : {subTotal.toFixed(2)}</h3>
          <h3>IVA : { vat.toFixed(2) }</h3>
          <h3>TOTAL : {(subTotal+vat).toFixed(2)}</h3>
        </div>

      </div>
    </div>
  );
}



