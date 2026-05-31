"use client"
import { Product } from "@/types/Product";
import { useState } from "react";

interface Props{
    product : Product
    onAddProduct : (product : Product) => void
    onRemoveProduct : (product : Product) => void
    onQuantityChange : (num : number, product : Product) => void
}


export default function CartItemControls({product,onAddProduct,onRemoveProduct,onQuantityChange}: Props){ 
    const [quantity, setQuantity] = useState(0);
    const [tempQuantity, setTempQuantity] = useState<number | "">(0);

    if(quantity > 0 ){
        return(
            <div className="flex">
                <button className="border py-1 px-3 rounded-lg mx-3" 
                onClick={() => {
                    const value = quantity + 1;
                    setQuantity(value);
                    setTempQuantity(value);
                    onAddProduct(product);
                }}>
                +
                </button>
                <input className="w-15" type="number" value={tempQuantity} 
                
                onKeyDown={(event) => {   
                    if (["-", "+", "e", "E", ".", ",", "Add", "Subtract"].includes(event.key)){
                        event.preventDefault();
                    }

                    if (event.key === "Enter" && event.currentTarget.value !== "") {
                        const value = Number(event.currentTarget.value);
                        if (!isNaN(value)){
                            setQuantity(value);
                            setTempQuantity(value);
                            onQuantityChange(value, product);
                        }
                    }
                }}

                onBlur={(event) => {          
                    const value = Number(event.target.value);
                    if(tempQuantity === ""){
                        setTempQuantity(quantity)
                    }else {
                        setQuantity(value);
                        onQuantityChange(value, product);
                    } 
                }}

                onChange={(event) => {
                    const value = event.target.value;
                    setTempQuantity(value === "" ? "" : Number(value));
                }}

                onFocus={() => setTempQuantity("")}

                onPaste={(event) => {
                    event.preventDefault();
                }}

                onWheel={(event) => {
                    event.currentTarget.blur();
                }}
                />
                <button className="border py-1 px-3 rounded-lg mx-3" 
                onClick={() => {
                    const value = quantity - 1;
                    setQuantity(value);
                    setTempQuantity(value); 
                    onRemoveProduct(product);
                }}>
                -
                </button>
            </div>
        )
    } else {
        return(
            <div>
                <button className="border py-1 px-3 rounded-lg mx-3" 
                onClick={() => {
                    setQuantity(1);
                    setTempQuantity(1)
                    onAddProduct(product);
                }}>
                Añadir
                </button>
            </div>
        )
    }
}