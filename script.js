var docBody = document.getElementsByClassName("container")[0];
var palette = document.getElementById("palette");
var controls = document.getElementById("controls")

docBody.setAttribute("style", "text-align:center");
palette.setAttribute("style", "text-align:center");
controls.setAttribute("style", "text-align:center");

var appendHere = "";
var divRow = [];
var color = "#FFFFFF"
var curColor = color;

//Modular square maker functions

function makeRow(i, appendHere){
  divRow[i] = document.createElement("div");
  appendHere.appendChild(divRow[i])[0];
}

function makeDiv(i, thisClass){
  var newDiv = document.createElement("div");
  newDiv.className = "square" + thisClass;
  newDiv.setAttribute("style", "display:inline-block");
  newDiv.style.border = "1px solid black";
  newDiv.style.padding = ".5%";
  newDiv.style.margin = "0.1%";
  divRow[i].appendChild(newDiv)[0];
}

function makeSquare(tall, wide, appendHere, thisClass){
  for(var i=0;i<tall;i++){
    makeRow(i, appendHere);
    for(var j=0;j<wide;j++){
      makeDiv(i, thisClass);
    }
  }
}

makeSquare(27, 50, docBody, "Body");
makeSquare(1, 7, palette, "Palette");

//Events
controls.addEventListener('click', radioCheck);
controls.style.fontFamily = "sans-serif";

palette.addEventListener('dblclick', setColor);
palette.addEventListener('click', pickColor);
palette.style.fontFamily = "sans-serif";

var allPalette = document.getElementsByClassName("squarePalette");

for(i=0; i<allPalette.length; i++){
  allPalette[i].style.border = "2px solid darkgrey";
  allPalette[i].style.padding = "2%";
}

function radioCheck(){
  if(document.getElementById('colPrimary').checked){
    allPalette[0].style.background = "#FF0000";
    allPalette[1].style.background = "#FF7700";
    allPalette[2].style.background = "#FFDD00";
    allPalette[3].style.background = "#00FF00";
    allPalette[4].style.background = "#0000FF";
    allPalette[5].style.background = "#8A2BE2";
    allPalette[6].style.background = "#C77DF3";
  }
  else if(document.getElementById('colNeon').checked){
    allPalette[0].style.background = "#FF073A";
    allPalette[1].style.background = "#FF9933";
    allPalette[2].style.background = "#F3F315";
    allPalette[3].style.background = "#65FE08";
    allPalette[4].style.background = "#00FFFF";
    allPalette[5].style.background = "#FF00FF";
    allPalette[6].style.background = "#FE019A";
  }
  else if(document.getElementById('colMars').checked){
    allPalette[0].style.background = "#8B0000";
    allPalette[1].style.background = "#C76114";
    allPalette[2].style.background = "#F4A460";
    allPalette[3].style.background = "#CDAF95";
    allPalette[4].style.background = "#CCCCCC";
    allPalette[5].style.background = "#525252";
    allPalette[6].style.background = "#474747";
  }
  else if(document.getElementById('colEarth').checked){
    allPalette[0].style.background = "#436EEE";
    allPalette[1].style.background = "#7D9EC0";
    allPalette[2].style.background = "#B0E2FF";
    allPalette[3].style.background = "#008B00";
    allPalette[4].style.background = "#C1FFC1";
    allPalette[5].style.background = "#EEDC82";
    allPalette[6].style.background = "#8B4726";
  }
  else if(document.getElementById('colJupiter').checked){
    allPalette[0].style.background = "#8E388E";
    allPalette[1].style.background = "#00EEEE";
    allPalette[2].style.background = "#0000EE";
    allPalette[3].style.background = "#9400D3";
    allPalette[4].style.background = "#DC143C";
    allPalette[5].style.background = "#800000";
    allPalette[6].style.background = "#EE4000";
  }
  else {
    allPalette[0].style.background = "#FFFFFF";
    allPalette[1].style.background = "#FFFFFF";
    allPalette[2].style.background = "#FFFFFF";
    allPalette[3].style.background = "#FFFFFF";
    allPalette[4].style.background = "#FFFFFF";
    allPalette[5].style.background = "#FFFFFF";
    allPalette[6].style.background = "#FFFFFF";
  }
}

function setColor(e){
  color = ("#" + prompt("Enter the color as a hexadecimal. \n (Quick guide: \n Red = FF0000) \n Yellow = FFFF00 \n Blue = 0000FF \n Green = 00FF00")).toUpperCase();
  e.target.style.background = color;
  curColor = color;
}

function pickColor(e){
  curColor = e.target.style.background;
}

docBody.addEventListener('mousedown', changeColor);
docBody.addEventListener('mouseover', spreadColor); //thanks to Alex S for tip!

function changeColor(e){
  if (e.target.className == "squareBody"){
    e.target.style.background = curColor;
  }
}

function spreadColor(e){
  if(e.target.className == "squareBody"){
    if(e.shiftKey){
      e.target.style.background = curColor;
    }
  }
}
