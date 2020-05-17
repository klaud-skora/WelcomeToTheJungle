const loadProducts = () => {
  const button = document.getElementById('all-products');
  const hiddenProducts = document.querySelectorAll('.product.hidden');
  console.log(hiddenProducts);

  button.addEventListener('click', () => {

    hiddenProducts.forEach(product => { product.classList.remove('hidden') });  // show more products
    button.classList.add('clicked'); // button inactive
  });
}

export default loadProducts;