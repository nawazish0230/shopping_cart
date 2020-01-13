let totalPrice = 0;
let totalQty = 0;


function fetchData(){
    let url = new Request('src/assets/products.json');
    // console.log(url)
	fetch(url)
		.then((response)=> {
			return response.json();
		})
		.then(function(data) {
            // console.log(data);
            showData(data);
        })
        .catch(err => console.log(err));
};

fetchData();