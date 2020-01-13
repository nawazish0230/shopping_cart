// let totalPrice = 0;
// let totalQty = 0;


// function fetchData(){
//     let url = new Request('src/js/products.json');
//     // console.log(url)
// 	fetch(url)
// 		.then((response)=> {
// 			return response.json();
// 		})
// 		.then(function(data) {
//             // console.log(data);
//             showData(data);
//         })
//         .catch(err => console.log(err));
// };

// fetchData();


// function showData (products){
//     let cartQuantity = [];
    
//     let productsElement = document.querySelector('.products');
//     products.forEach((product, index) => {
//         let productElement = document.createElement('div');
//         productElement.className = 'product';
//         let hr = document.createElement('hr');
//         productElement.innerHTML = `<div class="">
//                                         <img src="src/assets/${product.ImageUrl}" class="product-image" alt="">
//                                         <p class="offer-text">${product.OfferText}</p>
//                                     </div>
//                                     <div class="product-text-container">
//                                         <h3 class="brand-name">${product.BrandName}</h3>
//                                         <p class="product-name">${product.ProductName}</p>
//                                         <p class="quantity">${product.Quantity} l</p>
//                                         <p class="mrp">MRP ${product.MRP}</p>
//                                         <p class="price"><b>Rs ${product.Price}</b></p>
//                                         <div class="cart-button-container">
//                                             <button class="cart-btn ${product.id}" id="${product.id}">Add to cart</button>
//                                             <button class="add-btn" id="${product.id}">+</button>
//                                             <span class="cart-quantity-btn cart-quantity-${product.id}" id="${product.id}">0</span>
//                                             <button class="sub-btn"><b>-</b></button>
//                                         </div>
//                                     </div>`;
//         productsElement.appendChild(productElement);
//         productsElement.appendChild(hr);
//     })
//     listenerSet(products)
// }

// function listenerSet(products){
//     // console.log(products);
//     let cartBtn = document.querySelectorAll('.cart-btn');
//     let addBtn = document.querySelectorAll('.add-btn');
//     let subBtn = document.querySelectorAll('.sub-btn');
//     let checkoutBtn = document.querySelector('.checkout-btn');

//     cartBtn.forEach((product, index) => {
//         product.addEventListener('click', (event)=>{
//             increaseProduct(products[index])
//             // console.log(event, product,products[index], index);
//         })
//     })

//     addBtn.forEach((product, index) => {
//         product.addEventListener('click', (event)=>{
//             increaseProduct(products[index]);
//         })
//     })

//     subBtn.forEach((product, index) => {
//         product.addEventListener('click', (event)=>{
//             decreaseProduct(products[index]);
//         })
//     })

//     checkoutBtn.addEventListener('click', ()=>{
//         checkout();
//     })

//     let closeModal = document.querySelector('.checkout-modal');
//     let modalContent = document.querySelector('.modal-content');
//     let checkoutModal = document.querySelector('.checkout-modal');
//     closeModal.addEventListener('click', ()=>{
//         console.log('click');
//         modalContent.style.display = 'none';
//         checkoutModal.style.display = 'none';
//     })

// }

// function increaseProduct(product){
//     let cartQuantity = document.querySelector(`.cart-quantity-${product.id}`);
//     let totalQtyElement = document.querySelector('.total-qty');
//     let totalPriceElement = document.querySelector('.total-price');
//     let count = cartQuantity.innerHTML;
//     count++;
//     cartQuantity.innerHTML = count++;
//     totalPrice = totalPrice + parseInt(product['Price']);
//     totalQty++;
//     totalQtyElement.innerHTML = totalQty;
//     totalPriceElement.innerHTML = totalPrice;

// }

// function decreaseProduct(product){
//     let cartQuantity = document.querySelector(`.cart-quantity-${product.id}`);
//     let totalQtyElement = document.querySelector('.total-qty');
//     let totalPriceElement = document.querySelector('.total-price');
//     let count = cartQuantity.innerHTML;
//     if(count > 0){
//         count--;
//         cartQuantity.innerHTML = count--;
//         totalPrice = totalPrice - parseInt(product['Price']);
//         totalQty--;
//     }
//     totalQtyElement.innerHTML = totalQty;
//     totalPriceElement.innerHTML = totalPrice;
// }

// function checkout(){
//     let total = document.querySelector('.total-price');
//     let checkoutBtn = document.querySelector('.checkout-btn');
//     let modalContent = document.querySelector('.modal-content');
//     let checkoutModal = document.querySelector('.checkout-modal');
//     let close = document.querySelector('.close');
//     checkoutBtn.addEventListener('click', ()=>{
//         modalContent.style.display = 'block';
//         modalContent.innerText = `Transaction successful ${total.innerHTML}`;
//         checkoutModal.style.display = 'block';
//     })

// }
// checkout();



