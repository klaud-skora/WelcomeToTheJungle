const NewStuffData = (images) => {
  const imageBoxe = document.querySelector('.new-stuff');

  imageBoxe.innerHTML = 
    `<div class="row">
      <div class="col-12 col-lg-6">
        <div class="card card-top" style="height: 640px; max-width: 546px; ">
          <img class="card-img-top" src=${images[0]} style="height: 100%; width: 100%; ">
          <div class="card-body">
            <p class="card-text">Sleeve denim mini dress</p>
            <p class="shop-now">Shop now</p>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-6">
        <div class="row">
          <div class="col-12 col-md-6">
            <div class="card card-top" style="height: 310px; max-width: 360px; ">
              <img class="card-img-top" src=${images[1]} style="height: 100%; width: 100%; ">
              <div class="card-body">
                <p class="card-text">Back to school!</p>
                <p class="shop-now">Shop now</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="card card-top" style="height: 310px; max-width: 360px; ">
            <img class="card-img-top" src=${images[2]} style="height: 100%; width: 100%; ">
              <div class="card-body">
                <p class="card-text">Jewelry for night</p>
                <p class="shop-now">Shop now</p>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="card card-top">
              <div class="image" style="height: 310px;  max-width: 769px" >
              <img src=${images[3]} style="height: 100%; width: 100%; object-fit: cover; ">
              </div>
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