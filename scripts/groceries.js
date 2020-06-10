let allSelectedItems = [];

var customerType = localStorage.getItem("categoryType");
var organicOnly = localStorage.getItem("organicSelected");
var priceSorting = localStorage.getItem("priceSortingSelected");

console.log(customerType)
console.log(priceSorting)
console.log(organicOnly)


var products = [
	{
		name: "Brocoli",
		vegetarian: true,
		glutenFree: true,
		price: 1.99,
		url : "https://img.icons8.com/color/48/000000/brocolini.png",
		organic:true,
		category:"veggyandfruit"
	},
	{
		name: "Bread",
		vegetarian: true,
		glutenFree: false,
		price: 2.35,
		url : "https://img.icons8.com/doodle/48/000000/bread--v1.png",
		organic:false,
		category:"bakery"
	},
	{
		name: "Organic Bread",
		vegetarian: true,
		glutenFree: false,
		price: 3.35,
		url : "https://img.icons8.com/doodle/48/000000/bread--v1.png",
		organic:true,
		category:"bakery"
	},
	{
		name: "Organic Milk",
		vegetarian: true,
		glutenFree: true,
		price: 2.35,
		url :"https://img.icons8.com/cotton/48/000000/milk-bottle--v1.png",
		organic:true,
		category:"dairyandmeat"
	},
	{
		name: "Salmon",
		vegetarian: false,
		glutenFree: true,
		price: 10.99,
		url : "https://img.icons8.com/cotton/48/000000/salmon--v1.png",
		organic: true,
		category: "dairyandmeat"
	},
	{
		name: "Cashews",
		vegetarian: true,
		glutenFree: true,
		price: 5.65,
		url : "https://img.icons8.com/office/48/000000/brazil-nut.png",
		organic: true,
		category:"snacks"
	},
	{
		name: "Curry",
		vegetarian: true,
		glutenFree: true,
		price: 6.99,
		url : "https://img.icons8.com/color/48/000000/curry.png",
		organic: true,
		category:"spices"
	},
	{
		name: "Chicken",
		vegetarian: false,
		glutenFree: true,
		price: 12.89,
		url : "https://img.icons8.com/office/48/000000/chicken.png",
		organic: true,
		category: "dairyandmeat"
	},
	{
		name: "Beef",
		vegetarian: false,
		glutenFree: true,
		price: 10.29,
		url : "https://img.icons8.com/cotton/48/000000/steak-medium--v1.png",
		organic: true,
		category: "dairyandmeat"

	},
	{
		name: "Cake",
		vegetarian: true,
		glutenFree: false,
		price: 12.99,
		url : "https://img.icons8.com/pastel-glyph/48/000000/double-chocolate-cake.png",
		organic: false,
		category:"bakery"

	},	{
		name: "Cookie",
		vegetarian: true,
		glutenFree: false,
		price: 1.99,
		url : "https://img.icons8.com/plasticine/48/000000/cookie.png",
		organic: false,
		category:"bakery"

	},
	{
		name: "Asparagus",
		vegetarian: true,
		glutenFree: true,
		price: 2.99,
		url : "https://img.icons8.com/color/48/000000/asparagus.png",
		organic: true,
		category:"veggyandfruit"

	}
];



function getOrganic(){
	var org = localStorage.getItem("organicSelected");
	if(org == "false"){
		org=false
	}
	else{
		org=true
	}

	return org;
}




function displayCategory(categoryType){
	console.log(categoryType);

	getCurrentSelected = selectedItems();

	if(getCurrentSelected != null){
		for(var i=0 ; i < getCurrentSelected.length ; i+=1){
			allSelectedItems.push(getCurrentSelected[i]);
		}

		console.log(allSelectedItems);
		


	var organic = getOrganic()
	var productList = restrictListProducts(organic);

	//Get only those of the same category type
	productList = getCategories(productList,categoryType);

	displayProducts(productList)

}
}


function getCategories(productList,categoryType){
	let categoryList = [];

	for(var i=0 ; i<productList.length; i+=1){
		if(productList[i].category == categoryType){
			categoryList.push(productList[i]);
		}

	}

	return categoryList;


}

function restrictListProducts(organicOnly) {
	let newly_selected_products = [];


	for(var i=0 ; i<products.length ; i+=1){
		if((customerType=="Vegetarian") && (products[i].vegetarian == true)){
			
			if(organicOnly==true && products[i].organic == true){
				newly_selected_products.push(products[i]);

			}

			else if(organicOnly == false){
				newly_selected_products.push(products[i]);
			}
		}



		else if((customerType=="GlutenFree") && (products[i].glutenFree == true)){
			
			if(organicOnly==true && products[i].organic == true){
				newly_selected_products.push(products[i]);

			}

			else if(organicOnly == false){
				console.log(organicOnly);
				newly_selected_products.push(products[i]);
			}
		}

		else if((customerType=="both") && (products[i].glutenFree == true) && (products[i].vegetarian == true)){
			if(organicOnly==true && products[i].organic == true){
				newly_selected_products.push(products[i]);

			}

			else if(organicOnly == false){
				console.log(organicOnly);
				newly_selected_products.push(products[i]);
			}
		}



		//If the customer has no dietary restrictions
		else if(customerType=="None"){
			if(organicOnly==true && products[i].organic == true){
				newly_selected_products.push(products[i]);

			}

			else if(organicOnly == false){
				console.log(organicOnly);
				newly_selected_products.push(products[i]);
			}
		}

	}


	return newly_selected_products;
}


function displayProducts(productList){

	if(priceSorting === "true"){
		productList = sortCost(productList);
	}
	

	let div = document.getElementById("productList");
	console.log(div)
	div.innerHTML = " "; 
	div.style.position = "relative"
	div.style.width = "50%";
	div.style.margin = "auto";
	div.append(document.createElement("hr"))
	for(i=0 ; i<productList.length ; i++){
		//Create a subdiv
		var subdiv = document.createElement("div");
		subdiv.style.backgroundColor = ("#f3f3f3");

		//Create the checkbox
		var productName = productList[i].name;
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
		checkbox.style.marginTop = "30px"
		subdiv.appendChild(checkbox);
		

		//Create a label
		let label = document.createElement("label");
		label.htmlFor = productName;
		label.appendChild(document.createTextNode("  " + productName));
		subdiv.appendChild(label);

		//Display the price
		let price = document.createElement("p");
		price.innerHTML = "Price : " + productList[i].price;
		subdiv.appendChild(price);


		let image = document.createElement("img");
		image.src = productList[i].url;
		subdiv.append(image)

		//Create a break for spacing
		subdiv.appendChild(document.createElement("br"));
		var hr = document.createElement("hr");


		subdiv.style.textAlign = "center";
		subdiv.style.fontWeight = "5oo";
		label.style.fontWeight = "800";
		hr.style.backgroundColor = "lightgray";
		subdiv.style.border = "1px solid gray";
		subdiv.style.borderRadius = "8px"
	
		div.appendChild(subdiv)

		div.appendChild(hr);
	}
}



function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];

	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			var itemArray = []

			var itemValue = (ele[i].value);
			

			//This code was taken off stackoverflow ~ https://stackoverflow.com/questions/36419195/get-index-from-a-json-object-with-value
			let findParams = findByKey('name', itemValue)
			let index = products.findIndex(findParams)

			itemArray.push(products[index].name);
			itemArray.push(products[index].price);


			chosenProducts.push(itemArray);
		}
	}
	return chosenProducts;
	//I want to save it to local storage to be fetched later!		
}


function checkout(){
	getCurrentSelected = selectedItems();

	if(getCurrentSelected != null){
		for(var i=0 ; i < getCurrentSelected.length ; i+=1){
			allSelectedItems.push(getCurrentSelected[i]);
		}

		console.log(allSelectedItems);
	}


	localStorage.setItem("bought",allSelectedItems);
}


//This code was taken off stackoverflow ~ https://stackoverflow.com/questions/36419195/get-index-from-a-json-object-with-value
function findByKey(key, value) {
    return (item, i) => item[key] === value
}


//Method will be used to sort the array based off the cost!
function sortCost(l){
	return l.sort(sortByProperty("price"))
}


function sortByProperty(property){  
	return function(a,b){  
	   if(a[property] > b[property])  
		  return 1;  
	   else if(a[property] < b[property])  
		  return -1;  
   
	   return 0;  
	}  
 }


function main(customerType,priceSorting,organicOnly){
	var letOrganic = false;
	if(organicOnly == "true"){
		letOrganic = true;
	}


	

	var productList = restrictListProducts(customerType,letOrganic);

	if(priceSorting === "true"){
		productList = sortCost(productList);
	}
	
	displayProducts(productList);
}


main(customerType,priceSorting,organicOnly);
