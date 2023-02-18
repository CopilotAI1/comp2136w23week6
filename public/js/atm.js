"use strict";

const timeElement = document.querySelector(".time");

const dateElement = document.querySelector(".date");

function formatTime(date) {
  const hours12 = date.getHours() % 12 || 12;
  const minutes = date.getMinutes();
  const isAm = date.getHours() < 12;

  return `${hours12.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")} ${isAm ? "AM" : "PM"}`;
}
function formatDate(date){

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;
}

setInterval(() =>{
  const now = new Date ();

  timeElement.textContent = formatTime(now);
  dateElement.textContent = formatDate(now);
}, 1000);

const $ = (selector) => document.querySelector(selector);

let temp = [100, 50, 20, 10, 5];

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
