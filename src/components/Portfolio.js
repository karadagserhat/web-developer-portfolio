import Projects from './Projects';

const Portfolio = () => {
  return (
    <section id="projects" className="section bg-primary ">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title">My projects</h2>
          <p className="mb-6 text-base">Check out my projects</p>
        </div>
        <Projects />
      </div>
    </section>
  );
};
export default Portfolio;
