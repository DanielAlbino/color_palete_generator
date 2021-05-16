let code = document.querySelectorAll(".code");
let color = document.querySelectorAll(".color");
let btn = document.querySelector("button");

function colorGen() {
  var letters = "0123456789abcdef";

  var hastag = ["#", "#", "#", "#", "#", "#"];

  for (let i = 0; i < 6; i++) {
    hastag[i] += letters[Math.floor(Math.random() * 16)];
    hastag[i] += letters[Math.floor(Math.random() * 16)];
    hastag[i] += letters[Math.floor(Math.random() * 16)];
    hastag[i] += letters[Math.floor(Math.random() * 16)];
    hastag[i] += letters[Math.floor(Math.random() * 16)];
    hastag[i] += letters[Math.floor(Math.random() * 16)];
  }

  for (let i = 0; i < code.length; i++) {
    code[i].innerHTML = "<b>" + hastag[i] + "</b>";
    color[i].style.backgroundColor = hastag[i];
  }
}

colorGen();
