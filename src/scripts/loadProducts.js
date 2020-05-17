const loadProducts = (images) => {
  const button = document.getElementById('all-products');
  const productsWrapper = document.querySelector('.arrivals__content .row');

  const moreProducts = [
    {
      image: images[0],
      sign: './assets/icons/9ef4929d09df29ff3a001987ec297b1c.svg',
      info: 'LAST CHANCE',
      name: 'Backpack with contrasting buckle',
      price: '$33.50',
    },
    {
      image: images[1],
      sign: './assets/icons/97285b5bfcc565e9effd7af574d8cd25.svg',
      info: 'READY FOR THIS ?',
      name: 'Backpack with contrasting buckle',
      price: '$109.00',
    },
  ];

  button.addEventListener('click', () => {
    moreProducts.forEach((product) => {
      const newProduct = document.createElement('div');
      newProduct.classList.add('col-sm-6');
      newProduct.classList.add('col-xl-3');
      
      newProduct.innerHTML = 
        `<div class="card">
            <img src=${product.image} class="new-arrivals_image" alt="...">
            <div class="card-body">
              <div class="arrival__top">
                <img class="arrival__icon" src=${product.sign}>
                <p class="arrival__news">${product.info}</p>
              </div>
              <p class="card-text">${product.name}</p>
              <h6 class="card-price">${product.price}</h6>
            </div>
          </div>`;
      productsWrapper.append(newProduct); // load more products
    });
  
    
    button.classList.add('clicked'); // button inactive
  });
}

export default loadProducts;