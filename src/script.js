const script = {

  getDate: function() { 
    const date = new Date();
    document.querySelector('.date').innerHTML = date.getFullYear(); 
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

  init: function() {
    this.loadProducts();
    this.getDate();
  },
};

module.exports = script;


