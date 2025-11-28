import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <h1 className={styles.headline}>
                    We build digital identities that resonate with people
                </h1>
                <div className={styles.actions}>
                    <button className={styles.cta}>Start your journey</button>
                </div>
            </div>
        </section>
    );
}
