/* global $ */

'use strict'; 

function generateMealDetails(){
  return ` <fieldset class="meal-details">
  <legend>Enter the Meal Details</legend>
    <form for="entering meal details" class= "js-meal-details-form">
      <label for="base meal price">Base Meal Price $</label>
      <input type="number" for="base meal price" value="9.99" class="input" step=".01" min=".01" id="meal-price" required><br>
      <label for="tax rate">Tax Rate %</label>
      <input type="number" for="tax rate" value="6.025" class="input" step=".001" min=".001" id="tax-rate" required><br>        <label for="tip percentage">Tip Percentage %</label>
      <input type="number" for='tip percentage' value="15" min="0" class="input" id="tip" required><br>
      <input type="submit" for='submit input' class="button">
      <input type="submit" for="cancel" value="Clear" class="button">
    </form>
    </fieldset>`; 
}

function renderMealDetails(){
  $('.meal-details-container').html(generateMealDetails); 
}

const mealPrice = function(){
  return $('#meal-price').val(); 
};

const taxRate = function(){
  return $('#tax-rate').val(); 
};

const tip = function(){
  return $('#tip').val(); 
}; 

function handleSubmit(){
  $('.js-meal-details-form').submit(function(event){
    event.preventDefault;
    mealPrice();
    taxRate();
    tip();   
  });
}

function runAll(){
  handleSubmit(); 
  renderMealDetails(); 
}
$(runAll);