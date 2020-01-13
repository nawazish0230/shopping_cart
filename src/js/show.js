
function showData (products){
    let cartQuantity = [];
    
    let productsElement = document.querySelector('.products');
    products.forEach((product, index) => {
        let productElement = document.createElement('div');
        productElement.className = 'product';
        let hr = document.createElement('hr');
        productElement.innerHTML = `<div class="">
                                        <img src="src/assets/${product.ImageUrl}" class="product-image" alt="">
                                        <p class="offer-text">${product.OfferText}</p>
                                    </div>
                                    <div class="product-text-container">
                                        <h3 class="brand-name">${product.BrandName}</h3>
                                        <p class="product-name">${product.ProductName}</p>
                                        <p class="quantity">${product.Quantity} l</p>
                                        <p class="mrp">MRP ${product.MRP}</p>
                                        <p class="price"><b>Rs ${product.Price}</b></p>
                                        <div class="cart-button-container">
                                            <button class="cart-btn ${product.id}" id="${product.id}">Add to cart</button>
                                            <button class="add-btn" id="${product.id}">+</button>
                                            <span class="cart-quantity-btn cart-quantity-${product.id}" id="${product.id}">0</span>
                                            <button class="sub-btn"><b>-</b></button>
                                        </div>
                                    </div>`;
        productsElement.appendChild(productElement);
        productsElement.appendChild(hr);
    })
    listenerSet(products)
}