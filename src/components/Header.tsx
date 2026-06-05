"use client"
import { useEffect, useState } from "react";
import styles from "@/styles/Header.module.css"

export default function Header(){
    const [scrolled, setScrolled] = useState(false);

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
                <img src="/images/logo.png" alt="logo" className={styles.banner__img}/>
                <h1 className={styles.banner__title}>MERCABROMA</h1>   
            </div>
    
            <div className={styles.cont}>
                <form action="" className={styles.search}>
                    <img src="/images/searchIcon.png" alt="" className={styles.search__img}/>
                    <input type="text" className={styles.search__input}/>
                </form>
            </div>
        </header>
    )
}