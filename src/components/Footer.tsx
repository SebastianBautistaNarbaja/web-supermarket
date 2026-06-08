import styles from "@/styles/Footer.module.css"

export default function Footer(){

    return(
        <>
        
        <footer className={styles.footer}>
            <img src="/images/logoFooter.avif" alt="logo" className={styles.imgFooter} />
            <div className={styles.contLis}>
                <div>
                    <h3>Compañia</h3>
                    <h4>Nosotros</h4>
                    <h4>Nuestos Servicios</h4>
                    <h4>Politica de Privacidad</h4>
                </div>
                <div>
                    <h3>Ayuda</h3>
                    <h4>Preguntas</h4>
                    <h4>Compras</h4>
                    <h4>Envios</h4>
                    <h4>Pago</h4>
                </div>
                <div>
                    <h3>Siguenos</h3>
                    <ul className={styles.listImg}>
                        <li><img src="/images/instagram.png" alt="" /></li>
                        <li><img src="/images/facebook.png" alt="" /></li>
                        <li>
                            <a href="https://www.linkedin.com/in/sebastian-johannes-bautista/" target="blank">
                            <img src="/images/linkedin.png" alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            

            <div className={styles.cont}>
                <img src="/images/icon-Copy.png" alt="logo" className={styles.img} />
                <h1>Copyright</h1> 
            </div>
        </footer>
        </>
    )
}