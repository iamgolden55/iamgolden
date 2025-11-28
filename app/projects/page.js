import Header from '../../components/Header';
import ProjectsHero from '../../components/ProjectsHero';
import Projects from '../../components/Projects';
import Footer from '../../components/Footer';
import styles from '../page.module.css'; // Reusing main page styles for container if needed

export default function ProjectsPage() {
    return (
        <main>
            <Header />
            <ProjectsHero />
            <Projects />
            <Footer />
        </main>
    );
}
