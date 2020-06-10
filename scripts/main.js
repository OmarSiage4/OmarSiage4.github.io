function transferData(){
	var customerCategory = document.getElementById("customerCategory").value;
	var organic = document.getElementById("organicYes").checked; 

	if(organic){
		organic="true"
	}
	else{
		organic="false";
	}



	var priceSort = document.getElementById("organicYes").checked
	if(priceSort){
		priceSort = "true";
	}
	else{
		priceSort = "false";
	}


	console.log(customerCategory);
	console.log(organic);
	console.log(priceSort);

	localStorage.setItem("categoryType",customerCategory);
	localStorage.setItem("organicSelected",organic);
	localStorage.setItem("priceSortingSelected",priceSort);


	window.location.href = "./product.html";
}

