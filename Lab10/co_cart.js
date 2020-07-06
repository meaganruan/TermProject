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
   document.forms.cart.elements.orderCost.value = formatUSCurrency(orderCost);


   //total order cost with shipping
   //store index 
   var shipCost = (document.querySelector('input[name="shipping"]:checked').value) * (document.forms.cart.elements.modelQty.options[modelCostIndex].value);
   document.forms.cart.elements.shippingCost.value = formatNumber(shipCost, 2);

   //subtotal field
   document.forms.cart.elements.subTotal.value = formatNumber(orderCost + shipCost, 2);

   //salesTax
   var salesTax = 0.05 *(orderCost + shipCost);
   document.forms.cart.elements.salesTax.value = salesTax;

   //cartTotal display

   document.forms.cart.elements.cartTotal.value = formatUSCurrency(orderCost + shipCost + salesTax);
}







function formatNumber(val, decimals) {
   return val.toLocaleString(undefined, {minimumFractionDigits: decimals, 
                                         maximumFractionDigits: decimals});
}

function formatUSCurrency(val) {
   return val.toLocaleString('en-US', {style: "currency", currency: "USD"} );
}
