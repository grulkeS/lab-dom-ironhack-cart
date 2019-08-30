let divWrapper = document.getElementById("wrapper");

function deleteItem(e){

}

function getPriceByProduct(product){
   //itemNode - paramübergabe
  // const basePrice = Array.from(document.getElementsByClassName('productPrice')).map(price => price.innerHTML.substring(1,price.length));
 const productPrice = product.getchildNodes[0].innerHTML ;
 const productQuantity = product.getchildNodes.getElementById("input").innerHTML ;

 console.log("erhzearhzaerhzae", productPrice, productQuantity )
  const price = parseFloat(productPrice)*parseFloat(productQuantity);
  return price;
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice(event) {
  const product = document.getElementById("input").innerHTML;

  console.log(product);
  
  
  let sum = 0;


  // totalBox.innerHTML="$" + sum;
  return sum;
}

function createQuantityInput(){
  let quantity = document.getElementsByClassName("qtyInput").innerHTML;
  console.log(quantity);
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
  //var calculatePriceButton = document.getElementById('btn-success');
  //var createItemButton = document.getElementById('new-item-create');
  //var deleteButtons = document.getElementsByClassName('btn-delete');
  document.getElementById('btn-success').onclick=getTotalPrice;
  /*let quantity = document.getElementById("input").innerHTML;
  const productAmount = Array.from(document.getElementsByClassName('productPrice')).map(x => x.innerHTML.substring(1,x.length));

  console.log(productAmount);

 
  console.log(quantity);  */
  //calculatePriceButton.onclick = getTotalPrice();
  //createItemButton.onclick = createNewItem;

 /* for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }*/
};

