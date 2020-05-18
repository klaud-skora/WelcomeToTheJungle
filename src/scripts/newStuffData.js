const NewStuffData = (images) => {
  const imageBoxe = document.querySelector('.new-stuff');

  imageBoxe.innerHTML = 
    `<div class="row">
    <div class="col-12 col-lg-6">
      <div class="card card-top">
        <img class="card-img-top" src=${images[0]} styles="height: 530px; width: 546px ">
        <div class="card-body">
          <p class="card-text">Sleeve denim mini dress</p>
          <p class="shop-now">Shop now</p>
        </div>
      </div>
    </div>
    <div class="col-12 col-lg-6">
      <div class="row">
        <div class="col-12 col-md-6">
          <div class="card card-top">
            <img class="card-img-top" src=${images[1]} styles="height: 310px; width: 360px ">
            <div class="card-body">
              <p class="card-text">Back to school!</p>
              <p class="shop-now">Shop now</p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="card card-top">
          <img class="card-img-top" src=${images[2]} styles="height: 310px; width: 360px ">
            <div class="card-body">
              <p class="card-text">Jewelry for night</p>
              <p class="shop-now">Shop now</p>
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="card card-top">
            <img class="card-img-top" src=${images[3]} styles=" max-height: 410px;  width: 769px" >
            <div class="card-body">
              <p class="card-text">Sunglasses for you</p>
              <p class="shop-now">Shop now</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`
}

export default NewStuffData;