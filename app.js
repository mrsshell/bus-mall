'use strict';

var maxClicks = 25;
var totalClicks = 0;

function Item (itemName, filePath, timesShown, timesClicked, id) {
  this.itemName = itemName;
  this.filePath = filePath;
  this.timesShown = 0;
  this.timesClicked = 0;
  this.id = id;
  allItems.push(this);
}
var allItems = [];

var itemName = ['bag', 'boots', 'wine-glass', 'banana', 'bathroom', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can'];

var path = ['img/bag.jpg', 'img/boots.jpg', 'img/wine-glass.jpg','img/banana.jpg', 'img/bathroom.jpg', 'img/breakfast.jpg','img/bubblegum.jpg', 'img/chair.jpg', 'img/cthulhu.jpg', 'img/dog-duck.jpg', 'img/dragon.jpg', 'img/pen.jpg','img/pet-sweep.jpg', 'img/scissors.jpg', 'img/shark.jpg', 'img/sweep.png', 'img/tauntaun.jpg', 'img/unicorn.jpg', 'img/usb.gif', 'img/water-can.jpg'];

var ids = ['bag.jpg','boots.jpg', 'wine-glass.jpg', 'banana.jpg', 'bathroom.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', ' tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg'];

function createItems() {
  for (var i = 0; i < itemName.length; i++) {
    new Item(itemName[i], path[i], ids[i]);
  }
}
createItem();

var lastRound = [];
var thisRound = [];

function makeThreeImages(){
  for (var i = 1; i < 4; i++) {
    var indexNum = Math.floor(Math.random() * allItems.length);
    if (lastRound.includes(indexNum) || thisRound.includes(indexNum)){
      i--;
    } else {
      thisRound.push(indexNum);
      allItems[indexNum].timesShown++;
      var linkedImage = document.getElementById('image-' + i);
      linkedImage.setAttribute('src', allItems[indexNum].filePath);
      linkedImage.setAttribute('itemIdx', indexNum);
    }
  }
  lastRound = thisRound;
  thisRound = [];
}
makeThreeImages();

for (var i = 0; i < document.getElelementsByClassName('clickable').length; i++) {
  var image = document.getElementById('image-' + (i + 1));
  image.addEventListener('click', onClick);
}

function onClick (event) {
  var itemIdx = parseInt(event.target.getAttribute('itemIdx'));
  var itemIWant = allItems[itemIdx];
  itemIWant.timesClicked++;
  makeThreeImages();
  totalClicks++;

  if (totalClicks === maxClicks) {
    for (var i = 0; i < document.getElelementsByClassName['clikcable'].length; i++){
      var image = document.getElementById('image' + (i + 1));
      image.removeEventListener('click', onClick);
    }
    var list = document.getElementById('list');
    for(var j = 0; j < allItems.length; j++){
      var li = document.createElement('li');
      li.innerText = allItems[j].itemName = 'was clicked' + allItems[j].timesClicked + 'times';
      list.appendChild('li');
    }
  }
}
//going to build a chart here
function something  () {
  var  ctx = document.getElementById('canvas'.getContext('2d');
  var chart = new Chart (ctx

}

//this is kind of the properties it should have
options:
title: has commas
legend:
scales:
axis


//this is the event handler how many clicks - and then set up three new pick- but I THINK i already did this
function handleClick(event) {
  if (totalClicks < maxClicks){
    event.preventDefault();
    totalClicks++:
    for (var i = 0; i < allItems.length; i++) {
      if (allItems[i].name === event.target.id) {
        allItems[i].timesClicked++;
      }
    }
    removeOld();
    makeThreeImages();

  }
  else {
    removeOld();

  }
}
//store things in a string array - parseInt and then access through with stringify .
//store the click array and and display arrray in one object

//localStorage.setItem(JSON.stringify('click', 'display'))


//object.timesShown
//array = getItem(JSON.parse(timesShown))
//array[i]+= new timesShown
//send back to localStorage


//tracking
//[timesShown, timesClicked]  var storedTimesShown = [] var storedTimesClicked = []

//if (storage is empty)
//stored timesShown = timesShown
//store it();
//else
//stores timesShown + timesShown
//store it();

var clickData =
