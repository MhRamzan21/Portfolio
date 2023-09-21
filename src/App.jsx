import Header from "./components/Header";
import About from "./scenes/About";
import ContactMe from "./scenes/ContactMe";
import Hero from "./scenes/Hero";
import Projects from "./scenes/Projects";
import Skills from "./scenes/Skills";
import WorkExperience from "./scenes/WorkExperience";
import ProfileImage from "./assets/ProfileImage.jpg"

export default function App() {
  return (
    <>
      <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20">
        <Header />
        <section id="hero" className="snap-start">
          <Hero />
        </section>
        <section id="about" className="snap-center">
          <About />
        </section>
        <section id="experience" className="snap-center">
          <WorkExperience />
        </section>
        <section id="skills" className="snap-start">
          <Skills />
        </section>
        <section id="projects" className="snap-start">
          <Projects />
        </section>
        <section id="contact" className="snap-start">
          <ContactMe />
        </section>
        <a href='#hero'>
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex ic justify-center">
            <img className="object-cover h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer" src={ProfileImage} alt="" />
          </div>
        </footer>
      </a>
      </div>
    </>
  );
}
