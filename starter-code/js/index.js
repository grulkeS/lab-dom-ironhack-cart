

function deleteItem(e){

}

function getPriceByProduct(product){
   //itemNode - paramübergabe
  // const basePrice = Array.from(document.getElementsByClassName('productPrice')).map(price => price.innerHTML.substring(1,price.length));
 /*const productPrice = product.getchildNodes[0].innerHTML ;
 const productQuantity = product.getchildNodes.getElementById("input").innerHTML ;

 console.log("erhzearhzaerhzae", productPrice, productQuantity )
  const price = parseFloat(productPrice)*parseFloat(productQuantity);
  return price;*/

 const priceByProduct = Array.from(document.getElementsByClassName("productPrice")).map(price => price.innerHTML.substring(1,price.length));
 console.log(priceByProduct)
 return parseFloat(priceByProduct);

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice(event) {
  const product = document.getElementsByClassName("product")[0];
  console.log(product);
  const productQuantities=document.getElementsByTagName("input")[0].value;
  console.log(productQuantities)
  
  document.getElementsByClassName("totalPrice")[0].getElementsByTagName("p").innerHTML = parseFloat(getPriceByProduct(product)*parseInt(productQuantities));
}

function createQuantityInput(){
  //let quantity = document.getElementsByClassName("qtyInput").innerHTML;
  //console.log(quantity);
}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('btn-Calculate');
  //var createItemButton = document.getElementById('new-item-create');
  //var deleteButtons = document.getElementsByClassName('btn-delete');
  //document.getElementById('btn-success').onclick=getTotalPrice;
  /*let quantity = document.getElementById("input").innerHTML;
  const productAmount = Array.from(document.getElementsByClassName('productPrice')).map(x => x.innerHTML.substring(1,x.length));

  console.log(productAmount);

 
  console.log(quantity);  */
  const productQuantities=document.getElementsByTagName("input")[0].value;
  console.log(productQuantities)
  calculatePriceButton.onclick = getTotalPrice();
  console.log(getTotalPrice)
  //createItemButton.onclick = createNewItem;

 /* for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }*/
};

