import React from 'react';
import styles from '../layout/Footer.module.css'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
function Footer(){
    return(
        <footer className={styles.footer}>
                <ul className={styles.lista}>
                    <li className={styles.item}>
                        <FaFacebook />
                    </li>
                    <li className={styles.item}>
                        < FaInstagram />
                    </li>
                    <li className={styles.item}>
                        <FaLinkedin />
                    </li>

                </ul>
                <p>Gerenciador Eureka <span>&copy;</span></p>
        </footer>
    )
}
export default Footer;