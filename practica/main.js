const number = document.getElementById("number");

function incrementNumber() {
  const currentValue = parseInt(number.innerText);
  number.innerText = currentValue + 1;
  number.style.animation = "moveNumber ease 1s forwards 0s";
  setTimeout(() => {
    number.style.animation = "";
  }, 250);
}
