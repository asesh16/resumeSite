import Navbar from './components/layout/Navbar';
import Container from './components/layout/Container';
import Header from './components/resume/Header';
import Highlights from './components/resume/Highlights';
import Experience from './components/resume/Experience';
import Projects from './components/resume/Projects';
import Education from './components/resume/Education';
import Skills from './components/resume/Skills';
import SheTech from './components/resume/SheTech';
import BeyondWork from './components/resume/BeyondWork';

function App() {
    return (
        <div className="page-bg">
            <Navbar />
            <main>
                <Container>
                    <Header />
                    <Highlights />
                    <Experience />
                    <Projects />
                    <Education />
                    <Skills />
                    <SheTech />
                    <BeyondWork />
                </Container>
            </main>
        </div>
    );
}

export default App;
