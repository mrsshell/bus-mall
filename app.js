'use strict';
var maxClicks = 25;
var productArray = [];
// var upNext = [];
var totalClicks = 0;
// place = ["firstPic","secondPic","thirdPic"];

function Item(name, filepath, timesClicked, id) {
this.name = name;
this.filepath = []
this.timesShow = timesShow;
this.timesClicked= timesClicked;// this.id
this.id = id;
this.allItems.push(this);

};
//
// var allitems =[] (i named this products)

var names = ['bag', 'boots', 'wine-glass','banana', 'bathroom', 'breakfast','bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen','pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can'];


var path = ['img/bag.jpg', 'img/boots.jpg', 'img/wine-glass.jpg','img/banana.jpg', 'img/bathroom.jpg', 'img/breakfast.jpg','img/bubblegum.jpg', 'img/chair.jpg', 'img/cthulhu.jpg', 'img/dog-duck.jpg', 'img/dragon.jpg', 'img/pen.jpg','img/pet-sweep.jpg', 'img/scissors.jpg', 'img/shark.jpg', 'img/sweep.jpg', 'img/tauntaun.jpg', 'img/unicorn.jpg', 'img/usb.jpg', 'img/water-can.jpg'];

var id = ['bag.jpg', 'boots.jpg', 'wine-glass.jpg','banana.jpg', 'bathroom.jpg', 'breakfast.jpg','bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg','pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.jpg', 'tauntaun.jpg', 'unicorn.jpg', 'usb.jpg', 'water-can.jpg'];



var bag = new item(img src="img/bag.jpg");
var boots = new item(img src="img/boots.jpg");
var  glass = new item(img src="img/wine-glass.jpg");
var  banana = new item(img src="img/banana.jpg");
bathroom = new item(img src="img/bathroom.jpg");
var  breakfast = new item(img src="img/breakfast.jpg");
var  bubblegum =  new item(img src="img/bubblegum.jpg");
var  chair =  new item(img src="img/chair.jpg");
var  cthulu = new item(img src="img/cthulhu.jpg");
var  dog-duck = new item(img src="img/dog-duck.jpg");
var  dragon = new item(img src="img/dragon.jg");
var  pen = new item(img src="img/pen.jpg");
var  pet-sweep = new item(img src="img/pet-sweep.jpg");
var  scissors = new item(img src="img/scissors.jpg");
var  shark = new item(img src="img/shark.jpg");
var  sweep = new item(img src="img/sweep.jpg");
var  tauntaun = new item(img src="img/tauntaun.jpg");
var  unicorn =  new item(img src="img/unicorn.jpg");
var  usb = new item(img src="img/usb.jeg");
var water-can= new item(img src="img/water-can.jpg")



function createItem() {
var getNewImages = (){
  for (var i = 0; i <= names.length; i++) {
    new Item(name[i],path[i],id[i]);

createItem();
var this round = [];//contains whatee was generated
var last round= []//containd whateer was generated
//for each iteration create a new item object using names, path and id arrays
function makeThree(){
  //write a foeloop whre each iteration will select a distinct imagesdistinct  images haven't been used in current set or in the sast set

  for (var i = 0; i < 4; i++) {
    var indexNum =Math.floor(Math.random() *allitems[i]
    if (lastRound.includes(indexNum) || thisRound.includes(indexnum)){
      i--;//allows the for loop to step back one iteration

    }else{
      // unique number - add it to this round
  thisRound.push(indexNum);
  allItems[indexNum].timesShown++;
  var linkedImage = document.getElementsById('id' = i);
  linknkedImage.setAttribute('src',allItems[indexNum].filepath);
  linkedImage.setAttribute('index',indexNum);
    }
  }
  //assign lastRound to this round so that this current set of numbers is reserved
lastRound = thisRound;
thisRound[];
}
makeThree();


//add event listener to every tagin a for loop
  for ( i = 0; i < document.getElementsByClass('clickable').length; i++) {
  var image = getElementById('image-' + (i + i));//
  image.addEventListener('click', onClick);
}
function onClick(event){
  if (totalClicks === maxClicks){
  totalClicks++;
  //otherwise remive the event listenerfrom the
  //if the link from the item clicked matched the particular item in our array of items
  //then increase that one item 's click by one
  //for every
  // for (var i = 0; i < allItems.length; i++) {
  //   if(allItems[i].id === event.target.getAttribute('theDataField')) {
//allItems[parseInt(event.target.getAttribute('itemIdx'))].timesClicked++;
  var itemIdx = parsInt(event.target.getAttribute('itemIdx'));
  var itemIwant = allitem[itemIdx];
  itemIwant.timesClicked++;
  makeThree();
  {
// }else{
  //remove remove the event from the image tags
}
for(var i = 0; i < document.getElementsByClass('clickable').length; i++) {
  var image = getElementById('image-' + (i + i));
  image.removeEventListener('click', onClick);
}
var list = document.getElementByTagName('list');
for(var j = 0; j < allItems.length; j++){
  var li =documen.createElement('li');

  allItems[i].name = 'was clicked' + allItems[i].timesClicked + 'times';
  appendChild.list('li');
  //for each item in the item array , show how many times each item is clicked.

 }
//creat the list items to gointo the list
li.innerText = 'Done Clicking';

//inserttext
//for the on click evnt
//if the total aamoutnos clicks is less our click limit ,imcriment our clicks up by one
  }

}

//
//     var upNext = function(){
//       if (mouseIsCkicked){
//       var place = document.getElementById('firstPic');
//         document.getElementById('secondPic');
//         document.getElementById('thirdPic');
//       }
//     };
//     upNext();
//
//
// function replace(){
//   for (var i = 0; i === 25; i++) {
//     pull three from the page , put them back in the array;
//     slide next group of images to the page;
//     }
//   };
//
//     var results = 0;
//   var countClicks = (){
//     for (var i = 0; i <= 25; i++) {
//       if the image is clicked count it[0];
//       countClicks+= results;
//     }
// };
//
//   var storeResults = (){
//     for (var i = 0; i <= 25 ; i++) {
//       store the rsults[i];
//     }
//   };
// };
// //var firstUp = document.getElementById('firstPic');
// //append child
//
// randomTwo = Math.floor(Math.random() *productArray.length);
// while ( randomOne === randomTwo || nextUp.includes(nextUp));
//
// while (randomTwo === rand) {
//
// }
//  var oneClick = document.getElementById('firstPic','secondPic','thirdPic');
//  oneClick,addEventListener('click', clickCount);
//
//
//
//
// function clickCount(event) {
//   for (var i = 0; i < product.length; i++) {
//
//     if (product[i].id = event.target.id && clickCount < maxClicks)
//     product[i].vote++;
//     clickCount++;
//     nextUp();
//   } else if (clickCount === maxClicks) {
//     oneClick.removeEventListener('click', vote);
//     for (var i = 0; i < productArray.length; i++) {
//       productArray[i].name + '.';
//       if(product[0].dasplay > 0)
//       theList.appendChild(list);
//     }
//     break;
//   }
// }
// cilck
//
// var myBarChart = new Chart()
