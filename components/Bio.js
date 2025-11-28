import styles from './Bio.module.css';

export default function Bio() {
    return (
        <section className={styles.bio}>
            <div className={styles.container}>
                <div className={styles.imageWrapper}>
                    <div className={styles.image} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000&auto=format&fit=crop)' }}></div>
                </div>
                <div className={styles.content}>
                    <h2 className={styles.title}>Who we are</h2>
                    <p className={styles.text}>
                        We are a digital design studio crafting experiences that merge art, technology, and strategy. Our approach is rooted in clarity and intention, stripping away the unnecessary to reveal the essential.
                    </p>
                    <p className={styles.text}>
                        Founded on the belief that good design is invisible, we work with brands to create digital products that feel natural, intuitive, and human.
                    </p>
                </div>
            </div>
        </section>
    );
}
