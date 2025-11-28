import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from './page.module.css';

export default function Contact() {
    return (
        <main>
            <Header />
            <section className={styles.contact}>
                <div className={styles.container}>
                    <h1 className={styles.headline}>Let's start a project together</h1>
                    <div className={styles.links}>
                        <a href="mailto:hello@interlinea.com" className={styles.email}>hello@interlinea.com</a>
                        <div className={styles.social}>
                            <a href="https://x.com/EruwaGreat" target="_blank" rel="noopener noreferrer">Twitter / X</a>
                            <a href="https://www.instagram.com/iamgolden55/" target="_blank" rel="noopener noreferrer">Instagram</a>
                            <a href="https://www.linkedin.com/in/ninioritse-eruwa-181537195" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
