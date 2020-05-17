const NewArrivalsData = (images) => {
  const imageBoxes = document.querySelectorAll('.new-arrivals_image');

  imageBoxes.forEach((element, index) => {
    element.innerHTML = 
    `<img src=${images[index]}>`
  }); 
}

export default NewArrivalsData;