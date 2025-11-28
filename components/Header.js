import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    Interlinea
                </Link>
                <nav className={styles.nav}>
                    <a href="/" className={styles.link}>Home</a>
                    <a href="/about" className={styles.link}>About</a>
                    <a href="/projects" className={styles.link}>Projects</a>
                    <a href="/blog" className={styles.link}>Blog</a>
                    <a href="/contact" className={styles.link}>Contact</a>
                </nav>
                <button className={styles.cta}>Start your journey</button>
            </div>
        </header>
    );
}
