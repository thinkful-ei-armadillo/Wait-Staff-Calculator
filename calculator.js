/* global $, store */

'use strict'; 

const calculator = (function(){
  function generateMealDetails(){
    return ` 
        <label for="base-meal-price">Base Meal Price $</label>
        <input type="number" for="base-meal-price" value="9.99" class="input" step=".01" min=".01" id="base-meal-price" required><br>
        <label for="tax rate">Tax Rate %</label>
        <input type="number" for="tax-rate" value="6.025" class="input" step=".001" min=".001" id="tax-rate"required><br>        
        <label for="tip-percentage">Tip Percentage %</label>
        <input type="number" for="tip percentage" value="15" min="0" class="input" id="tip-percentage" required><br>
        <input type="submit" for="submit input" value="Submit" class="button" id="submit-input">
    `; 
  }
  function generateCustomerCharges(){
    return `
      <fieldset class="customer-charges-container">
        <legend>Customer Charges</legend>
        <section>
          Subtotal: ${store.subTotal}<br>
          Tip: ${store.tip}<br>
          <hr>
          Total: ${store.total}
        </section>
      </fieldset>
    `;
  }

  function generateMyEarningsInfo(){
    return `
      <fieldset class="my-earnings-container">
        <legend>My Earnings Info</legend>
        <section>
          Tip Total: ${store.tipTotal}<br>
          Meal Count: ${store.mealCount}<br>
          Average Tip Per Meal: ${store.averageTip}
        </section>
      </fieldset>
    `;
  }

  function render(){
    $('#js-meal-details-form').html(generateMealDetails());
    console.log('generate meal details ran');  
    $('#js-customer-charges').html(generateCustomerCharges());
    console.log('generate customer changes ran'); 
    $('#js-my-earnings-info').html(generateMyEarningsInfo()); 
    console.log('generate my earnings info ran'); 
  }

  function handleSubmit(){
    $('#js-meal-details-form').submit(function(event){
      event.preventDefault(); 
      const baseMealPrice = $('#base-meal-price').val();
      const taxRate = $('#tax-rate').val();
      const tipPercentage = $('#tip-percentage').val();
      store.userInput(baseMealPrice, taxRate, tipPercentage);
      store.mealCount++; 
      store.calculations();
      render();   
    });
  }

  function handleReset(){
    $('#reset-button').on('click', function(){
      console.log('reset button clicked'); 
    });
  }

  return{
    handleReset,
    handleSubmit,
    render,
  };
}()); 

