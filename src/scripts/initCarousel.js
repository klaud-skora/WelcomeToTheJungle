const initCarousel = () => {
  const width = window.innerWidth;

  const prev = document.querySelector('.button.prev');
  const next = document.querySelector('.button.next');

  function Carousel() {
    this.slides = width > 850 ? document.querySelectorAll('.caro') : document.querySelectorAll('.caro .card');
    this.total = this.slides.length - 1;
    this.current = 0;
    
    this.slide(this.current);
  }
  // NEXT
  Carousel.prototype.next = function (interval) {
    (this.current === this.total) ? this.current = 0 : this.current += 1;
    
    this.slide(this.current);
    
    if(typeof interval === 'number' && (interval % 1) === 0) {
      let context = this;
      this.run = setTimeout(function() {
        context.next(interval);
      }, interval);
    }
  };
  // PREVIOUS
  Carousel.prototype.prev = function (interval) {	
    (this.current === 0) ? this.current = this.total : this.current -= 1;
      
    this.slide(this.current);
    
    if(typeof interval === 'number' && (interval % 1) === 0) {
      let context = this;
      this.run = setTimeout(function() {
        context.prev(interval);
      }, interval);
    }
  };
  // SELECT SLIDE
  Carousel.prototype.slide = function (index) {	
    if (index >= 0 && index <= this.total) { 
      for (let s = 0; s <= this.total; s++) {
        if (s === index) {
          this.slides[s].style.display = "flex"; 
        } else {
          this.slides[s].style.display = 'none';
        }
      }
    } 
  };
  var elements = new Carousel();
  elements.next(3000);

  prev.addEventListener('click', () => {
    elements.prev();
  });

  next.addEventListener('click', () => {
    elements.next();
  });
};

export default initCarousel;