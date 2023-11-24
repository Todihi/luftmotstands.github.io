"use strict";

let service;
let serviceName;
let date;
let data;
let spot;

document.getElementById("divData").hidden = true;
document.getElementById("input").hidden = true;

function addSighting(service) {
  document.getElementById("service").hidden = true;
  document.getElementById("input").hidden = false;
  date = new Date();
  switch (service) {
    case 1:
      serviceName = "Foodora";
      break;
    case 2:
      serviceName = "Wolt";
      break;
  }
}

function storeSighting() {
  document.getElementById("input").hidden = true;
  document.getElementById("divData").hidden = false;
  spot = document.getElementById("spot").value;
  data = date.toDateString() + " " + spot;
  localStorage.setItem(
    serviceName,
    localStorage.getItem(serviceName) + "\n" + data
  );
  document.getElementById("p1").innerText = localStorage.getItem("Foodora");
  document.getElementById("p2").innerText = localStorage.getItem("Wolt");
}

function history() {
  document.getElementById("divData").hidden = false;
  document.getElementById("service").hidden = true;
}

document.getElementById("p1").innerText = localStorage.getItem("Foodora");
document.getElementById("p2").innerText = localStorage.getItem("Wolt");
