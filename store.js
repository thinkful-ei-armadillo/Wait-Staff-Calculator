'use strict'; 
const store = (function(){
  function userInput(price, tax, tip){
    this.baseMealPrice = price;
    this.taxRate = tax; 
    this.tipPercentage = tip; 
  }

  function calculations(){
    this.subTotal = Number((this.baseMealPrice * (1+(this.taxRate * .01))).toFixed(2));
    this.tip = Number((this.subTotal * (this.tipPercentage * .01)).toFixed(2));
    this.total = this.subTotal + this.tip; 
    this.tipTotal = Number((this.tipTotal + this.tip).toFixed(2));
    this.averageTip = Number((this.tipTotal/this.mealCount).toFixed(2));  
  }

  return{
    baseMealPrice: null, 
    taxRate: null,
    tipPercentage:null,
    subTotal: null,
    tip: null, 
    total: null,
    tipTotal: null,
    mealCount: 0,
    averageTip: null, 

    userInput,
    calculations, 
  };   
}()); 