function getMenueTemplate(indexMenues){
    return`
     <div class="maindish">
   
           <div class="plus">        
               <h2> ${menue[indexMenues].name} </h2> <img src="" alt=""> 
               <img onclick="addMenueToArrayBasket(${indexMenues})" class="plus-img" src="assets/icons/plus.png" alt="">                                               
           </div>      
   
           <p> ${menue[indexMenues].description}  </p>
           <h4> ${menue[indexMenues].price}€ </h4>
   
       </div>
    `
   }


   function renderBasket(item, i){
    return`

        <p> ${item.name} </p>
        <div class="order"> 
            <button onclick ="decreaseAmount(${i})" >   <img class="order-icons" src="assets/icons/minus-sign.png" alt="">  </button>  
            <p> ${item.amount} X </p>
            <button onclick="increaseAmount(${i})" >  <img class="order-icons" src="assets/icons/plus.png" alt=""> </button>
            <p>  ${item.price * item.amount} € </p>
            <button onclick="spliceDish(${i})">  <img class="order-icons" src="assets/icons/trash-can.png" alt=""></button>
        </div>
    `
   }


