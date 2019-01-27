/* global $ */

'use strict'; 

function generateMealDetails(){
  return `<legend>Enter the Meal Details</legend>
        <form for="entering meal details">
            <label for="base meal price">Base Meal Price $</label>
            <input type="number" for="base meal price" value="9.99" class="input" step=".01" min=".01" required><br>
            <label for="tax rate">Tax Rate %</label>
            <input type="number" for="tax rate" value="6.025" class="input" step=".001" min=".001" required><br>
            <label for="tip percentage">Tip Percentage %</label>
            <input type="number" for='tip percentage' value="15" min="0" class="input" required><br>
            <input type="submit" for='submit input' class="button">
            <input type="submit" for="cancel" value="Clear" class="button">
        </form>`;
}

function render(){
  $('#meal-details').html(generateMealDetails); 
}

$(render);