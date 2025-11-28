import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <h3>Interlinea</h3>
                        <p>We build digital identities that resonate with people.</p>
                    </div>
                    <div className={styles.links}>
                        <div className={styles.column}>
                            <h4>Sitemap</h4>
                            <Link href="/">Home</Link>
                            <Link href="#about">About</Link>
                            <Link href="#projects">Projects</Link>
                            <Link href="#blog">Blog</Link>
                        </div>
                        <div className={styles.column}>
                            <h4>Socials</h4>
                            <a href="#">Twitter</a>
                            <a href="#">Instagram</a>
                            <a href="#">LinkedIn</a>
                            <a href="#">Behance</a>
                        </div>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} Interlinea. All rights reserved.</p>
                    <div className={styles.legal}>
                        <Link href="#">Privacy Policy</Link>
                        <Link href="#">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
