'use strict';

var maxClicks = 25;
var productArray = [];
var totalClicks = 0;
var allItems = [];

function Item (name, path, id) {
  this.name = name;
  this.path = path;
  this.id = id;
  this.timesShown = 0;
  this.timesClicked = 0;
  // this.allItems.push(this);
}

var name = ['bag', 'boots', 'wine-glass','banana', 'bathroom', 'breakfast','bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen','pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can'];

var path = ['img/bag.jpg', 'img/boots.jpg', 'img/wine-glass.jpg','img/banana.jpg', 'img/bathroom.jpg', 'img/breakfast.jpg','img/bubblegum.jpg', 'img/chair.jpg', 'img/cthulhu.jpg', 'img/dog-duck.jpg', 'img/dragon.jpg', 'img/pen.jpg','img/pet-sweep.jpg', 'img/scissors.jpg', 'img/shark.jpg', 'img/sweep.jpg', 'img/tauntaun.jpg', 'img/unicorn.jpg', 'img/usb.jpg', 'img/water-can.jpg'];

var id = ['bag.jpg', 'boots.jpg', 'wine-glass.jpg','banana.jpg', 'bathroom.jpg', 'breakfast.jpg','bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg','pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.jpg', 'tauntaun.jpg', 'unicorn.jpg', 'usb.jpg', 'water-can.jpg'];

function createItem() {
  for (var i = 0; i < name.length; i++) {
    var obj = new Item(name[i], path[i], id[i]);
    allItems.push(obj);
  }
}
createItem();
//
// var thisRound = [];
// var lastRound= [];
// function makeThree(){
//   for (var i = 0; i < 3; i++) {
//     var indexNum = Math.floor(Math.random() * allItems.length)
//     if (lastRound.includes(indexNum) || thisRound.includes(indexNum)){
//       i--;
//     } else {
//   thisRound.push(indexNum);
//   allItems[indexNum].timesShown++;
//   var linkedImage = document.getElementsById('id' = i);
//   linknkedImage.setAttribute('src',allItems[indexNum].filepath);
//   linkedImage.setAttribute('index',indexNum);
//     }
//   }
// lastRound = thisRound;
// thisRound[];
// }
// makeThree();
//   for ( i = 0; i < document.getElementsByClass('clickable').length; i++) {
//   var image = getElementById('image-' + (i + i));//
//   image.addEventListener('click', onClick);
// }
// function onClick(event){
//   if (totalClicks === maxClicks){
//   totalClicks++;
//   var itemIdx = parsInt(event.target.getAttribute('itemIdx'));
//   var itemIwant = allitem[itemIdx];
//   itemIwant.timesClicked++;
//   makeThree();
//   {
// }
// for(var i = 0; i < document.getElementsByClass('clickable').length; i++) {
//   var image = getElementById('image-' + (i + i));
//   image.removeEventListener('click', onClick);
// }
// var list = document.getElementByTagName('list');
// for(var j = 0; j < allItems.length; j++){
//   var li =documen.createElement('li');
//
//   allItems[i].name = 'was clicked' + allItems[i].timesClicked + 'times';
//   appendChild.list('li');
//
//  }
// li.innerText = 'Done Clicking';
//
//   }
//
// }
