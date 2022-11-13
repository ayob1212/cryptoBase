import React from 'react';
import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerSection}>
                <ul className='hidden'>
                    <li><h3 className={styles.coinbase}>Coinbase</h3></li>
                    <li><p>Coinbase is crypto site project made by AyobYasini 💪.</p></li>
                    <li><p>Website is powered by Coingecko API.</p></li>
                </ul>
                <ul>
                    <li><h2>About</h2></li>
                    <li className={styles.list}>About us</li>
                    <li className={styles.list}>Career</li>
                    <li className={styles.list}>Invest</li>
                    <li className={styles.list}>Contact</li>
                </ul>
                <ul className='hidden'>
                    <li><h2>Explore</h2></li>
                    <li className={styles.list}>Crypto</li>
                    <li className={styles.list}>NFT</li>
                    <li className={styles.list}>Blog</li>
                </ul>
                <div>
                    <form action=''>
                        <h3>Subscribe to our newsletter!</h3>
                        <input className={styles.inputs} type="text" placeholder="Enter your email" />
                        <button className={styles.buttonSubmit} type='submit'>Subscribe</button>
                    </form>
                </div>
            </div>
        </footer>
    );
};

export default Footer;