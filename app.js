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
var countedClicks = [];

var itemName = ['bag', 'boots', 'wine-glass', 'banana', 'bathroom', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can'];

var path = ['img/bag.jpg', 'img/boots.jpg', 'img/wine-glass.jpg','img/banana.jpg', 'img/bathroom.jpg', 'img/breakfast.jpg','img/bubblegum.jpg', 'img/chair.jpg', 'img/cthulhu.jpg', 'img/dog-duck.jpg', 'img/dragon.jpg', 'img/pen.jpg','img/pet-sweep.jpg', 'img/scissors.jpg', 'img/shark.jpg', 'img/sweep.png', 'img/tauntaun.jpg', 'img/unicorn.jpg', 'img/usb.gif', 'img/water-can.jpg'];

var ids = ['bag.jpg','boots.jpg', 'wine-glass.jpg', 'banana.jpg', 'bathroom.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', ' tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg'];

function createItems() {
  for (var i = 0; i < itemName.length; i++) {
    new Item(itemName[i], path[i], ids[i]);
  }
}
createItems();

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

for (var i = 0; i < document.getElementsByClassName('clickable').length; i++) {
  var image = document.getElementById('image-' + (i + 1));
  image.addEventListener('click', onClick);
}
makeThreeImages();

function onClick (event) {
  var itemIdx = parseInt(event.target.getAttribute('itemIdx'));
  var itemIWant = allItems[itemIdx];
  itemIWant.timesClicked++;
  makeThreeImages();
  totalClicks++;

  if (totalClicks === maxClicks) {
    for (var i = 0; i < document.getElementsByClassName('clickable').length; i++){
      var image = document.getElementById('image-' + (i + 1));
      image.removeEventListener('click', onClick);
    }
    for (var i = 0; i < allItems.length; i++) {
      countedClicks.push(allItems[i].timesClicked);
    }
    getChart();

    // var list = document.getElementById('list');
    // for(var j = 0; j < allItems.length; j++){
    //   var li = document.createElement('li');
    //   li.innerText = allItems[j].itemName + ' ' + 'was clicked' + allItems[j].timesClicked + ' ' + 'times';
    //   list.appendChild(li);
    // }
  }
}

function getChart() {
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['bag', 'boots', 'wine-glass', 'banana', 'bathroom', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can'],
      datasets: [{
        label: '# of Votes',
        data: countedClicks,
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 206, 86)',
          'rgb(75, 192, 192)',
          'rgb(153, 102, 255)',
          'rgb(255, 159, 64)'
        ],
        borderColor: [
          'rgba(255,99,132)',
          'rgba(54, 162, 235)',
          'rgba(255, 206, 86)',
          'rgba(75, 192, 192)',
          'rgba(153, 102, 255)',
          'rgba(255, 159, 64)'
        ],
        borderWidth: 2
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });
}
