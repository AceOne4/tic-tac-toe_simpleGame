"use strict";
const c1 = document.querySelector("#c-1");
const c2 = document.querySelector("#c-2");
const c3 = document.querySelector("#c-3");
const c4 = document.querySelector("#c-4");
const c5 = document.querySelector("#c-5");
const c6 = document.querySelector("#c-6");
const c7 = document.querySelector("#c-7");
const c8 = document.querySelector("#c-8");
const c9 = document.querySelector("#c-9");
const title = document.querySelector(".app");

//Gloaval variable
const cells = [c1, c2, c3, c4, c5, c6, c7, c8, c9];
const winningCon = [
  [c1, c2, c3],
  [c4, c5, c6],
  [c7, c8, c9],
  [c1, c4, c7],
  [c2, c5, c8],
  [c3, c6, c9],
  [c3, c5, c7],
  [c1, c5, c9],
];

let Palyer = true;
//helper Functions
//checking if all board are ocpuied
const checkCell = function () {
  const checkingFill = cells.every((el) => el.innerHTML !== "");
  return checkingFill;
};
//reloading the page
const reloadGAme = function () {
  setInterval(function () {
    title.innerHTML += ".";
  }, 1000);
  setTimeout(function () {
    location.reload();
  }, 4000);
};
//main function
//checking the winner or draw
const winner = function (e) {
  const check = winningCon
    .map((el) =>
      el.every((it) => it.innerHTML === el[0].innerHTML && it.innerHTML != "")
    )
    .find((a) => a === true);
  if (check) {
    title.innerHTML = `${e} winner`;
    reloadGAme();
  }
  if (checkCell() == true && !check) {
    title.innerHTML = `Draw Try Again`;
    reloadGAme();
  }
};
//checking turns
const gamePlay = function (e) {
  if (Palyer === true && !e.target.innerHTML) {
    e.target.innerHTML = "O";
    Palyer = false;
    title.innerHTML = "X Turns";
  }
  if (Palyer === false && !e.target.innerHTML) {
    e.target.innerHTML = "X";
    Palyer = true;
    title.innerHTML = "O Turns";
  }
  winner(e.target.innerHTML);
};
//click handler
cells.forEach((cel) => cel.addEventListener("click", gamePlay));
