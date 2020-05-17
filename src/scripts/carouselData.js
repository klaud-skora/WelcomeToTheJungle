const displayCarouselData = (images) => {
  const imageBoxes = document.querySelectorAll('.card-img-top');
  console.log(images);
  console.log(imageBoxes);

  imageBoxes.forEach((element, index) => {
    // const img = document.createElement('img');
    // img.setAttribute('src', element.imageUrl);
    // element.append(images[index]);

    element.innerHTML = 
    `<img src=${images[index]}>`
  });
  console.log(imageBoxes);
}

export default displayCarouselData;