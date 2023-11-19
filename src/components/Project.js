import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';

const Project = ({ item }) => {
  return (
    <div className="flex flex-col justify-center text-center items-center mt-5">
      <a href={item.url} target="_blank" rel="noopener noreferrer">
        {/* image */}
        <div className="group relative overflow-hidden  rounded-xl  w-[21rem] h-[16rem] ">
          {/* overlay */}
          <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
          {/* img */}
          <img
            className="group-hover:scale-125 transition-all duration-500 w-[21rem] h-[16rem] object-cover"
            src={item.image}
            alt=""
          />
          {/* pretitle */}
          <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
            <span className="">
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <button className="text-center rounded-lg text-[2.5rem] text-accent hover:text-accent/80 transition-all duration-300">
                  <TbWorldWww />
                </button>
              </a>
            </span>
          </div>
          {/* pretitle */}
          <div className="absolute -bottom-full left-28 group-hover:bottom-24 transition-all duration-500 z-50">
            <span className="">
              <a href={item.github} target="_blank" rel="noopener noreferrer">
                <button className="text-center rounded-lg text-[2.5rem] text-accent  hover:text-accent/80 transition-all duration-300 ">
                  <FaGithubSquare />
                </button>
              </a>
            </span>
          </div>

          {/* title */}
          <div className="absolute -bottom-full left-[50px] group-hover:bottom-14 transition-all duration-700 z-50">
            <span className="text-2xl text-accent font-bold  hover:text-accent/80 transition-all duration-300">
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.category}
              </a>
            </span>
          </div>
        </div>
        <div className="mt-2 text-white text-base">
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            {item.name}
          </a>
        </div>
      </a>
    </div>
  );
};

export default Project;
