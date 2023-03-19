import Header from "./components/Header";
import Socials from "./components/Socials";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
// import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter } from 'react-router-dom'

export default function Home(){
    return(
        <div>
            <BrowserRouter>
                <Header />
                <Socials />
                <Welcome />
                <About />
                <Services />
                <Skills />
                <Projects />
                {/* <Team /> */}
                <Contact />
                <Footer />
            </BrowserRouter>
        </div>
    )
}