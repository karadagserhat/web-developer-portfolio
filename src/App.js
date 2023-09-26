import About from './components/About';
import BackToTopBtn from './components/BackToTopBtn';
import Brands from './components/Brands';
import Contact from './components/Contact';
import Experience from './components/SkillsContainer';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import SkillsContainer from './components/SkillsContainer';
import Testimonials from './components/Testimonials';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      {/* <Brands /> */}
      {/* <Skills /> */}
      <About />
      {/* <Skills /> */}
      <SkillsContainer />
      <Portfolio />
      {/* <Services /> */}
      {/* <Testimonials /> */}
      {/* <Contact /> */}
      <Footer />
      <BackToTopBtn />
    </div>
  );
};

export default App;
