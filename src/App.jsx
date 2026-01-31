import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
    return (
        <div className="app">
            <Navbar />
            <main>
                <Hero />
                <Skills />
                <Projects />
                <Certifications />
                <Education />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
