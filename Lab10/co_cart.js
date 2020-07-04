"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Review Assigment

   Shopping Cart Form Script
   
   Author: Meagan Ruan
   Date:   7/3/2020
   
   Filename: co_cart.js
   
   Function List
   =============
   
   calcCart()
      Calculates the cost of the customer order
      
   formatNumber(val, decimals)
      Format a numeric value, val, using the local
      numeric format to the number of decimal
      places specified by decimals
      
   formatUSACurrency(val)
      Formats val as U.S.A. currency
   
*/ 

window.addEventListener("load", function(){
   calcCart();
   document.forms.cart.elements.modelQty.addEventListener("change", calcCart);

   var shippingoption = document.querySelector('input[name="shippingType"]');
   for(var i =0; i < shippingoption.length; i++){
      shippingoption[i].onclick = calcCart;
   }
});


function calcCart(){
   //total order cost of item
   var modelCostIndex = document.forms.cart.elements.modelQty.selectedIndex;
   var orderCost = (document.forms.cart.elements.modelCost.value) * (document.forms.cart.elements.modelQty.options[modelCostIndex].value);
   formatUSCurrency(orderCost);

   //total order cost with shipping
   var shippingIndex = document.forms.cart.elements.shippingType.selectedIndex;
   var shipCost = (document.forms.cart.elements.shippingType.options[shippingIndex].value) * (document.forms.cart.elements.modelQty.options[modelCostIndex].value);
   formatNumber(shipCost, 2);
   console.log(shipCost);
}







function formatNumber(val, decimals) {
   return val.toLocaleString(undefined, {minimumFractionDigits: decimals, 
                                         maximumFractionDigits: decimals});
}

function formatUSCurrency(val) {
   return val.toLocaleString('en-US', {style: "currency", currency: "USD"} );
}
