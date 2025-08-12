
function init(){   
    rendermenues();

}



function rendermenues(){     
    let menues = document.getElementById(`menue`);
    menues.innerHTML = "";

    for (let indexMenues = 0; indexMenues < menue.length; indexMenues++) {
        menues.innerHTML += getMenueTemplate(indexMenues)
        
    }

}



function addMenue(){
    let basketcontent = document.getElementById(`basket_add`);
    basketcontent.innerHTML = "";
    
    for (let i = 0; i < basket.length; i++) {
        let item = basket[i];
        basketcontent.innerHTML += renderBasket(item, i);
        
    }
    
}



function addMenueToArrayBasket(indexMenues){
    let dish = menue[indexMenues];

    const find = basket.find(item => item.name === dish.name);

    if (find){
        find.amount += 1;
    }
    else{


    basket.push({
            name: dish.name,
            price:dish.price,
            amount:1

    });
 }
    addMenue();
    calcsum();

}


function decreaseAmount(i){

    if (basket[i].amount === 1){
        basket.splice(i,1);
    }
    else{
        basket[i].amount--;
    }

    addMenue();
    calcsum();
}


function increaseAmount(i){

    basket[i].amount += 1;  
    addMenue(); 
    calcsum();

}


function spliceDish(i){
   basket.splice(i,1);

    addMenue();
    calcsum();
}


function calcsum(){
    let subtotal = 0;
    let delivery = 5;

  for (let index = 0; index < basket.length; index++) {
    let element = basket[index];
    subtotal += element.amount * element.price;
  }
  let total = subtotal + delivery;

  document.getElementById('subtotal').textContent = subtotal.toFixed(2);
  document.getElementById('delivery').textContent = delivery.toFixed(2);
  document.getElementById('total').textContent = total.toFixed(2);
}


function order() {
    document.getElementById("overlay").style.display = "block";
    basket = [];
    addMenue();
    calcsum();
  }


function closeOverlay(){
    document.getElementById("overlay").style.display = "none";
}


function openBasket(){
    const basket = document.getElementById("basket_div");
    basket.classList.remove("hide-mobile");


}


function closeBasket(){
    const basket = document.getElementById("basket_div");
    basket.classList.add("hide-mobile");

}
   
   
  


    

