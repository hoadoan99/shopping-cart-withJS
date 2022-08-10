/** @format */
function createProduct(
  valueImage,
  valueName,
  valuePrice,
  valueDiscount,
  valueLocation
) {
  // create object
  var product = new Object();
  //   create property
  product.image = valueImage;
  product.name = valueName;
  product.price = valuePrice;
  product.discount = valueDiscount;
  product.location = valueLocation;
  // create method

  product.priceDiscount = function () {
    var currentPrice = this.price * (1 - this.discount);
    return currentPrice;
  };
  product.toJson = function () {
    var json = JSON.stringify(this);
    return json;
  };
  product.fromJson = function (json) {
    var objectDetails = new Object();

    var objectParse = JSON.parse(json);

    var objectDetails = createProduct(
      objectParse.image,
      objectParse.name,
      objectParse.price,
      objectParse.discount,
      objectParse.location
    );
    return objectDetails;
  };
  return product;
}

function convertListProductToHtml(listProducts) {
  var HTMLListproduct = `<div class="row" id="items">`;
  for (var i = 0; i < listProducts.length; i++) {
    var htmlProduct = convertProductToHtml([i]);
    HTMLListproduct = HTMLListproduct + htmlProduct;
  }

  return HTMLListproduct;
}
function convertProductToHtml(product) {
  var html = `
    <div class="col-sm-3">
                    <div class="card" style="width: 16rem;">
                        <img src="../../images/products/pro1.jpg" class="card-img-top" alt="product-1">
                        <div class="card-body">
                            <h5 class="card-title">T-Shirt 4</h5>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item text-decoration-line-through text-danger">100.000Đ</li>
                            <li class="list-group-item">50.000Đ</li>
                        </ul>
                        <div class="card-body">
                            <a href="#" class="btn btn-outline-primary">Details</a>
                            <a href="#" class="btn btn-outline-success">Add To Cart</a>
                        </div>
                    </div>
                </div>
  `;

  return html;
}
