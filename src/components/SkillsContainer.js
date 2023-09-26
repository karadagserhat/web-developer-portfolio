import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import reactImage from '../assets/react.png';
import nextjs from '../assets/nextjs.png';
import graphql from '../assets/graphql.png';
import github from '../assets/github.png';
import tailwind from '../assets/tailwind.png';
import mongo from '../assets/mongo.png';
import nodejs from '../assets/node-js.png';
import redux from '../assets/redux-toolkit.png';
import typescript from '../assets/typescript.png';

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500',
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-600',
    },
    {
      id: 3,
      src: javascript,
      title: 'JavaScript',
      style: 'shadow-yellow-500',
    },
    {
      id: 4,
      src: reactImage,
      title: 'React',
      style: 'shadow-blue-500',
    },
    {
      id: 5,
      src: nodejs,
      title: 'Node.js',
      style: 'shadow-green-800',
    },
    {
      id: 6,
      src: redux,
      title: 'Redux Toolkit',
      style: 'shadow-purple-600',
    },
    {
      id: 7,
      src: mongo,
      title: 'MongoDB',
      style: 'shadow-green-700',
    },

    {
      id: 8,
      src: nextjs,
      title: 'Next.js',
      style: 'shadow-white',
    },

    {
      id: 9,
      src: typescript,
      title: 'TypeScript',
      style: 'shadow-blue-700',
    },
  ];

  return (
    <section id="skills" className="bg-tertiary section ">
      <div className=" container mx-auto p-4 flex flex-col justify-center  text-white">
        <div>
          <p className="section-title">Skills</p>
          <p className="py-6">These are the technologies I've worked with</p>
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
