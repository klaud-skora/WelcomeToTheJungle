import scrollToTop from './scripts/scrollToTop';
import loadProducts from './scripts/loadProducts';
import getDate from './scripts/getDate';
import initCarousel from './scripts/initCarousel';

const runScripts = () =>  { 
  
  scrollToTop();
  loadProducts();
  getDate();
  initCarousel();
};

export default runScripts;


