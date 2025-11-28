import styles from './Process.module.css';

export default function Process() {
    return (
        <section className={styles.process}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.label}>PROCESS</span>
                    <div className={styles.line}></div>
                    <span className={styles.number}>03</span>
                </div>
                <h2 className={styles.headline}>
                    We guide every project through a process rooted in clarity and care
                </h2>
                <p className={styles.subtext}>
                    From our first conversation to the final handoff, our roadmap ensures consistent progress and alignment at every turn.
                </p>
            </div>
        </section>
    );
}
