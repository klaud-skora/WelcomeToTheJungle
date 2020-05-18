import scrollToTop from './scripts/scrollToTop';
import loadProducts from './scripts/loadProducts';
import getDate from './scripts/getDate';
import initCarousel from './scripts/initCarousel';
import CarouselData from './scripts/carouselData';
import NewArrivalsData from './scripts/newArrivalsData';
import NewStuffData from './scripts/newStuffData';
import fetchData from './scripts/fetchData';

const runScripts = () =>  { 
  fetchData().then(res => {
    CarouselData(res.slice(0, 8));
    NewArrivalsData(res.slice(8,16));
    loadProducts(res.slice(16,18));
    NewStuffData(res.slice(25,29));
  }).catch(err => { console.log(err);
  }).finally(() => { console.log('finally');
  });
  
  scrollToTop();
  getDate();
  initCarousel();

};

export default runScripts;


