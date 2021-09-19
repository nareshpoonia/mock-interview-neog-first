var inputText = document.querySelector(".input-text");
var redButton = document.querySelector(".red-btn");
var greenButton = document.querySelector(".green-btn");

redButton.addEventListener("click", function () {
  inputText.style.color = "red";
});

greenButton.addEventListener("click", function () {
  inputText.style.color = "green";
});
