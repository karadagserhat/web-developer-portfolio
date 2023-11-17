import banner from '../assets/img/banner.svg';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section
      id="home"
      className="lg:h-[100vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden "
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          {/* left side */}
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <p className="text-lg text-accent mb-[22px] ">
              Hello, I'm <span className="font-semibold">Serhat Karadağ</span>
            </p>
            <h1 className="text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]">
              Web Developer
            </h1>
            <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left">
              I am looking for a new job in the software industry with
              experience in{' '}
              <strong> JavaScript, React, Next.js and Node.js</strong> looking
              for opportunities to develop dynamic and secure applications
            </p>
            <Link
              to="projects"
              smooth
              duration={500}
              className="btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all cursor-pointer text-base tracking-wide"
            >
              My Projects
            </Link>
          </div>
          {/* right side */}
          <div className="hidden lg:flex flex-1 justify-end items-end h-full">
            <img src={banner} alt="web banner" className="my-[11rem]" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
