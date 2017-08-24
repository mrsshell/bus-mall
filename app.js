'use strict';

var maxClicks = 25;
// var productArray = [];
var totalClicks = 0;
var allItems = [];

function Item (itemName, path, id) {
  this.itemName = itemName;
  this.path = path;
  this.id = id;
  this.timesShown = 0;
  this.timesClicked = 0;
  // this.allItems.push(this);
}

var itemName = ['bag', 'boots', 'wine-glass', 'banana', 'bathroom', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can'];

var path = ['img/bag.jpg', 'img/boots.jpg', 'img/wine-glass.jpg','img/banana.jpg', 'img/bathroom.jpg', 'img/breakfast.jpg','img/bubblegum.jpg', 'img/chair.jpg', 'img/cthulhu.jpg', 'img/dog-duck.jpg', 'img/dragon.jpg', 'img/pen.jpg','img/pet-sweep.jpg', 'img/scissors.jpg', 'img/shark.jpg', 'img/sweep.png', 'img/tauntaun.jpg', 'img/unicorn.jpg', 'img/usb.gif', 'img/water-can.jpg'];

function createItem() {
  for (var i = 0; i < itemName.length; i++) {
    var obj = new Item(itemName[i], path[i], i);
    allItems.push(obj);
  }
}
createItem();

var lastRound = [];
var thisRound = [];
function makeThree(){
  divElement.innerHtml = '';
  for (var i = 0; i < 3; i++) {
    var indexNum = Math.floor(Math.random() * allItems.length);
    if (lastRound.includes(indexNum) || thisRound.includes(indexNum)){
      i--;

      thisRound.push(indexNum);
      allItems[indexNum].timesShown++;
      var divElement = document.getElementById('imageDiv');
      var imageElement =document.createElement('img');

      imageElement.setAttribute('id') = 'image' + ( i + 1 );
      imageElement.setAttribute('calss') = 'clickable';
      imageElement.src = indexNum.path;
      divElement.appendChild(imageElement);

      // linkedImage.setAttribute('src',allItems[indexNum].path);
      // linkedImage.setAttribute('index',indexNum);
      // linkedImage.addEventListener('click', onClick);
    }
  }
  lastRound = thisRound;
}
makeThree();

function onClick(event){
  for (var i = 0; i < allItems.length; i ++) {
    if (allItems[i].path === event.target.src)
      allItems[i].thmesCilcked += 1;
    totalClicks++;
  }

  var itemIdx = parseInt(event.target.id);
  var itemIwant = allItems[itemIdx];
  itemIwant.timesClicked += 1;
  makeThree();

  // for(var i = 0; i < 3; i++) {
  //   var image = document.getElementById('image-' + (i + 1));
  //   image.removeEventListener('click', onClick);
  // }
  var list = document.getElementByTagName('list');
  for(var j = 0; j < allItems.length; j++){
    var li = document.createElement('li');
    allItems[i].itemName = 'was clicked' + allItems[i].timesClicked + 'times';
    appendChild.list('li');
  }
  // li.innerText = 'Done Clicking';

}
