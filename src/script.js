const script = { 

  scrollToTop: () => {
    const height = window.innerHeight;
    const scroller = document.querySelector('.scroller');
    
    window.addEventListener('scroll', () => {
      let offset = window.pageYOffset;
      if(offset < height * 0.5 ) { scroller.classList.add('hidden'); }
      else { scroller.classList.remove('hidden'); }
    });
    scroller.addEventListener('click', () => { (window).scrollTo({ top: 0, behavior: 'smooth' }) });
  },

  loadProducts: () => {
    const button = document.getElementById('all-products');
    const hiddenProducts = document.querySelectorAll('.product.hidden');
    console.log(hiddenProducts);

    button.addEventListener('click', () => {

      hiddenProducts.forEach(product => { product.classList.remove('hidden') });  // show more products
      button.classList.add('clicked'); // button inactive
    });
  },

  getDate: function() { 
    const date = new Date();
    document.querySelector('.date').innerHTML = date.getFullYear(); 
  },
    
  init: function() {
    this.scrollToTop();
    this.loadProducts();
    this.getDate();
  },
};

module.exports = script;


