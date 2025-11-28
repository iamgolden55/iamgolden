import styles from './Projects.module.css';

export default function Projects() {
    const projects = [
        {
            id: 1,
            title: 'Pestorix',
            year: '2024',
            image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2700&auto=format&fit=crop',
        },
        {
            id: 2,
            title: 'Danzora',
            year: '2024',
            image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop',
        },
        {
            id: 3,
            title: 'Oldsalt',
            year: '2024',
            image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=2000&auto=format&fit=crop',
        },
        {
            id: 4,
            title: 'Life Coach',
            year: '2024',
            image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000&auto=format&fit=crop',
        },
    ];

    return (
        <section id="projects" className={styles.projects}>
            <div className={styles.container}>
                <h2 className={styles.headline}>Work that quietly speaks for itself</h2>
                <div className={styles.grid}>
                    {projects.map((project) => (
                        <div key={project.id} className={styles.card}>
                            <div
                                className={styles.image}
                                style={{ backgroundImage: `url(${project.image})` }}
                            ></div>
                            <div className={styles.overlay}>
                                <h3 className={styles.title}>{project.title}</h3>
                                <span className={styles.year}>{project.year}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
