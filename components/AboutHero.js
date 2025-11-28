import styles from './AboutHero.module.css';

export default function AboutHero() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <h1 className={styles.headline}>
                    We build digital products that matter.
                </h1>
            </div>
        </section>
    );
}
