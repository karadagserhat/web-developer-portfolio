import About from './components/About';
import BackToTopBtn from './components/BackToTopBtn';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import SkillsContainer from './components/SkillsContainer';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <SkillsContainer />
      <Portfolio />
      <Footer />
      <BackToTopBtn />
    </div>
  );
};

export default App;
