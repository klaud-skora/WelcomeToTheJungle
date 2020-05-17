import scrollToTop from './scripts/scrollToTop';
import loadProducts from './scripts/loadProducts';
import getDate from './scripts/getDate';
import initCarousel from './scripts/initCarousel';
import displayCarouselData from './scripts/carouselData';
import fetchData from './scripts/fetchData';

const runScripts = () =>  { 
  fetchData().then(res => {
    displayCarouselData(res.slice(0, 8));
  }).catch(err => { console.log(err);
  }).finally(() => { console.log('finally');
  });
  
  scrollToTop();
  loadProducts();
  getDate();
  initCarousel();

};

export default runScripts;


