import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';

const Project = ({ item }) => {
  return (
    <div
      key={item.id}
      className="flex  flex-col justify-end items-center text-center"
    >
      <div className="mb-8">
        <a href={item.url} target="_blank">
          <img
            className="rounded-2xl w-[228px] object-cover object-fill object-center  "
            src={item.image}
            alt=""
          />
        </a>
      </div>
      <p className="capitalize text-accent text-sm mb-3">{item.category} </p>
      <div className="flex gap-x-4 mb-3">
        <a href={item.url} target="_blank">
          <TbWorldWww className="h-8 w-8   duration-300" />
        </a>
        <a href={item.github} target="_blank">
          <FaGithubSquare className="h-8 w-8   duration-300" />
        </a>
      </div>
      <h3 className="text-2xl tracking-wide caption-top font-bold ">
        {item.name}{' '}
      </h3>
    </div>
  );
};
export default Project;
