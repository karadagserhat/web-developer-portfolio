import { social } from '../data';
// import Logo from '../assets/img/logo.svg';

const Footer = () => {
  return (
    <footer className="bg-tertiary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between">
          {/*social icons  */}
          <div className="flex space-x-6 items-center justify-center">
            {social.map((item, index) => {
              const { href, icon } = item;
              return (
                <a
                  className="text-accent text-base"
                  target="_blank"
                  // rel="noreferrer"
                  rel="noreferrer"
                  href={href}
                  key={index}
                >
                  {icon}
                </a>
              );
            })}
          </div>

          {/* logo */}
          <div className="text-2xl font-signature text-white lg:mr-[-5rem]">
            Serhat Karadağ
          </div>

          {/* copyright */}
          <p>
            &copy; {new Date().getFullYear()} Serhat Karadağ. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
