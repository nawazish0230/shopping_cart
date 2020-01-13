function increaseProduct(product){
    let cartQuantity = document.querySelector(`.cart-quantity-${product.id}`);
    let totalQtyElement = document.querySelector('.total-qty');
    let totalPriceElement = document.querySelector('.total-price');
    let count = cartQuantity.innerHTML;
    count++;
    cartQuantity.innerHTML = count++;
    totalPrice = totalPrice + parseInt(product['Price']);
    totalQty++;
    totalQtyElement.innerHTML = totalQty;
    totalPriceElement.innerHTML = totalPrice;

}