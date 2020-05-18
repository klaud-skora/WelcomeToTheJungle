const fetchError = () => {
  let allErrors = [];

  const carousel = document.querySelector('.recommended');
  const newArrivals = document.querySelector('.new-arrivals')
  const newStuff = document.querySelector('.new-stuff')

  const error = document.createElement('div');
  error.classList.add('error');

  error.innerHTML = `<h3>Couldn't load the images data.</h3>`

  allErrors.push(carousel);
  allErrors.push(newArrivals);
  allErrors.push(newStuff);
  
  console.log(allErrors);

  allErrors.forEach(box => {
    box.replaceWith(error);
  });
}

export default fetchError;