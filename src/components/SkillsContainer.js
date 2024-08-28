import csharp from '../assets/img/skills/csharp.png';
import dotnet from '../assets/img/skills/MicrosoftNET.png';
import javascript from '../assets/img/skills/javascript.png';
import reactImage from '../assets/img/skills/react.png';
import nextjs from '../assets/img/skills/nextjs.png';
import mongo from '../assets/img/skills/mongo.png';
import nodejs from '../assets/img/skills/node-js.png';
import angular from '../assets/img/skills/angular.png';
import typescript from '../assets/img/skills/typescript.png';

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: angular,
      title: 'Angular',
      style: 'shadow-purple-600',
    },
    {
      id: 2,
      src: reactImage,
      title: 'React',
      style: 'shadow-blue-500',
    },
    {
      id: 3,
      src: dotnet,
      title: 'NET Framework',
      style: 'shadow-purple-900',
    },
    {
      id: 4,
      src: nodejs,
      title: 'Node.js',
      style: 'shadow-green-800',
    },
    {
      id: 5,
      src: csharp,
      title: 'C#',
      style: 'shadow-purple-400',
    },
    {
      id: 6,
      src: mongo,
      title: 'MongoDB',
      style: 'shadow-green-700',
    },

    {
      id: 7,
      src: nextjs,
      title: 'Next.js',
      style: 'shadow-white',
    },

    {
      id: 8,
      src: typescript,
      title: 'TypeScript',
      style: 'shadow-blue-700',
    },
    {
      id: 9,
      src: javascript,
      title: 'JavaScript',
      style: 'shadow-yellow-500',
    },
  ];

  return (
    <section id="skills" className="bg-tertiary section ">
      <div className=" container mx-auto p-4 flex flex-col justify-center  text-white">
        <div>
          <p className="section-title">Skills</p>
          <p className="py-6 text-base text-[#B2B6BD]">
            These are the technologies I've worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 ">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`bg-secondary shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
