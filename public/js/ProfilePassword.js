"use strict";

const $ = (selector) => document.querySelector(selector);

let bills = [100, 50, 20, 10, 5];

const dispenseMoney = (evt) => {

  evt.preventDefault();  
  
  let money = parseInt($("#money").value);

  let isPossible = false;

  if (money >= 5 && money % 5 == 0) {
    isPossible = true;
  }

  if (isPossible) {
    let moneyLeftToDispense = money;

    for (let bill of bills) {
      if (moneyLeftToDispense >= bill) {
        let amountBills = parseInt(moneyLeftToDispense / bill);

        moneyLeftToDispense = moneyLeftToDispense % bill;
        $(`#bill${bill}s`).value = amountBills;
      }
    }
  } else {
    $("#money-error").textContent = "We can't dispense that amount of money";
  }
};

const validatePhoneNumber = (evt) =>{

  let re = new RegExp("^[0-9]{10}");
  
  let phoneNumber = evt.currentTarget.value;

  if(re.test(phoneNumber)){
    $("#phone-number-error").textContent = "";
  }else{
    $("#phone-number-error").textContent = "The phone number should be in format ##########";
  }

}

document.addEventListener("DOMContentLoaded", () => {

  $("#reset").addEventListener("click", () => {
    $("#money").value = "";
    $("#money-error").textContent = "";

    for (let bill of bills) {
      $(`#bill${bill}s`).value = "";
    }

    $("#money").focus();
  });

  $("#phone-number").addEventListener("input", validatePhoneNumber);

  $("#dispense-button").addEventListener("click", dispenseMoney);

  $("#money").value = 60;

  $("#money").focus();
});