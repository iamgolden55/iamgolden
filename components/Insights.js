import styles from './Insights.module.css';

export default function Insights() {
    const articles = [
        {
            id: 1,
            date: 'Apr 23, 2025',
            title: 'Why Process Matters More Than Platforms',
            image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop',
        },
        {
            id: 2,
            date: 'Mar 23, 2025',
            title: 'The Value of Saying Less in Digital Design',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000&auto=format&fit=crop',
        },
        {
            id: 3,
            date: 'Nov 30, 2024',
            title: 'Why Clarity is the Foundation of Great Digital Design',
            image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop',
        },
    ];

    return (
        <section className={styles.insights}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.headline}>Insights from our studio</h2>
                    <p className={styles.subtext}>
                        We share ideas and stories that reflect our way of building digital work.
                    </p>
                </div>
                <div className={styles.grid}>
                    {articles.map((article) => (
                        <div key={article.id} className={styles.card}>
                            <div
                                className={styles.image}
                                style={{ backgroundImage: `url(${article.image})` }}
                            ></div>
                            <div className={styles.content}>
                                <span className={styles.date}>{article.date}</span>
                                <h3 className={styles.title}>{article.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
