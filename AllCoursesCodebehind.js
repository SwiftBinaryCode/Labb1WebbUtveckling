
const jsonRequest = new Request('AllCourses.json');

const courses = []

class Course{
    constructor(input){
        this.courseNumber= input.courseNumber;
        this.courseTitle = input.courseTitle,
        this.courseDescription = input.courseDescription;
        this.courseLength = input.courseLength;
        this.coursePrice= input.coursePrice;
        this.courseImg=input.courseImg;

    }
}

fetch(jsonRequest).then(response => response.json()).
then(data => {

  for (let i = 0; i < data.length; i++) {
    const course = new Course(data[i])
    courses.push(course);
    
  }
  populateList(courses);

}).catch(console.error)

function populateList(input) {
  for (let i = 0; i < input.length; i++) {
    const courses = input[i];
    let content =  `

    
    <div class="pricing-column col-lg-6">
        <div class="card">
          <img class="responsive"
            src="${courses.courseImg}"
            />
          <div class="card-body">
            <div class="shop-item">
              <h5 class="shop-item-title">${courses.courseTitle}</h5>
              <p class="course-length"><b>${courses.courseLength}</b></p>
              <p class="card-text">
                ${courses.courseDescription}
                <p class="shop-item-price">${courses.coursePrice}</p>
                <button type="button" class="btn btn-add btn-primary">
                  Add to cart
                </button>
              </p>
            </div>
          </div>
        </div>
        </div>
        `
        ;
        
      
    document.getElementById("allCourses").innerHTML += content;
  }
  var addToCartButton = document.getElementsByClassName("btn-add");
  for (var i = 0; i < addToCartButton.length; i++) {
    var button = addToCartButton[i];
    button.addEventListener("click", addToCart);
  }
}

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  var removeCartItem = document.getElementsByClassName("btn-add");
  for (var i = 0; i < removeCartItem.length; i++) {
    var button = removeCartItem[i];
    button.addEventListener("click", removeCartItem);
  }

  var quantityInputs = document.getElementsByClassName("cart-quantity-input");
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }

  var addToCartButton = document.getElementsByClassName("btn-add");
  for (var i = 0; i < addToCartButton.length; i++) {
    var button = addToCartButton[i];
    button.addEventListener("click", addToCart);
  }

  document
    .getElementsByClassName("btn-purchase")[0]
    .addEventListener("click", purchaseClicked);
}

function purchaseClicked() {
  alert("Thank you for your purchase!");
  var cartItems = document.getElementsByClassName("cart-items")[0];
  while (cartItems.hasChildNodes()) {
    cartItems.removeChild(cartItems.firstChild);
  }
  updateCartTotal();
}

function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove();
  updateCartTotal();
}

function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCartTotal();
}

function addToCart(event) {
  var button = event.target;
  var shopItem = button.parentElement.parentElement;
  var title = shopItem.getElementsByClassName("shop-item-title")[0].innerHTML;
  var price = shopItem.getElementsByClassName("shop-item-price")[0].innerHTML;
  addItemToCart(title, price);
  updateCartTotal();
}

function addItemToCart(title, price) {
  var cartRow = document.createElement("div");
  cartRow.classList.add("cart-row");
  var cartItems = document.getElementsByClassName("cart-items")[0];
  var cartItemNames = cartItems.getElementsByClassName("cart-item-title");
  for (var i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerHTML == title) {
      alert("This Course is already in your cart!");
      return;
    }
  }
  var cartRowContents = 
  `
          <div class="cart-item cart-column">
          
            <span class="cart-item-title">${title}</span>
          </div>
          <span class="cart-price cart-column">${price}</span>
          <div class="cart-quantity cart-column">
            <input type="number" value="1" class="cart-quantity-input">
            <button class="btn btn-remove btn-outline-danger" type="button">Remove</button>
            <br>
            <br>
          </div>`;
  cartRow.innerHTML = cartRowContents;
  cartItems.append(cartRow);
  cartRow
    .getElementsByClassName("btn-remove")[0]
    .addEventListener("click", removeCartItem);
  cartRow
    .getElementsByClassName("cart-quantity-input")[0]
    .addEventListener("change", quantityChanged);
}

function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName("cart-items")[0];
  var cartRows = cartItemContainer.getElementsByClassName("cart-row");
  var total = 0;
  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    var priceElement = cartRow.getElementsByClassName("cart-price")[0];
    var quantityElement = cartRow.getElementsByClassName(
      "cart-quantity-input"
    )[0];
    var price = parseFloat(priceElement.innerHTML.replace("kr", ""));
    var quantity = quantityElement.value;
    total += price * quantity;
  }
  total = Math.round(total * 100) / 100;
  document.getElementsByClassName("cart-total-price")[0].innerHTML =
    total + "kr";
}

/*Admin page logistics*/

function addCourse() {

  var Number = document.getElementById("course-number").value
  var Title = document.getElementById("course-title").value
  var Description = document.getElementById("course-info").value
  var Length = document.getElementById("course-length").value
  var Price = document.getElementById("course-price").value
  
  let content =  `
  
    <div class="col">
        <div class="card h-200">
          <div class="card-body">
            <div class="shop-item">
              <h5 class="shop-item-title">${Title}</h5>
              <h5 class="course-number">${Number}</h5>
              <p class="course-length"><b>${Length}</b></p>
              <p class="card-text">
                ${Description}
                <p class="shop-item-price">${Price}</p>
                <button type="button" class="btn btn-add btn-primary">
                  Add to cart
                </button>
              </p>
            </div>
          </div>
        </div>
        </div>
        
        `
        ;
        
      
    document.getElementById("allCourses").innerHTML += content;
  
  var addToCartButton = document.getElementsByClassName("btn-add");
  for (var i = 0; i < addToCartButton.length; i++) {
    var button = addToCartButton[i];
    button.addEventListener("click", addToCart);
  }

  alert("Course added")

  }

  



 
 