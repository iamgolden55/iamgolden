import styles from './Intro.module.css';

export default function Intro() {
    return (
        <section className={styles.intro}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.headline}>
                        We create thoughtful digital work, built on dialogue and precision.
                    </h2>
                    <p className={styles.subtext}>
                        We are a design-driven studio that builds with purpose and care. Every detail matters, and every project begins with connection.
                    </p>
                </div>
                <div className={styles.testimonial}>
                    <div className={styles.image}></div>
                    <div className={styles.quote}>
                        <div className={styles.stars}>★★★★★</div>
                        <p>
                            "Working with them was like having a creative partner, not just a service provider. Thoughtful, precise, human."
                        </p>
                        <span className={styles.author}>Mark Jansen</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
