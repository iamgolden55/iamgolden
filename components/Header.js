'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    Interlinea
                </Link>

                {/* Desktop Navigation */}
                <nav className={styles.nav}>
                    <Link href="/" className={styles.link}>Home</Link>
                    <Link href="/about" className={styles.link}>About</Link>
                    <Link href="/projects" className={styles.link}>Projects</Link>
                    <Link href="/blog" className={styles.link}>Blog</Link>
                    <Link href="/contact" className={styles.link}>Contact</Link>
                </nav>

                <button className={styles.cta}>Start your journey</button>

                {/* Mobile Hamburger */}
                <button 
                    className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`} 
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </button>
            </div>

            {/* Mobile Navigation Overlay */}
            <div className={`${styles.mobileNav} ${isMenuOpen ? styles.open : ''}`}>
                <nav className={styles.mobileLinks}>
                    <Link href="/" className={styles.mobileLink} onClick={toggleMenu}>Home</Link>
                    <Link href="/about" className={styles.mobileLink} onClick={toggleMenu}>About</Link>
                    <Link href="/projects" className={styles.mobileLink} onClick={toggleMenu}>Projects</Link>
                    <Link href="/blog" className={styles.mobileLink} onClick={toggleMenu}>Blog</Link>
                    <Link href="/contact" className={styles.mobileLink} onClick={toggleMenu}>Contact</Link>
                </nav>
            </div>
        </header>
    );
}
