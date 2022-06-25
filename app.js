"use strict";
function updateCaseNumber(product, price, isIncreasing) {
  const caseInput = document.getElementById(product + "-input");
  let caseNumber = caseInput.value;
  if (isIncreasing) {
    caseNumber = parseInt(caseNumber) + 1;
  } else {
    caseNumber = parseInt(caseNumber) - 1;
  }
  caseInput.value = caseNumber;
  // Update Total Case
  const totalCase = document.getElementById(product + "-total");
  totalCase.innerText = caseNumber * price;
  // calculateTotalPrice
  calculateTotalPrice();
}
// Phone
document.getElementById("phone-plus").addEventListener("click", function () {
  updateCaseNumber("phone", 1219, true);
});
document.getElementById("phone-minus").addEventListener("click", function () {
  updateCaseNumber("phone", 1219, false);
});
// Case
document.getElementById("case-plus").addEventListener("click", function () {
  updateCaseNumber("case", 59, true);
});
document.getElementById("case-minus").addEventListener("click", function () {
  updateCaseNumber("case", 59, false);
});
function getInputValue(product) {
  let productValue = document.getElementById(product + "-input").value;
  let productNumber = parseInt(productValue);
  return productNumber;
}
// Calculate Total Price
function calculateTotalPrice() {
  const phoneTotal = getInputValue("phone") * 1219;
  const caseTotal = getInputValue("case") * 59;
  const subTotal = phoneTotal + caseTotal;
  const taxAmount = subTotal / 10;
  const totalPrice = subTotal + taxAmount;
  // SubTotal show in UI
  document.getElementById("sub-total").innerText = subTotal;
  document.getElementById("tax-amount").innerText = taxAmount;
  document.getElementById("total-price").innerText = totalPrice;
}
