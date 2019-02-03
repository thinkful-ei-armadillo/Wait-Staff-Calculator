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

  function reset(){
    this.baseMealPrice = 0; 
    this.taxRate = 0; 
    this.tipPercentage = 0; 
    this.subTotal = 0; 
    this.tip = 0;
    this.total = 0; 
    this.tipTotal = 0; 
    this.mealCount = 0; 
    this.averageTip = 0; 
  }

  return{
    baseMealPrice: 0, 
    taxRate: 0,
    tipPercentage: 0,
    subTotal: 0,
    tip: 0, 
    total: 0,
    tipTotal: 0,
    mealCount: 0,
    averageTip: 0, 

    userInput,
    calculations,
    reset, 
  };   
}()); 