function transferData(){
	var customerCategory = document.getElementById("customerCategory").value;
	var organic = document.getElementById("organic").checked;
	var priceSort = document.getElementById("priceSort").checked;

	console.log(customerCategory);
	console.log(organic);
	console.log(priceSort);

	localStorage.setItem("categoryType",customerCategory);
	localStorage.setItem("organicSelected",organic);
	localStorage.setItem("priceSortingSelected",priceSort);


	window.location.href = "./product.html";
}

