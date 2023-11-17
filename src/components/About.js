// import Image from '../assets/img/about.webp';
import Image from '../assets/about.svg';

const About = () => {
  return (
    <section id="about" className="section bg-secondary ">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img
            className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
            src={Image}
            alt=""
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2
                className="text-3xl lg:font-extrabold mb-3
              leading-[34px] md:text-4xl md:leading-tight lg:text-5xl lg:leading-[1.2]  font-medium
              "
              >
                Serhat Karadağ
              </h2>
              <p className="mb-4 text-accent">Web Developer</p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
                3+ years of experienced in the aviation industry, dealt with
                passengers through problem solving, teamwork and time
                management. Looking for a new job at software industry, with
                experience in JavaScript, React, Node.js and MongoDB seeking
                opportunities to apply my knowledge and collaborate with others
                to develop dynamic and secure applications
              </p>
            </div>
            {/* <button className="btn btn-md bg-accent hover:bg-accent-hover transition-all">
              Contact Me
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
