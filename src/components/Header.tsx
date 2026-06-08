"use client"
import { useEffect, useState } from "react";
import styles from "@/styles/Header.module.css"

interface Props{
    onFilterByName : (name : string) => void
}

export default function Header({onFilterByName} : Props ){
    const [scrolled, setScrolled] = useState(false);
    const [nameFilter,setNameFilter] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); 
    };

    useEffect(() => {
        const handleScroll = () => {
            const y = window.scrollY;

            if (!scrolled && y > 220) {
                setScrolled(true);
            } else if (!scrolled && y < 2) {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return(
        <header className={`${styles.header} ${scrolled ? styles.scroll : ""}`}>
            <div className={styles.banner}>
                <img src="/images/logo.png" alt="logo" className={styles.banner__img} />
                <h1 className={styles.banner__title}>MERCABROMA</h1>   
            </div>
    
            <div className={styles.cont}>
                <form className={styles.search} onSubmit={handleSubmit}>
                    <img src="/images/searchIcon.png" alt="" className={styles.search__img} onClick={()=>onFilterByName(nameFilter)}/>
                    <input type="text" className={styles.search__input} 
                    
                    onKeyDown={(event) => {   
                        const allowedKeys = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab", " "];

                        if (!/^[a-zA-Z]$/.test(event.key) && !allowedKeys.includes(event.key)) {
                            event.preventDefault();
                        }

                        if (event.key === "Enter") {
                            const value = event.currentTarget.value;
                            setNameFilter(value);
                            onFilterByName(value);
                        }
                        
                    }}

                    onPaste={(event) => {
                        event.preventDefault();
                    }}

                    onChange={(event) => {
                        const value = event.target.value;
                        setNameFilter(value);
                    }}
                    />
                </form>
            </div>
           
        </header>
    )
}