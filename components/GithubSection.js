import styles from './GithubSection.module.css';

export default function GithubSection() {
    return (
        <section className={styles.github}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.headline}>Open Source</h2>
                    <p className={styles.subtext}>
                        Explore my latest experiments, tools, and contributions to the open source community.
                    </p>
                    <a
                        href="https://github.com/iamgolden55"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.button}
                    >
                        Visit GitHub Profile
                        <span className={styles.arrow}>→</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
