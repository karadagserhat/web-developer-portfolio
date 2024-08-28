//  icons
import { FiGithub, FiLinkedin } from 'react-icons/fi';

// projects images
import halal from './assets/img/projects/halal.png';
import eCommerce from './assets/img/projects/eCommerce.png';
import blog from './assets/img/projects/blog.png';
import prodRating from './assets/img/projects/prodRating.png';
import mini from './assets/img/projects/mini.png';
import angularUI from './assets/img/projects/angular-ecommerce-ui.png';

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'skills',
    href: 'skills',
  },
  {
    name: 'projects',
    href: 'projects',
  },
];

// social
export const social = [
  {
    icon: <FiGithub />,
    href: 'https://github.com/karadagserhat',
  },
  {
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/serhat-karada%C4%9F-1733b7278/?locale=en_US',
  },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: halal,
    name: 'Halal Food Mern App',
    category: 'MERN Stack',
    url: 'https://mern-stack-halal-food.onrender.com/',
    github: 'https://github.com/karadagserhat/Mern-Halal-Food',
  },
  {
    id: '2',
    image: eCommerce,
    name: 'E-Commerce App',
    category: 'React',
    url: 'https://e-commerce-react-shop.netlify.app/',
    github: 'https://github.com/karadagserhat/e-commerce-react',
  },
  {
    id: '3',
    image: blog,
    name: 'Blog App',
    category: 'Next',
    url: 'https://blog-app-next-js-project.vercel.app/',
    github: 'https://github.com/karadagserhat/blog-app-next.js',
  },
  {
    id: '4',
    image: prodRating,
    name: 'Product Rating',
    category: 'React',
    url: 'https://product-rating-react.netlify.app/',
    github: 'https://github.com/karadagserhat/product-rating-react',
  },
  {
    id: '5',
    image: mini,
    name: 'React Mini Projects',
    category: 'React',
    url: 'https://react-projects-mini.netlify.app',
    github: 'https://github.com/karadagserhat/react-mini-projects',
  },
  {
    id: '6',
    image: angularUI,
    name: 'E-Commerce UI',
    category: 'Angular',
    url: 'https://angular-e-commerce-ui.vercel.app/',
    github: 'https://github.com/karadagserhat/Angular-eCommerce',
  },
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'Angular',
  },
  {
    name: 'React',
  },
  {
    name: 'MERN Stack',
  },
  {
    name: 'Next',
  },
];

// *******************************
