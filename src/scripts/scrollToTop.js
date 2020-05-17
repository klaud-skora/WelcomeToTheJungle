const scrollToTop = () => {
  const height = window.innerHeight;
  const scroller = document.querySelector('.scroller');

  window.addEventListener('scroll', () => {
    let offset = window.pageYOffset;
    if(offset < height * 0.5 ) { scroller.classList.add('hidden'); }
    else { scroller.classList.remove('hidden'); }
  });
  scroller.addEventListener('click', () => { (window).scrollTo({ top: 0, behavior: 'smooth' }) });
};

export default scrollToTop;