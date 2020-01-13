function listenerSet(products){
    // console.log(products);
    let cartBtn = document.querySelectorAll('.cart-btn');
    let addBtn = document.querySelectorAll('.add-btn');
    let subBtn = document.querySelectorAll('.sub-btn');
    let checkoutBtn = document.querySelector('.checkout-btn');

    cartBtn.forEach((product, index) => {
        product.addEventListener('click', (event)=>{
            increaseProduct(products[index])
            // console.log(event, product,products[index], index);
        })
    })

    addBtn.forEach((product, index) => {
        product.addEventListener('click', (event)=>{
            increaseProduct(products[index]);
        })
    })

    subBtn.forEach((product, index) => {
        product.addEventListener('click', (event)=>{
            decreaseProduct(products[index]);
        })
    })

    checkoutBtn.addEventListener('click', ()=>{
        checkout();
    })

    let closeModal = document.querySelector('.checkout-modal');
    let modalContent = document.querySelector('.modal-content');
    let checkoutModal = document.querySelector('.checkout-modal');
    closeModal.addEventListener('click', ()=>{
        console.log('click');
        modalContent.style.display = 'none';
        checkoutModal.style.display = 'none';
    })

}
