import Header from '../../components/Header';
import Insights from '../../components/Insights';
import Footer from '../../components/Footer';
import styles from '../page.module.css';

export default function Blog() {
    return (
        <main className={styles.main}>
            <Header />
            <div style={{ paddingTop: '100px' }}>
                <Insights />
            </div>
            <Footer />
        </main>
    );
}
