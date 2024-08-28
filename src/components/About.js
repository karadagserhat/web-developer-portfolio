// import Image from '../assets/img/about.webp';
import Image from '../assets/about.svg';

const About = () => {
  return (
    <section id="about" className="section bg-secondary ">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img
            className="object-cover w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
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
                I am an enthusiastic Full-Stack Developer combining 3 years of
                experience in the aviation industry with a passion for software
                development. With 5 months of professional experience in
                front-end development and a desire for continuous
                self-improvement, I aim to bring a holistic approach to what I
                develop; therefore, my goal is to create user-friendly,
                automated and solid solutions that meet customer demands. I
                apply the problem-solving skills and time management I gained in
                the aviation industry to the software world and adapt to any
                challenging environment quickly and effectively.
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
