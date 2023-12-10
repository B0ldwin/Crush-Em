


<section id="paySection">
      <h1>Payment Form</h1>
      

      <form id="payment" name="payment" method="post" action="paysubmit.html">         
         <fieldset id="creditcard">
            <legend>Credit Information</legend>

            <label for="cardName">Name*</label>
            <input name="cardName" id="cardName" required type="text" />              

            <label>Credit Card*</label>
            <fieldset id="cards">
               <label class="cardLabel">
                  <input name="credit" value="amex" type="radio" required />               
                  <span>American Express</span>
               </label>
               <label class="cardLabel">               
                  <input name="credit" value="discover" type="radio" />
                  <span>Discover</span>
               </label>
               <label class="cardLabel">                              
                  <input name="credit" value="master" type="radio"  />
                  <span>MasterCard</span>
               </label>
               <label class="cardLabel">                                    
                  <input name="credit" value="visa" type="radio"  />
                  <span>Visa</span>
               </label>
            </fieldset>          

            <label for="cardNumber">Credit Card Number*</label>
            <input name="cardNumber" id="cardNumber" required type="text"
                   pattern="^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$"/>

            <label for="expMonth">Expiration Date*</label>
            <select id="expMonth" name="expMonth">
               <option value="mm">mm</option>
               <option value="01">01</option>
               <option value="02">02</option>
               <option value="03">03</option>
               <option value="04">04</option>
               <option value="05">05</option>
               <option value="06">06</option>
               <option value="07">07</option>
               <option value="08">08</option>
               <option value="09">09</option>
               <option value="10">10</option>
               <option value="11">11</option>
               <option value="12">12</option>
            </select>
            <span id="separator"> / </span>
            <select id="expYear" name="expYear">
               <option value="yy">yy</option>
               <option value="2022">2022</option>
               <option value="2023">2023</option>
               <option value="2024">2024</option>
               <option value="2025">2025</option>
               <option value="2026">2026</option>
            </select>            

            <label for="cvc">CVC*</label>
            <input name="cvc" id="cvc" required pattern="^\d{3,4}$" type="text"/>
         </fieldset>

         <p id="footnote">* - Required Item</p>        
         <input type="submit" id="subButton" value="Submit Payment" />         
      </form>

   </section>


let subButton = document.getElementById("subButton");

// Validate the payment when the submit button is clicked
subButton.addEventListener("click", validateName);
subButton.addEventListener("click", validateMonth);
subButton.addEventListener("click", validateYear);

// Check if the owner's name is entered on the cardfunction
validateName() {
	let cardName = document.getElementById("cardName");
	if (cardName.validity.valueMissing) {
		cardName.setCustomValidity("Enter your name as it appears on the card");
	} else {
		cardName.setCustomValidity("");
	}
}

// Check if a credit card has been selected
function validateCard() {
	let card = document.forms.payment.elements.credit[0];
	if (card.validity.valueMissing) {
		card.setCustomValidity("Select your credit card");
	} else {
		card.setCustomValidity("");
	}
}

// Check if the card number is valid
function validateNumber() {
	let cNum = document.getElementById("cardNumber");
	if (cNum.validity.valueMissing) {
		cNum.setCustomValidity("Enter your card number");
	} else if (cNum.validity.patternMismatch) {
		cNum.setCustomValidity("Enter a valid card number"");
	} else if (luhn(cNum.value) === false) {
		cNum.setCustomValidity("Enter a legitimate card number");
	} else {
		cNum.setCustomValidity("");
	}
}

// Check that a month is selected for the expiration date
function validateMonth() {
	let month = document.getElementById("expMonth");
	if (month.selectedIndex === 0) {
		month.setCustomValidity("Select the expiration month");
	} else {
		month.setCustomValidity("");
	}
}

// Check that a year is selected for the expiration date
function validateYear() {
	let year = document.getElementById("expYear");
	if (year.selectedIndex === 0) {
		year.setCustomValidity("Select the expiration year");
	} else {
		year.setCustomValidity("");
	}
}

function validateCVC() {
	// Determine which card was selected
	let card = document.querySelector('input[name="credit"]:checked').value;
	let cvc = document.getElementById("cvc");
	
	// Validate the CVC value
	if (cvc.validity.valueMissing) {
		cvc.setCustomValidity("Enter your CVC number");
	} else if ((card === "amex") && !(/^\d{4}$/.test(cvc.value))) {
		cvc.setCustomValidity("Enter a 4-digit number");
	} else if ((card !== "amex") && !(/^\d{3}$/.test(cvc.value))) {
		cvc.setCustomValidity("Enter a 3-digit number");
	} else {
		cvc.setCustomValidity("");
	}
}


















/* ------- Luhn Algorithm used for Validating Credit Card Numbers   ----- */

function luhn(idNum) {
   let string1 = "";
   let string2 = "";
   
   // Retrieve the odd-numbered digits starting from the back
   for (let i = idNum.length - 1; i >= 0; i-= 2) {
      string1 += idNum.charAt(i);
   }
   // Retrieve the even-numbered digits starting from the back and double them
   for (let i = idNum.length - 2; i >= 0; i-= 2) {
      string2 += 2*idNum.charAt(i);
   }
   
   // Return whether the sum of the digits is divisible by 10
   return sumDigits(string1 + string2) % 10 === 0;
   
   function sumDigits(numStr) {
      let digitTotal = 0;
      for (let i = 0; i < numStr.length; i++) {
         digitTotal += parseInt(numStr.charAt(i));
      }
      return digitTotal;
   }
}
   