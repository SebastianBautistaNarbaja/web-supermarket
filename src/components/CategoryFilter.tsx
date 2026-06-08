import styles from "@/styles/CategoryFilter.module.css"
import { useRef, useState } from "react"

interface Props{
    onFilter : (category : number) => void
}


export default function CategoryFilter({onFilter} : Props){
    const listRef = useRef<HTMLUListElement|null>(null);
    const [focusLi,setFocusLi] = useState<number>(0);

    const valueLi = ( value : number) =>{
        setFocusLi(value);
    }

    const arrowLeft = () =>{
        if (listRef.current) {
            listRef.current.scrollBy({
                left : -160,
                behavior: "smooth"
            })
        }
    }

    const arrowRight = () =>{
        if (listRef.current) {
            listRef.current.scrollBy({
                left : 160,
                behavior: "smooth"
            })
        }
    }

    return(
        <div className={styles.cont}>
            <button onClick={arrowLeft} className={styles.button}>
                <img src="/images/arrow.png" className="rotate-180"/>
            </button>
            <ul className={styles.lista} ref={listRef}>
                <li onClick={()=>{ onFilter(1), valueLi(1)}} className={`${focusLi === 1 ? styles.focusLi : ""}`}>
                    <img src="/images/icon-fruits.png" />               
                </li>
                <li onClick={()=>{ onFilter(2), valueLi(2)}} className={`${focusLi === 2 ? styles.focusLi : ""}`}>
                    <img src="/images/icon-HomeAppliances.png" />           
                </li>
                <li onClick={()=>{ onFilter(3), valueLi(3)}} className={`${focusLi === 3 ? styles.focusLi : ""}`}>
                    <img src="/images/icon-personalCare.png" />           
                </li>
                <li onClick={()=>{ onFilter(4), valueLi(4)}} className={`${focusLi === 4 ? styles.focusLi : ""}`}>
                    <img src="/images/icon-pet.png" />           
                </li>
            </ul>
            <button onClick={arrowRight} className={styles.button}>
                <img src="/images/arrow.png"/>
            </button>
        </div>
    )
}