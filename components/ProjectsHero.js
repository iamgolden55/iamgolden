import styles from './ProjectsHero.module.css';

export default function ProjectsHero() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <h1 className={styles.headline}>
                    Discover how design becomes digital work
                </h1>
            </div>
        </section>
    );
}
