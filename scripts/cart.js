//I want to fetch what the user purchased
var chosenProduct = localStorage.getItem("bought");
console.log(chosenProduct);


function stringParser(chosenProduct){
    newString = "";
    newArray = []

    for(let i = 0 ; i < chosenProduct.length ; i++){
        if(chosenProduct[i] != ","){
            newString = newString + chosenProduct[i];
            
            if(i==chosenProduct.length-1){
                newArray.push(newString)}}
                
        else{
            newArray.push(newString);
            newString = ""}}

    return newArray;}





function displayCart(chosenProduct){
    let div = document.getElementById("cartList");
    div.style.display = "block"
	
	for(i=0 ; i<chosenProduct.length ; i = i + 2){

        var subdiv=  document.createElement("div");

        var text = document.createElement("span");
        text.textContent =  chosenProduct[i] + " - " + chosenProduct[i+1] +"$";
        subdiv.appendChild(text);

        subdiv.style.backgroundColor = "#f3f3f3";
        subdiv.style.width = "25%";
        subdiv.style.minWidth = "275px";
        subdiv.style.border = "1px solid gray"
        subdiv.style.textAlign = "center"
        subdiv.style.margin = "15px auto"
        subdiv.style.padding = "10px"
        subdiv.style.borderRadius = "5px";
        


        div.appendChild(subdiv);

        
    }


    //At the very end I want to display the cost!

    var costDiv = document.createElement("div");
    costDiv.style.backgroundColor = ("black");
    costDiv.style.margin = "25px auto";
    costDiv.style.textAlign = "center";
    costDiv.style.minWidth = "220px";
    costDiv.style.width = "10%";
    costDiv.style.borderRadius = "5px";
    costDiv.style.color = "white";
    costDiv.style.height = "50px";
    costDiv.style.lineHeight = "50px";
    costDiv.style.fontFamily = "Cursive";


    var cost = computeCost(chosenProduct);
    var costText = document.createElement("p");
    costText.textContent = "Total : " + cost + "$";
    costDiv.appendChild(costText);
    var button = document.createElement("button");
    button.innerText = "Pay Now!"
    costDiv.append(button);
    costDiv.append(document.createElement("hr"))
    div.appendChild(costDiv);

}



function computeCost(chosenProduct){
    let cost = 0;

    for(i=1 ; i<chosenProduct.length ; i = i + 2){
        cost = cost + parseFloat(chosenProduct[i])
    }
    return cost.toFixed(2);
}



var listOfProducts = stringParser(chosenProduct);
console.log(listOfProducts);
displayCart(listOfProducts);
var x = computeCost(listOfProducts);