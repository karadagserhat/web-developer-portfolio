import { useState } from 'react';
import { projectsData } from '../data';
import { projectsNav } from '../data';
import { useEffect } from 'react';
import Project from './Project';

const Projects = () => {
  const [item, setItem] = useState({ name: 'all' });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === 'all') {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <div>
      {/* nav */}
      <nav className="mb-12 max-w-xl mx-auto">
        <ul className="flex flex-col md:flex-row justify-evenly items-center text-white text-base tracking-wider ">
          {projectsNav.map((item, index) => {
            return (
              <li
                onClick={(e) => {
                  handleClick(e, index);
                }}
                className={`${
                  active === index ? 'active' : ''
                } cursor-pointer capitalize m-4 hover:text-accent transition-all duration-300`}
                key={index}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      </nav>

      {/* projects grid */}
      <section className="grid xl:grid-cols-3 gap-y-12 xl:gap-x-8 xl:gap-y-8 md:grid-cols-2 ">
        {projects.map((item) => {
          return <Project item={item} key={item.id} />;
        })}
      </section>
    </div>
  );
};
export default Projects;
