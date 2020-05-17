const CarouselData = (images) => {
  const imageBoxes = document.querySelectorAll('.card-img-top');

  imageBoxes.forEach((element, index) => {
    element.innerHTML = 
    `<img src=${images[index]}>`
  }); 
}

export default CarouselData;