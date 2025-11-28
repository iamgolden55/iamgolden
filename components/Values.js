import styles from './Values.module.css';

export default function Values() {
    const values = [
        {
            title: 'Clarity',
            description: 'We believe in the power of simplicity. Every pixel and line of code serves a purpose.'
        },
        {
            title: 'Precision',
            description: 'Attention to detail is what separates good from great. We obsess over the small things.'
        },
        {
            title: 'Human',
            description: 'Technology should serve people, not the other way around. We design for real human needs.'
        }
    ];

    return (
        <section className={styles.values}>
            <div className={styles.container}>
                <h2 className={styles.headline}>Our Philosophy</h2>
                <div className={styles.grid}>
                    {values.map((value, index) => (
                        <div key={index} className={styles.card}>
                            <h3 className={styles.title}>{value.title}</h3>
                            <p className={styles.description}>{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
