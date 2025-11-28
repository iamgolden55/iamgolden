import Header from '../../components/Header';
import AboutHero from '../../components/AboutHero';
import Bio from '../../components/Bio';
import Values from '../../components/Values';
import TechStack from '../../components/TechStack';
import Process from '../../components/Process';
import Footer from '../../components/Footer';
import styles from '../page.module.css';

export default function About() {
    return (
        <main className={styles.main}>
            <Header />
            <AboutHero />
            <Bio />
            <Values />
            <TechStack />
            <Process />
            <Footer />
        </main>
    );
}
