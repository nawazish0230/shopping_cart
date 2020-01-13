
function checkout(){
    // let totalPriceVar = document.querySelector('.totalPrice');
    // let totalQtyVar = document.querySelector('.totalQty');
    // let cartQuantity = document.querySelector(`.cart-quantity-${product.id}`);
    // let totalQty = document.querySelector('.total-qty');
    let totalPrice = document.querySelector('.total-price');
    let checkoutBtn = document.querySelector('.checkout-btn');
    let modalContent = document.querySelector('.modal-content');
    let checkoutModal = document.querySelector('.checkout-modal');
    let close = document.querySelector('.close');
    checkoutBtn.addEventListener('click', ()=>{
        modalContent.style.display = 'block';
        modalContent.innerText = `Transaction successful ${totalPrice.innerHTML}`;
        checkoutModal.style.display = 'block';
        // totalPrice.innerText = 0;
        // totalQty.innerText = 0;
        // cartQuantity.innerText = 0;
        // totalPrice = 0;
        // totalQty = 0;
    })

}
checkout();