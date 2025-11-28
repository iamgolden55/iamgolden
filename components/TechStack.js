import styles from './TechStack.module.css';

export default function TechStack() {
    const stack = ['Next.js', 'React', 'Node.js', 'TypeScript', 'Figma', 'PostgreSQL', 'Tailwind', 'Framer Motion'];

    return (
        <section className={styles.stack}>
            <div className={styles.container}>
                <h2 className={styles.headline}>Technologies</h2>
                <div className={styles.grid}>
                    {stack.map((tech, index) => (
                        <div key={index} className={styles.item}>
                            {tech}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
