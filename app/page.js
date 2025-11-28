import styles from './page.module.css';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Projects from '../components/Projects';
import Process from '../components/Process';
import Services from '../components/Services';
import Insights from '../components/Insights';
import GithubSection from '../components/GithubSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Hero />
      <Intro />
      <Projects />
      <Process />
      <Services />
      <Insights />
      <GithubSection />
      <Footer />
    </main>
  );
}
