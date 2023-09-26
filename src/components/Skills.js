import { skills } from '../data';

const Skills = () => {
  return (
    <section className="min-h-[146px] bg-tertiary flex items-center lg:mt-[-1rem] md:mt-[-2rem]">
      <div className="container mx-auto ">
        <div className="grid grid-cols-8 md:grid-flow-row">
          {skills.map((skill, index) => {
            return (
              <div className="flex items-center justify-center" key={index}>
                <img src={skill.image} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Skills;
